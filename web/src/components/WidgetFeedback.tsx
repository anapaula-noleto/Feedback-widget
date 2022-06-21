import { ChatTeardropDots } from "phosphor-react"
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./WidgetFeedbackForm"


// criar uma variável que controle se o widget foi pressionado ou não.
// essa variável será do tipo boolean

export function Widget() {

  return (
    <Popover className="absolute bottom-4 right-4 flex flex-col items-end md:bottom-8 md:right-8">

      <Popover.Panel><WidgetForm /></Popover.Panel>

      <Popover.Button className="bg-teal-500 rounded-full px-3 h-12 flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">
            Feedback
          </span>
        </span>
      </Popover.Button>
    </Popover>

  )
}