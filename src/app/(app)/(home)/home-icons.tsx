import { FaRegSadCry } from 'react-icons/fa'
import { GiEnrage } from 'react-icons/gi'
import { PiMaskSad } from 'react-icons/pi'

export function HomeIcons() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-custom-orange-500 font-bold">
        Eu te ajudo a lidar com
      </span>
      <div className="flex gap-10">
        <div className="flex flex-col items-center gap-1">
          <PiMaskSad
            size={40}
            className="rounded-sm bg-slate-300 p-1 text-slate-500"
          />
          <span className="text-xs text-white">Ansiedade</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <FaRegSadCry
            size={40}
            className="rounded-sm bg-slate-300 p-1 text-slate-500"
          />
          <span className="text-xs text-white">Depressão</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-slate-500">
          <GiEnrage size={40} className="rounded-sm bg-slate-300 p-1" />
          <span className="text-xs text-white">Irritabilidade</span>
        </div>
      </div>
    </div>
  )
}
