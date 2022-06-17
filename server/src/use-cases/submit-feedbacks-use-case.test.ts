import { SubmitFeedbackUseCase } from "./submit-feedbacks-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

// o desbribe cria vários testes para uma única funcionalidade
describe('Submit feedback', () => {

  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  )

  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'This is a bug',
      screenshot: 'data:image/png;base64/3847834783'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit without a type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'This is a bug',
      screenshot: 'data:image/png;base64/3847834783'
    })).rejects.toThrow()
  })

  it('should not be able to submit without a comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64/3847834783'
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'this is a bug',
      screenshot: 'not_an_base64_png_image'
    })).rejects.toThrow()
  })

})