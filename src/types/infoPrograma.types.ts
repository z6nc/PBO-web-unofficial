import type { Programa } from "./programas.types";
type programas = Pick<Programa, 'programa' >;

export interface PROPSINFOPROGRAMA extends programas {
    inicio: string;
    fin: string;
    imagen?: string;
}