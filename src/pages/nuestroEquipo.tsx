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
            <HEADERMAIN imagen="https://pbo.pe/wp-content/uploads/2017/03/HOME.png?id=1127" info="PBO Radio" priority>
                <AlertaInformativa />
                <Navbar />
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