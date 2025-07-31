export const ImagenCustom = ({src , alt  , estilo}:{src :string , alt:string , estilo?:string}) => {
    return (
        <div className={` w-70 h-70 md:w-96 md:h-96  group overflow-hidden rounded-lg ${estilo}`}>
            <img src={src} alt={alt} className="w-full h-full object-cover  group-hover:scale-105 transition-all ease-linear duration-100" />
        </div>

    )
}

