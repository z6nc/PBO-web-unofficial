import { Navbar } from "../components/layout/Navbar/navbar"
import { HEADERMAIN, HeroSection } from "../components/layout/Header/index"
import { About } from "../components/layout/About/about"
import { GridProgramacion, GridCableOperadores } from "../components/layout/GridProgramaciones/index";
import { Banner } from "../components/layout/Banner/banner"
function App() {
  return (
    <>
      <HEADERMAIN imagen="/src/assets/fondoPBO.png">
        <Navbar />
        <HeroSection />
      </HEADERMAIN>
      <main className="w-full  lg:max-w-7xl mx-auto  flex flex-col items-center justify-center gap-y-9">
        <GridProgramacion rol="Conductor" numeroGRID={6} posiciontitulo="mr-auto" nombreTitulo="PROGRAMACION SEMANAL" />
        <Banner titulo="Escúchanos en el 91.9 FM" />
        <GridProgramacion rol="Periodista" numeroGRID={6} posiciontitulo="mr-auto" nombreTitulo="NUESTROS PRESENTADORES" />
        <Banner titulo="Disponibles las 24 horas " />
        <GridCableOperadores categoria="cable" />
        <About />
      </main>
    </>
  )
}
export default App
