import { Navbar } from "../components/layout/Navbar/navbar"
import { HEADERMAIN , HeroSection} from "../components/layout/Header/index"
import { About } from "../components/layout/About/about"
import { GridProgramacion } from "../components/layout/GridProgramaciones/gridProgramacion"
import { Banner } from "../components/layout/Banner/banner"
function App() {
  return (
    <>
    <HEADERMAIN imagen="/src/assets/fondoPBO.png">
      <Navbar/>
      <HeroSection/>
    </HEADERMAIN>
    <main className="w-full  lg:max-w-7xl mx-auto  flex flex-col items-center justify-center gap-y-9">
      <GridProgramacion rol="Conductor" numeroGRID={6}  posiciontitulo="mr-auto" nombreTitulo="NUESTRA PROGRAMACION" />
      <Banner/>
      
       <About/>
    </main>
    </>
  )
}
//  mañana avanzar con imagen central grande los integrantes de la radio y los programas que se emiten
export default App
