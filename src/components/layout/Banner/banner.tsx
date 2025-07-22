export const Banner = ({titulo}: {titulo: string}) =>{
    return(
        <div className="w-full h-32 bg-PBO flex flex-col items-center justify-center " >
            <h4 className="text-white text-center text-3xl md:text-4xl font-bold font-Monserat">{titulo}</h4>
        </div>
    )
}