import type { PROPSLOGO } from "../../types/logo.types";

export const Logo = ({ estilo}: PROPSLOGO) => {
  return (
    <div className={estilo}>
      <img
        className="w-full h-full object-cover shadow-2xl shadow-amber-300"
        src="https://pbo.pe/wp-content/uploads/2022/11/pbo.png"
        alt="Logo de PBO"
      />
    </div>
  );
};
