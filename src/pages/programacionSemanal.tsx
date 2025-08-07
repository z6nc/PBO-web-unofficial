
import { HEADERMAIN } from "../components/layout/Header";
import { Navbar } from "../components/layout/Navbar/navbar";
import { TituloHeader } from "../components/common/titulos/TitulosHeader";
import { AlertaInformativa } from "../components/common/avisosBanner/alertaInformativa";
import { LayoutPrincipal } from "../components/layout/LayoutPrincipal/layoutPrincipal";
import { ListaProgramacion } from "../components/layout/ListaHorariosProgramacion/listaProgramacion";
import { EnVivoYoutubeBanner } from "../components/common/avisosBanner";
import { Footer } from "../components/layout/Footer/footer";
export default function ProgramacionSemanal() {
    return (
        <div className="relative">
            <HEADERMAIN imagen="https://res.cloudinary.com/dleem7osr/image/upload/EquipoPBO_blqxgm.webp" info="PBO Radio" priority>
                <AlertaInformativa />
                <Navbar TipoNavbar="md:bg-transparent" />
                <TituloHeader titulo="Conoce a Nuestra Programacion" informacion="Ofrecemos noticias, análisis y entretenimiento con las voces más reconocidas del periodismo peruano." />
            </HEADERMAIN>
            <LayoutPrincipal>
                <ListaProgramacion />
            </LayoutPrincipal>
            <EnVivoYoutubeBanner />
            <Footer />
        </div>
    );
}