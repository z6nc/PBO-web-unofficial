interface SubtitleCustomProps {
    titulo: string;
}
export const SubtitleCustom = ({ titulo}:SubtitleCustomProps) => {
    return(
     <h2 className="text-2xl font-bold mb-4 font-Monserat bg-PBO text-white py-3 px-4 mr-auto">{titulo}</h2>
    );
}