import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NuestroEquipo from "../pages/nuestroEquipo";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nuestro-equipo" element={<NuestroEquipo />} />

    </Routes>
  );
}
