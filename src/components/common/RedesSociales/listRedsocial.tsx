import { RedesSocialesPBO } from "../../../data/redesSociales";
export function RedesSociales({ estilo }: { estilo?: string }) {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-white">Síguenos</h4>
      <div className={`flex space-x-3 ${estilo}`}>
        {RedesSocialesPBO.map((red) => (
          <a
            key={red.NombreRedSocial}
            href={red.url}
            target="_blank"
            className="group relative p-3  bg-black/90 hover:bg-white hover:text-black rounded-xl transition-all duration-300 border border-white hover:border-white/30 hover:scale-110"
            aria-label={red.NombreRedSocial}
          >
            {red.logo}
          </a>
        ))}
      </div>
    </div>

  );
}