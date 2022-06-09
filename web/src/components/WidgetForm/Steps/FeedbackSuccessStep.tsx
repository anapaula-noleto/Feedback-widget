import { CloseButton } from "../../CloseButton";
import successImageUrl from '../../../assets/success.svg'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[250px]">
        <img src={successImageUrl} alt="Imagem de uma sinal de sucesso" />

        <span className="text-xl mt-2">Agradecemos o feedback</span>

        <button 
        className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent leading-6 hover:bg-zinc-700 transition-colors"
        type="button"
        onClick = {onFeedbackRestartRequested}
        >
          Quero enviar outro
        </button>

      </div>

      
    </>
  )
}