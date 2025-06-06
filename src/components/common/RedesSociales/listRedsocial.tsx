import { RedesSocialesPBO } from "../../../data/redesSociales";
import type { EstiloProps } from "../../../types/estilo.types";
export function RedesSociales({estilo}:EstiloProps) {
  return (
    <ul className="flex justify-center items-center space-x-3 text-white my-3">
      {RedesSocialesPBO.map((red) => (
        <li key={red.id} className={` ${estilo}  rounded-lg border-1`}>
          <a href={red.url} target="_blank " >
             {red.logo}
          </a>
        </li>
      ))}
    </ul>
  );
}