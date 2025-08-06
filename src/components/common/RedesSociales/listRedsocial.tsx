import { RedesSocialesPBO } from "../../../data/redesSociales";
export function RedesSociales({ estilo }: { estilo?: string }) {
  return (
    <div className={`flex space-x-3 ${estilo}`}>
      {RedesSocialesPBO.map((red) => (
        <a
          key={red.NombreRedSocial}
          href={red.url}
          target="_blank"
          className="group relative p-3 bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-110"
          aria-label={red.NombreRedSocial}
        >
          {red.logo}
        </a>
      ))}
    </div>
  );
}