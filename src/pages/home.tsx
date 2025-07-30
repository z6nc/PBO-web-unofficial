import { Navbar } from "../components/layout/Navbar/navbar"
import { HEADERMAIN, HeroSection } from "../components/layout/Header/index"
import { GridProgramacion, ListaCableOperadores } from "../components/layout/GridProgramaciones/index";
import { Banner } from "../components/layout/Banner/banner"
import { NewsletterSubscription } from "../components/common/Email/NewsletterSubscription";
import { Footer } from "../components/layout/Footer/footer";
import { ViewModalSocialMedia } from "../components/modal/ViewModalSocialMedia";
import { EnVivoYoutubeBanner } from "../components/common/avisosBanner/enVivoYoutubeBanner";
export default function Home() {
    return (

        <div className="relative">
            <ViewModalSocialMedia />
            <HEADERMAIN imagen="https://res.cloudinary.com/dleem7osr/image/upload/v1753805053/fondoPBO_ogifqw.png" info="PBO Radio" priority>
                <Banner>
                    <p className="text-white py-1">Este no es el sitio oficial de PBO </p>
                </Banner>
                <Navbar />
                <HeroSection />
            </HEADERMAIN>
            <main className="w-full  lg:max-w-7xl mx-auto flex flex-col items-center justify-center gap-y-9 py-4">
                <GridProgramacion rol="Conductor" numeroGRID={6} posiciontitulo="mr-auto" nombreTitulo="PROGRAMACION SEMANAL" />
               <EnVivoYoutubeBanner />
                <GridProgramacion rol="Periodista" numeroGRID={6} posiciontitulo="mr-auto" nombreTitulo="NUESTROS PRESENTADORES" />
                <NewsletterSubscription />
                <ListaCableOperadores categoria="cable" />
            </main>
            <Footer />
        </div>
    )
}