import { HEADERMAIN } from "../components/layout/Header";
import { Navbar } from "../components/layout/Navbar/navbar";
import { AlertaInformativa } from "../components/common/avisosBanner/alertaInformativa";
import { LayoutPrincipal } from "../components/layout/LayoutPrincipal/layoutPrincipal";
import { ListadoColaboradores } from "../components/common/ListadoColaboradores/listadoColabarodores";
import { TituloHeader } from "../components/common/titulos/TitulosHeader";
import { NewsletterSubscription } from "../components/common/Email/NewsletterSubscription";
import { Footer } from "../components/layout/Footer/footer";
export default function NuestroEquipo() {
    return (
        <div className="relative">
            <HEADERMAIN imagen="https://res.cloudinary.com/dleem7osr/image/upload/EquipoPBO_blqxgm.webp" info="PBO Radio" priority>
                <AlertaInformativa />
                <Navbar TipoNavbar="md:bg-transparent" />
                <TituloHeader titulo="Conoce a Nuestro Equipo" informacion="Periodistas, técnicos y productores trabajan juntos cada día en PBO Radio para llevarte información confiable." />
            </HEADERMAIN>
            <LayoutPrincipal>
                <ListadoColaboradores />
            </LayoutPrincipal>
            <NewsletterSubscription />
            <Footer />
        </div>
    );
}