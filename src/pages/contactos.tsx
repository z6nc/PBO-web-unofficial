
import { Navbar } from "../components/layout/Navbar/navbar";
import { SubtitleCustom } from "../components/common/titulos/index";
import { AlertaInformativa } from "../components/common/avisosBanner/alertaInformativa";
import { LayoutPrincipal } from "../components/layout/LayoutPrincipal/layoutPrincipal";
import { FormularioContacto } from "../components/layout/Formularios/formContacto";
import { SectionContactos } from "../components/common/contactos/contactos";
import { MapaPbo } from "../components/layout/MapaPbo/mapaPbo";
import { Footer } from "../components/layout/Footer/footer";
export default function Contactos() {
    return (
        <div className="relative">
            <AlertaInformativa />
            <Navbar TipoNavbar="md:bg-black" />

            <LayoutPrincipal>
                <SubtitleCustom Subtitulo="Contactanos " estilo="text-center" />
                <section className="grid grid-cols-1  md:grid-cols-2 gap-4 justify-center md:mt-9 lg:mb-24">
                    <div className="flex flex-col">
                    <FormularioContacto />
                    <SectionContactos estilo="mx-5 flex-col lg:flex-row py-6"/>
                    </div>
                    <MapaPbo />
                </section>
            </LayoutPrincipal>
            <Footer />
        </div>
    );
}