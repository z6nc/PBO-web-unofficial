import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NuestroEquipo from "../pages/nuestroEquipo";
import ProgramacionSemanal from "../pages/programacionSemanal";
import Publicitate from "../pages/publicitate";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nuestro-equipo" element={<NuestroEquipo />} />
      <Route path="/programacion-semanal" element={<ProgramacionSemanal />} />
      <Route path="/publicitate" element={<Publicitate />} />
    </Routes>
  );
}
