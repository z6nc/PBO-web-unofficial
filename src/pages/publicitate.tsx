
import { Navbar } from "../components/layout/Navbar/navbar";
import { SubtitleCustom } from "../components/common/titulos/index";
import { AlertaInformativa } from "../components/common/avisosBanner/alertaInformativa";
import { LayoutPrincipal } from "../components/layout/LayoutPrincipal/layoutPrincipal";
import { FormPublicitate } from "../components/layout/Formularios/formPublicitate";
import { Footer } from "../components/layout/Footer/footer";
export default function Publicitate() {
    return (
        <>
                <AlertaInformativa />
                <Navbar TipoNavbar="md:bg-black" />
               
            <LayoutPrincipal>
                <SubtitleCustom Subtitulo="Forma parte de nuestra familia" estilo="text-center my-7" />
                <section className="grid grid-cols-1  md:grid-cols-2 gap-4 justify-center mt-9 lg:mb-24">
                    <FormPublicitate />
                    <div className=" w-full h-full overflow-hidden ">
                        <img loading="lazy" className="w-full object-cover h-full " src="https://res.cloudinary.com/dleem7osr/image/upload/setPBO_ympdqa.webp" alt="Set de PBO" />
                    </div>
                </section>
            </LayoutPrincipal>
            <Footer />
        </>
    );
}