import { Navbar } from "../components/layout/Navbar/navbar"
import { HEADERMAIN, HeroSection } from "../components/layout/Header/index"
import { LayoutPrincipal } from "../components/layout/LayoutPrincipal/layoutPrincipal";
import { GridProgramacion, ListaCableOperadores } from "../components/layout/GridProgramaciones/index";
import { NewsletterSubscription } from "../components/common/Email/NewsletterSubscription";
import { Footer } from "../components/layout/Footer/footer";
import { EnVivoYoutubeBanner, AlertaInformativa } from "../components/common/avisosBanner/index";
export default function Home() {
    return (
        <>
            <HEADERMAIN imagen="https://res.cloudinary.com/dleem7osr/image/upload/fondoPBO_zrnj7m.webp" info="PBO Radio" priority>
                <AlertaInformativa />
                <Navbar TipoNavbar="md:bg-transparent" />
                <HeroSection />
            </HEADERMAIN>
            <LayoutPrincipal>
                <GridProgramacion rol="Conductor" numeroGRID={6} posiciontitulo="mr-auto my-7" nombreTitulo="PROGRAMACION SEMANAL" />
                <EnVivoYoutubeBanner />
                <GridProgramacion rol="Periodista" numeroGRID={6} posiciontitulo="mr-auto my-7" nombreTitulo="NUESTROS PRESENTADORES" />
                <NewsletterSubscription />
                <ListaCableOperadores categoria="cable" />
            </LayoutPrincipal>
            <Footer />

        </>
    )
}