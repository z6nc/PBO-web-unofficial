
export const SubtitleCustom = ({ Subtitulo, estilo }: { Subtitulo: string, estilo?: string }) => {
    return (
        <div className={`bg-PBO text-white py-4 px-4  my-7 ${estilo}`}>
            <h2 className="text-3xl font-bold  font-Monserat uppercase ">{Subtitulo}</h2>
        </div>
    );
}