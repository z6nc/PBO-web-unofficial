import { Navbar } from "../components/layout/Navbar/navbar"
import { HEADERMAIN, HeroSection } from "../components/layout/Header/index"
import { LayoutPrincipal } from "../components/layout/LayoutPrincipal/layoutPrincipal";
import { GridProgramacion, ListaCableOperadores } from "../components/layout/GridProgramaciones/index";
import { NewsletterSubscription } from "../components/common/Email/NewsletterSubscription";
import { Footer } from "../components/layout/Footer/footer";
import { ViewModalSocialMedia } from "../components/modal/ViewModalSocialMedia";
import { EnVivoYoutubeBanner, AlertaInformativa } from "../components/common/avisosBanner/index";
export default function Home() {
    return (
        <div className="relative">
            <ViewModalSocialMedia />
            <HEADERMAIN imagen="https://res.cloudinary.com/dleem7osr/image/upload/v1753805053/fondoPBO_ogifqw.png" info="PBO Radio"  priority>
                <AlertaInformativa />
                <Navbar />
                <HeroSection />
            </HEADERMAIN>
            <LayoutPrincipal>
                <GridProgramacion rol="Conductor" numeroGRID={6} posiciontitulo="mr-auto" nombreTitulo="PROGRAMACION SEMANAL" />
                <EnVivoYoutubeBanner />
                <GridProgramacion rol="Periodista" numeroGRID={6} posiciontitulo="mr-auto" nombreTitulo="NUESTROS PRESENTADORES" />
                <NewsletterSubscription />
                <ListaCableOperadores categoria="cable" />
            </LayoutPrincipal>
            <Footer />
        </div>
    )
}