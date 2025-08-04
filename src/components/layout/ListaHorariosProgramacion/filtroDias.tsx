import { ButtonCustom } from "../../common"
interface FiltroDiasProps {
    dia: string;
    setDia: (nuevoDia: string) => void;
}
export const FiltroDias = ({ dia, setDia }: FiltroDiasProps) => {
    const TodosDias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    return (
        <div className="flex flex-wrap gap-2 justify-center items-center  ">
            {
                TodosDias.map((programa, index) => {
                    const estiloDias = dia === programa ? "bg-red-500" : "bg-BlackPBO"
                    return (
                        <ButtonCustom className={`text-white ${estiloDias} py-2 px-2 lg:px-4 cursor-pointer`} key={index} onClick={() => setDia(programa)} ariaLabel={`boton del dia ${dia}`}>
                            {programa}
                        </ButtonCustom>
                    )

                })

            }
        </div>
    )
}