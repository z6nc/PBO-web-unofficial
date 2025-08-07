import { SubtitleCustom } from "./subtitleCustom"
export const TituloHeader = ({titulo , informacion} : {titulo:string ,informacion :string}) => {
    return (
        <section className=" h-[100dvh] md:h-[80dvh] w-full flex  flex-col items-center md:items-start text-center md:text-start justify-end  p-6">
            <SubtitleCustom Subtitulo={titulo} estilo="text-center " />
            <p className="  md:w-[700px] p-2 text-white text-base  md:text-lg">{informacion}</p>
        </section>
    )
} 