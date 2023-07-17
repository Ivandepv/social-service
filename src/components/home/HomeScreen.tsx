import "./HomeScreen.css"
import { useMediaQuery } from 'react-responsive';
import {motion} from "framer-motion";



interface DesktopProps {
    children: JSX.Element;
  }
  
  interface MobileProps {
    children: JSX.Element;
  }

const Desktop = ({ children }:DesktopProps) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  
  const Mobile = ({ children }:MobileProps) => {
    const isMobile = useMediaQuery({ maxWidth: 991 });
    return isMobile ? children : null;
  };

export const HomeScreen = () => {

  return (
    <motion.div
      initial={{width:0}}
      animate={{width:"100vw"}}
      exit={{x:window.innerWidth, transition: {duration:0.1}}}
    >
      <h1 className='title'>Fundación Por la Educación IAP</h1>
      <div className="title-item">
            <div className="item-img img1"></div>
            <p>Institución de Asistencia Privada, sin fines de lucro, que tiene como beneficiarios en todas y cada una de las actividades asistenciales que realiza a personas, sectores y regiones de escasos recursos y grupos vulnerables de la sociedad.</p>
      </div>

      <Desktop>
        <div className="container">
          <div className="item">
            <div className="item-img img2"></div>
            <h2>Objeto Social</h2>
            <p>Fomentar e implementar programas educativos, culturales, científicos, tecnológicos, deportivos y de orientación social; así como, la promoción organizada de la población en las acciones que mejoren sus condiciones de subsistencia en beneficio de la comunidad.  </p>
          </div>
          <div className="item">
            <div className="item-img img3"></div>
            <h2>Misión</h2>
            <p>Contribuir a mejorar la educación de nuestros niños mexicanos a través de programas educativos que incentiven el aprendizaje y forjen las habilidades para una crecimiento del ser y de su entorno.</p>
          </div>
          <div className="item">
            <div className="item-img img4"></div>
            <h2>Visión</h2>
            <p>Tenemos una visión holística del desarrollo de cada uno de los beneficiarios; buscamos el desarrollo intelectual, físico y emocional del individuo, fomentando competencias y habilidades para la vida para que puedan enfrentarse exitosamente a las exigencias y desafíos de la vida diaria.</p>
          </div>
        </div>
      </Desktop>

      <Mobile>
      <div className="container-mobile">
          <div className="item-mobile">
            <div className="item-img-mobile img2"></div>
            <h2>Objeto Social</h2>
            <p>Fomentar e implementar programas educativos, culturales, científicos, tecnológicos, deportivos y de orientación social; así como, la promoción organizada de la población en las acciones que mejoren sus condiciones de subsistencia en beneficio de la comunidad.  </p>
          </div>
          <div className="item-mobile">
            <div className="item-img-mobile img3"></div>
            <h2>Misión</h2>
            <p>Contribuir a mejorar la educación de nuestros niños mexicanos a través de programas educativos que incentiven el aprendizaje y forjen las habilidades para una crecimiento del ser y de su entorno.</p>
          </div>
          <div className="item-mobile">
            <div className="item-img-mobile img4"></div>
            <h2>Visión</h2>
            <p>Tenemos una visión holística del desarrollo de cada uno de los beneficiarios; buscamos el desarrollo intelectual, físico y emocional del individuo, fomentando competencias y habilidades para la vida para que puedan enfrentarse exitosamente a las exigencias y desafíos de la vida diaria.</p>
          </div>
        </div>
      </Mobile>
        
      
      <footer>
        <div className="row1">
          Copyright © 2023 POR LA EDUCACIÓN I.A.P. - Todos los derechos reservados.
        </div>
        <div className="row2">
          Conéctate con nosotros
        </div>
        <div className="row3">
          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
        </div>
      </footer>
    </motion.div>
  )
}
