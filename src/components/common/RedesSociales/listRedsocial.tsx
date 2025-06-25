import { RedesSocialesPBO } from "../../../data/redesSociales";
export function RedesSociales() {
  return (
    <ul className="flex justify-center items-center space-x-2 text-white my-3">
      {RedesSocialesPBO.map((red) => (
        <li key={red.id} className={" p-2 rounded-lg border-2 bg-gray-800 backdrop-brightness-90  border-PBO"}>
          <a href={red.url} target="_blank " >
             {red.logo}
          </a>
        </li>
      ))}
    </ul>
  );
}