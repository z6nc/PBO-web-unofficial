import { Navbar } from "../components/layout/Navbar/navbar"
import { HEADERMAIN, HeroSection } from "../components/layout/Header/index"
import { About } from "../components/layout/About/about"
import { GridProgramacion, GridCableOperadores } from "../components/layout/GridProgramaciones/index";
import { Banner } from "../components/layout/Banner/banner"
import { EmailCustom } from "../components/common/Email/emailCustom";
import { Footer } from "../components/layout/Footer/footer";
import { ViewModalSocialMedia } from "../components/modal/ViewModalSocialMedia";
function App() {
  return (
    <>
    <div className="relative">
      <ViewModalSocialMedia />
      <HEADERMAIN imagen="/src/assets/fondoPBO.png">
        <Navbar />
        <HeroSection />
      </HEADERMAIN>
      <main className="w-full  lg:max-w-7xl mx-auto flex flex-col items-center justify-center gap-y-9 py-4">
        <GridProgramacion rol="Conductor" numeroGRID={6} posiciontitulo="mr-auto" nombreTitulo="PROGRAMACION SEMANAL" />
        <Banner>
          <h4 className="text-white text-center text-3xl md:text-4xl font-bold font-Monserat">Escúchanos en el 91.9 FM</h4>
        </Banner>
        <GridProgramacion rol="Periodista" numeroGRID={6} posiciontitulo="mr-auto" nombreTitulo="NUESTROS PRESENTADORES" />
        <EmailCustom />
        <GridCableOperadores categoria="cable" />
        <About />
      </main>
      <Footer/>
      </div>
    </>
  )
}
export default App


/*
Cosas por realizar
- [X] Terminar el Footer con los enlaces a las redes sociales y la información de contacto.
- [ ] crear un modal  , para las redes sociales 
- [ ] Buscar la manera de implementar estado globales para manjear los progrmas 
*/