import { Banner } from "../../layout/Banner/banner"

export const AlertaInformativa = () => {
    return (
        <Banner estilo="border-b border-red-500">
            <p className="text-white py-1 ">Este no es el sitio oficial de PBO </p>
        </Banner>
    )
}