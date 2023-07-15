import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { HomeScreen } from "../components/home/HomeScreen";
import { Welcome } from "../components/welcome/Welcome";
import { ProgramasSociales } from "../components/programas-sociales/ProgramasSociales";
import { Contacto } from "../components/contacto/Contacto";
import { ImpactoSocial } from "../components/impacto-social/ImpactoSocial";
import { Donaciones } from "../components/donaciones/Donaciones";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        {window.location.pathname !== "/" && <Navbar />}

        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/programas-sociales" element={<ProgramasSociales />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/impacto-social" element={<ImpactoSocial />} />
          <Route path="/donaciones" element={<Donaciones />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  )
}
