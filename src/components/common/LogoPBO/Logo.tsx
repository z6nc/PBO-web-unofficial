import type  {LogoProps} from "../../../types/logos.types";

export const Logo = ({ estilo, priority=false }: LogoProps) => {
  return (
    <div className={estilo}>
      <img
        className={`w-full h-full object-cover shadow-2xl  rounded-2xl`}
        src="https://pbo.pe/wp-content/uploads/2022/11/pbo.png"
        alt="Logo de PBO"
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
};
