import type { EstiloProps } from "../../types/estilo.types";

interface SubtitleCustomProps extends EstiloProps {
    titulo: string;
}
export const SubtitleCustom = ({ titulo , estilo}:SubtitleCustomProps) => {
    return(
        <div className={`bg-PBO text-white py-4 px-4  my-7 ${estilo}`}>
            <h2 className="text-3xl font-bold  font-Monserat ">{titulo}</h2>
        </div>
    );
}