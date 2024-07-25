import { FaRegSadCry } from 'react-icons/fa'
import { GiEnrage } from 'react-icons/gi'
import { PiMaskSad } from 'react-icons/pi'

export function HomeIcons() {
  return (
    <div className="flex flex-col gap-4 pb-6">
      <span className="text-sm font-bold text-custom-blue-900 md:text-xl">
        Eu te ajudo a lidar com
      </span>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-1">
          <PiMaskSad
            size={40}
            className="rounded-sm bg-slate-300 p-1 text-custom-blue-900"
          />
          <span className="text-xs text-custom-blue-900 md:text-base">
            Ansiedade
          </span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <FaRegSadCry
            size={40}
            className="rounded-sm bg-slate-300 p-1 text-custom-blue-900"
          />
          <span className="text-xs text-custom-blue-900 md:text-base">
            Depressão
          </span>
        </div>

        <div className="flex flex-col items-center gap-1 text-custom-blue-900">
          <GiEnrage size={40} className="rounded-sm bg-slate-300 p-1" />
          <span className="text-xs text-custom-blue-900 md:text-base">
            Irritabilidade
          </span>
        </div>
      </div>
    </div>
  )
}
