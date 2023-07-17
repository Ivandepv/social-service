
import "./ImpactoSocial.css"
import { motion } from 'framer-motion';

import { useMediaQuery } from 'react-responsive';

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
  
export const ImpactoSocial = () => {
  return (
    <motion.div
      initial={{width:0}}
      animate={{width:"100vw"}}
      exit={{x:window.innerWidth, transition: {duration:0.1}}}
    >
      <h1 className='title'>Impacto Social Generado</h1>
      <hr/>

      <Desktop>
        <div className='impacto-content'>
          <div className='impacto-content_img'></div>
          <ul>
            <li>Más de 15 años de trabajo social en el estado de Sonora.</li>
            <li>600 escuelas de educación pública beneficiadas.</li>
            <li>600 Talleres de sensibilización en diversos temas para padres de familia.</li>
            <li>460 niños y niñas indígenas migrantes beneficiados con programas de educación socioemocional.</li>
            <li>40 niños indígenas migrantes no escolarizados, incorporados al sistema de educación pública mediante la nivelación académica.</li>
            <li>Talleres para desarrollar habilidades de Lecto-escritura para niños de la etnias Triqui y Mixtecos.</li>
            <li>680 niños y niñas indígenas migrantes beneficiados.</li>
            <li>Más de 10,000 alumnos beneficiados.</li>
            <li>380 niños indígenas migrantes apoyados con talleres de nivelación académica.</li>
          </ul>
        </div>
      </Desktop>

      <Mobile>
      <div className='container'>
          <div className='impacto-content_img'></div>
          <ul>
            <li>Más de 15 años de trabajo social en el estado de Sonora.</li>
            <li>600 escuelas de educación pública beneficiadas.</li>
            <li>600 Talleres de sensibilización en diversos temas para padres de familia.</li>
            <li>460 niños y niñas indígenas migrantes beneficiados con programas de educación socioemocional.</li>
            <li>40 niños indígenas migrantes no escolarizados, incorporados al sistema de educación pública mediante la nivelación académica.</li>
            <li>Talleres para desarrollar habilidades de Lecto-escritura para niños de la etnias Triqui y Mixtecos.</li>
            <li>680 niños y niñas indígenas migrantes beneficiados.</li>
            <li>Más de 10,000 alumnos beneficiados.</li>
            <li>380 niños indígenas migrantes apoyados con talleres de nivelación académica.</li>
          </ul>
        </div>
      </Mobile>


      <h1 className='title'>Actividades</h1>
      <hr />

      <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_yP6zLY9VFI"  allowFullScreen></iframe>
      </div>

      <h2 className='act_sub'>Echa un vistazo a algunas de nuestras actividades.</h2>


      <div className="videos">
        <div className="video-container2">
          <iframe className="video" src="https://www.youtube.com/embed/YsCYeXSR0KM"  allowFullScreen></iframe>
          <p className="caption"> Así empezamos en 2017 en conjunto con Naranjeros de Hermosillo y Escudo ciudadano. </p>
        </div>
        <div className="video-container2">
          <iframe className="video" src="https://www.youtube.com/embed/BMURuJXRj4k" allowFullScreen></iframe>
          <p className="caption">Posada Motor Extremo 2019 a beneficio de niños de Casas Hogar:UNCARI, JINESEKI, MALALA, CIUDAD DE LOS NIÑOS, VILLAS DE PAPA FRANCISCO, CASA SAN BERNARDO, FUNDACIÓN JUAN NAVARRETE, INVASIÓN ALTARES Y MÁS..</p>
        </div>
      </div>

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
