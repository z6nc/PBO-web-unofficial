import { Navbar } from "../components/layout/Navbar/navbar"
import { HEADERMAIN , HeroSection} from "../components/layout/Header/index"
function App() {
  

  return (
    <>
    <HEADERMAIN imagen="/src/assets/fondoPBO.png">
      <Navbar/>
      <HeroSection/>
    </HEADERMAIN>

    </>
  )
}

export default App
