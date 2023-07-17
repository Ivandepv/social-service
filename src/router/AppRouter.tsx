
import {
  BrowserRouter as Router,

} from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";

import { AnimatedRoutes } from "./AnimatedRoutes";

export const AppRouter = () => {

  return (
    <Router>
      <div>
        {window.location.pathname !== "/" && <Navbar />}

      <AnimatedRoutes />
      </div>
    </Router>
  )
}
