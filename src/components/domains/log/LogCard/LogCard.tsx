import { DefaultImage } from "@/components/common/Image"

interface Props {
  log: any
}

export const LogCard = ({ log }: Props) => {
  return (
    <div className="relative bg-black shadow-lg rounded-lg group h-64 w-64 flex justify-center items-center">
        {
          log.image_url == null ? (
            <div className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center opacity-80 hover:opacity-50 transition-all duration-500 ease-in-out object-cover">
              <DefaultImage />
            </div>
          ) : (
            <img src={log.image_url} alt={log.title} className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out object-cover" />
          )
        }
      <p className="font-bold text-lg text-white absolute z-20 pointer-events-none">
        {log.title}
      </p>
    </div>
  )
}