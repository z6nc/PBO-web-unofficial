
import { Navbar } from "../components/layout/Navbar/navbar";
import { SubtitleCustom } from "../components/common/titulos/index";
import { AlertaInformativa } from "../components/common/avisosBanner/alertaInformativa";
import { LayoutPrincipal } from "../components/layout/LayoutPrincipal/layoutPrincipal";
import { ListaProgramacion } from "../components/layout/ListaHorariosProgramacion/listaProgramacion";
import { NewsletterSubscription } from "../components/common/Email/NewsletterSubscription";
import { Footer } from "../components/layout/Footer/footer";
export default function ProgramacionSemanal() {
    return (
        <div className="relative">
            <AlertaInformativa />
            <Navbar />
            <LayoutPrincipal>
                <SubtitleCustom Subtitulo="Nuestra Programacion Semanal" estilo="text-center" />
                <ListaProgramacion />
            </LayoutPrincipal>
            <NewsletterSubscription />
            <Footer />
        </div>
    );
}