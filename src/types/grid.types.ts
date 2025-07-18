import type { PROPSColaboradores } from "./colaboradores.types";

export interface PROPSGRID extends  Pick<PROPSColaboradores, 'rol'> {
   numeroGRID : number
   posiciontitulo: string
   nombreTitulo :string
}