import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton/>
      </header>
    
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return(
            <button
            // evitar erro usar a propriedade key, cada item de uma lista deve ter uma chave única
              key={key}

              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center 
              gap-2 border-2 border-transparent hover:border-teal-500 focus:border-teal-500 focus:outline-none transition-colors"
              // passando função com parâmetro pelo onClick
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>

    </>
  )
}