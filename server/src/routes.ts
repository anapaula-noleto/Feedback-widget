import { Router } from 'express';
import nodemailer from 'nodemailer';
import { prisma } from "./prisma";
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedbacks-use-case';

export const routes = Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bd6b2d1a38abc1",
    pass: "ea695ab79de4e5"
  }
});


routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  // await transport.sendMail({
  //   from: 'Feedback widget <oi@feedbackwidget.com>',
  //   to: 'Ana Paula <apaulanazarenonoleto@gmail.com  >',
  //   subject: 'Novo feedback',
  //   html: [
  //     `<div>`,
  //     `<h1>Novo feedback: ${type}</h1>`,
  //     `<p>Comentário: ${comment}</p>`,
  //     `</div>`,
  //   ].join('\n')
  // })

  return res.status(201).send()
})