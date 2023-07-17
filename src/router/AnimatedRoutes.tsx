
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import {AnimatePresence} from "framer-motion";

import { HomeScreen } from "../components/home/HomeScreen";
import { Welcome } from "../components/welcome/Welcome";
import { ProgramasSociales } from "../components/programas-sociales/ProgramasSociales";
import { Contacto } from "../components/contacto/Contacto";
import { ImpactoSocial } from "../components/impacto-social/ImpactoSocial";
import { Donaciones } from "../components/donaciones/Donaciones";

export const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/programas-sociales" element={<ProgramasSociales />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/impacto-social" element={<ImpactoSocial />} />
            <Route path="/donaciones" element={<Donaciones />} />
            <Route path="/" element={<Welcome />} />
        </Routes>
    </AnimatePresence>
  )
}
