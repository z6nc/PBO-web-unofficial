import { canalesPBO } from "../../../data/canalesPBO"
export const ListaCanalesPbo = () => {
    return (
        <section className=" my-9">
            <p className="text-lg text-white py-2 rounded-lg">Más cerca de ti, por aire, cable e internet</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {
                    canalesPBO.slice(0, 3).map((canal , idx) => (
                        <a key={idx} href={canal.url} target="_blank" className="text-gray-200 inline-flex items-center gap-4 border border-gray-300 rounded-lg backdrop-blur-lg py-1 px-2">
                            <div className=" aspect-square  w-10  lg:w-12 rounded-lg p-1">
                                <img className="w-full h-full object-cover rounded-lg  " src={canal.imagen} alt={canal.Nombre} />
                            </div>
                            <h3 className="text-base lg:text-lg font-semibold">{canal.frecuenciaPrincipal}</h3>
                        </a>
                    ))


                }
            </div>

        </section>

    )
}