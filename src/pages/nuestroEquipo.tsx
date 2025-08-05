import { HEADERMAIN } from "../components/layout/Header";
import { Navbar } from "../components/layout/Navbar/navbar";
import { Title, SubtitleCustom } from "../components/common/titulos/index";
import { AlertaInformativa } from "../components/common/avisosBanner/alertaInformativa";
import { LayoutPrincipal } from "../components/layout/LayoutPrincipal/layoutPrincipal";
import { ListadoColaboradores } from "../components/common/ListadoColaboradores/listadoColabarodores";
import { NewsletterSubscription } from "../components/common/Email/NewsletterSubscription";
import { Footer } from "../components/layout/Footer/footer";
export default function NuestroEquipo() {
    return (
        <div className="relative">
            <HEADERMAIN imagen="https://res.cloudinary.com/dleem7osr/image/upload/EquipoPBO_blqxgm.webp" info="PBO Radio" priority>
                <AlertaInformativa />
                <Navbar TipoNavbar="md:bg-transparent" />
                <section className=" h-[80dvh] text-center pt-9">
                    <Title titulo="NUESTRO EQUIPO" />
                </section>
            </HEADERMAIN>
            <LayoutPrincipal>
                <SubtitleCustom Subtitulo="UN EQUIPO DE PRIMERA A TU DISPOSICION " estilo="text-center" />
                <ListadoColaboradores />
            </LayoutPrincipal>
            <NewsletterSubscription />
            <Footer />
        </div>
    );
}