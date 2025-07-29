import { RedesSocialesPBO } from "../../../data/redesSociales";
export function RedesSociales({estilo}: {estilo?:string}) {
  return (
    <ul aria-label="Redes sociales de PBO" className={`flex justify-center items-center space-x-2 text-white my-3 ${estilo}`}>
      {RedesSocialesPBO.map((red) => (
        <li key={red.NombreRedSocial} className={" p-2 rounded-lg border-2 bg-gray-800 backdrop-brightness-90  "}>
          <a href={red.url} target="_blank" rel="noopener noreferrer" aria-label={`Visitar ${red.NombreRedSocial} de PBO`}>
             {red.logo}
          </a>
        </li>
      ))}
    </ul>
  );
}