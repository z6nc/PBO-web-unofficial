import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NuestroEquipo from "../pages/nuestroEquipo";
import ProgramacionSemanal from "../pages/programacionSemanal";
import Publicitate from "../pages/publicitate";
import Contactos from "../pages/contactos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nuestro-equipo" element={<NuestroEquipo />} />
      <Route path="/programacion-semanal" element={<ProgramacionSemanal />} />
      <Route path="/publicitate" element={<Publicitate />} />
      <Route path="/contacto" element={<Contactos />} />

    </Routes>
  );
}
