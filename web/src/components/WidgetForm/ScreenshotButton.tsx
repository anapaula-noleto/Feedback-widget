import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";


interface screenshotButtonProps {
  screenshot: string | null
  onScreenshotTaken: (screenshot: string | null) => void
}


export function ScreenshotButton({ screenshot, onScreenshotTaken }: screenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    // criar um estado para mostrar um sinal de loading enquanto a foto está sendo tirada

    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    //imagem png no formato base64 é uma forma textual de representar uma imagem png
    const base64image = canvas.toDataURL('image/png')
    //console.log(base64image)
    onScreenshotTaken(base64image)

    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotTaken(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: 500,
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-teal-500 "
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  )
}