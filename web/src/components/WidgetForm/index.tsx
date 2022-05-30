import { CloseButton } from "../CloseButton"
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react"


const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

type FeedbackType = keyof typeof feedbackTypes

/*
 Object.entries(feedbackTypes) => 

 [
  ['BUG', {...}],
  ['IDEA', {...}],
  ['THOUGHT, {...}]
 ]
*/

export function WidgetForm(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton/>
      </header>

      {!feedbackType ? (
              <div className="flex py-8 gap-2 w-full">
              {Object.entries(feedbackTypes).map(([key, value]) => {
                return(
                  <button
                  // evitar erro usar a propriedade key, cada item de uma lista deve ter uma chave única
                    key={key}
      
                    className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center 
                    gap-2 border-2 border-transparent hover:border-teal-500 focus:border-teal-500 focus:outline-none"
                    onClick={() => setFeedbackType(key as FeedbackType)}
                    type="button"
                  >
                    <img src={value.image.source} alt={value.image.alt} />
                    <span>{value.title}</span>
                  </button>
                )
              })}
            </div>
      ) : (
        <p>Hello World</p>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://github.com/anapaula-noleto">Ana</a>
      </footer>
    </div>
  )
}