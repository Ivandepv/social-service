
import "./ProgramasSociales.css"
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";

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

export const ProgramasSociales = () => {
  return (
    <motion.div
      initial={{width:0}}
      animate={{width:"100vw"}}
      exit={{x:window.innerWidth, transition: {duration:0.1}}}
    >
      <h1 className='title'>Programas Sociales</h1>
      <hr/>

      <Desktop>
        <div className="container">
          <div className="item">
            <div className="item-img img2"></div>
            <h2>Prevención de Conductas de Riesgo a través del desarrollo de habilidades socioemocionales</h2>
            <p>Desarrollo de habilidades socioemocionales para la vida, dirigido principalmente al nivel preescolar, primaria y secundaria; acorde a los aprendizajes claves del sistema de educación pública. Es implementado en las escuelas como materia una vez a la semana; llevando a cabo una capacitación tanto a maestros como a padres de familia para lograr la corresponsabilidad en la educación.</p>
            <ul>
              <li>Autoconocimiento</li>
              <li>Comunicación Asertiva</li>
              <li>Toma de decisiones</li>
              <li>Pensamiento creativo</li>
              <li>Manejo de emociones y sentimientos</li>
              <li>Empatía</li>
              <li>Relaciones interpersonales</li>
              <li>Solución de problemas y conflictos</li>
              <li>Pensamiento crítico</li>
              <li>Manejo de tensiones y estrés</li>
            </ul>
          </div>
          <div className="item">
            <div className="item-img img3"></div>
            <h2>Home Run por la Educación</h2>
            <p>Este programa se ha implementado en los últimos 15 años y su principal objetivo es el otorgar un beneficio a alumnos, docentes y padres de familia de escuelas de educación pública en el estado de Sonora, por medio de donaciones de material didáctico y bibliográfico para bibliotecas; al igual que conferencias y capacitaciones dadas a través de los cuadrangulares anotados por los jugadores de Beisbol los Naranjeros de Hermosillo.</p>
          </div>
          <div className="item">
            <div className="item-img img4"></div>
            <h2>Prevención del delito a través del deporte</h2>
            <p>Bajo la asistencia técnica y el apoyo de la Oficina de las Naciones Unidas contra la Droga y el Delito UNODC con sede en Viena, Austria y la Oficina de Enlace y Partenariado de UNODC (LPO) en México, quién nos ha autorizado y capacitado para llevar a cabo el proyecto.</p>
            <p>El objetivo es la promoción del deporte y otras actividades lúdicas de carácter práctico que promueven el espíritu de equipo, autoconocimiento, juego limpio y la inclusión como medios para desarrollar mecanismos de supervivencia, reducir la vulnerabilidad ante la delincuencia, el comportamiento violento y el consumo de drogas como forma para para prevenir el crimen y promover la capacidad de resiliencia en jóvenes en riesgo de manera efectiva.  </p>
          </div>
        </div>
      </Desktop>


      <Mobile>
        <div className="container-mobile">
          <div className="item-mobile">
            <div className="item-img-mobile img2"></div>
            <h2>Prevención de Conductas de Riesgo a través del desarrollo de habilidades socioemocionales</h2>
            <p>Desarrollo de habilidades socioemocionales para la vida, dirigido principalmente al nivel preescolar, primaria y secundaria; acorde a los aprendizajes claves del sistema de educación pública. Es implementado en las escuelas como materia una vez a la semana; llevando a cabo una capacitación tanto a maestros como a padres de familia para lograr la corresponsabilidad en la educación.</p>
            <ul>
              <li>Autoconocimiento</li>
              <li>Comunicación Asertiva</li>
              <li>Toma de decisiones</li>
              <li>Pensamiento creativo</li>
              <li>Manejo de emociones y sentimientos</li>
              <li>Empatía</li>
              <li>Relaciones interpersonales</li>
              <li>Solución de problemas y conflictos</li>
              <li>Pensamiento crítico</li>
              <li>Manejo de tensiones y estrés</li>
            </ul>
          </div>
          <div className="item-mobile">
            <div className="item-img-mobile img3"></div>
            <h2>Home Run por la Educación</h2>
            <p>Este programa se ha implementado en los últimos 15 años y su principal objetivo es el otorgar un beneficio a alumnos, docentes y padres de familia de escuelas de educación pública en el estado de Sonora, por medio de donaciones de material didáctico y bibliográfico para bibliotecas; al igual que conferencias y capacitaciones dadas a través de los cuadrangulares anotados por los jugadores de Beisbol los Naranjeros de Hermosillo.</p>
          </div>
          <div className="item-mobile">
            <div className="item-img-mobile img4"></div>
            <h2>Prevención del delito a través del deporte</h2>
            <p>Bajo la asistencia técnica y el apoyo de la Oficina de las Naciones Unidas contra la Droga y el Delito UNODC con sede en Viena, Austria y la Oficina de Enlace y Partenariado de UNODC (LPO) en México, quién nos ha autorizado y capacitado para llevar a cabo el proyecto.</p>
            <p>El objetivo es la promoción del deporte y otras actividades lúdicas de carácter práctico que promueven el espíritu de equipo, autoconocimiento, juego limpio y la inclusión como medios para desarrollar mecanismos de supervivencia, reducir la vulnerabilidad ante la delincuencia, el comportamiento violento y el consumo de drogas como forma para para prevenir el crimen y promover la capacidad de resiliencia en jóvenes en riesgo de manera efectiva.  </p>
          </div>
        </div>
      </Mobile>


      <h1 className='title'>Programas Sociales Implementados</h1>
      <hr/>
      <Desktop>
      <div className="container">
          <div className="item">
            <div className="item-img img5"></div>
            <h2>2018</h2>
            <p>Cocina-comedor para niños migrantes de la Etnia Triquí en el Poblado Miguel Alemán.</p>
          </div>
          <div className="item">
            <div className="item-img img6"></div>
            <h2>2018</h2>
            <p>Contigo dar más se múltiplica.</p>
          </div>
          <div className="item">
            <div className="item-img img7"></div>
            <h2>2019</h2>
            <p>Fortalecimiento a la educación de calidad  para niños Indígenas Migrantes.</p>
          </div>
          <div className="item">
            <div className="item-img img8"></div>
            <h2>2019</h2>
            <p>Taller de lecto escritura y nivelación académica de niños migrantes, hijos de jornaleros agrícolas del Poblado Miguel Alemán.</p>
          </div>
          <div className="item">
            <div className="item-img img9"></div>
            <h2>2020</h2>
            <p>Capacitación a personal docente de educación básica para implementación del programa Prevención de conductas de riesgo mediante habilidades socioemocional para la vida.</p>
          </div>
          <div className="item">
            <div className="item-img img10"></div>
            <h2>2021</h2>
            <p>Equipamiento deportivo dentro del programa Prevención del delito juvenil a través del deporte.</p>
          </div>
          <div className="item">
            <div className="item-img img11"></div>
            <h2>2021</h2>
            <p>Implementación del programa Juega Vive, Prevención del delito juvenil a través del deporte, de la UNODC.</p>
          </div>
        </div>
      </Desktop>



      <Mobile>
      <div className="container-mobile">
          <div className="item-mobile">
            <div className="item-img-mobile img5"></div>
            <h2>2018</h2>
            <p>Cocina-comedor para niños migrantes de la Etnia Triquí en el Poblado Miguel Alemán.</p>
          </div>
          <div className="item-mobile">
            <div className="item-img-mobile img6"></div>
            <h2>2018</h2>
            <p>Contigo dar más se múltiplica.</p>
          </div>
          <div className="item-mobile">
            <div className="item-img-mobile img7"></div>
            <h2>2019</h2>
            <p>Fortalecimiento a la educación de calidad  para niños Indígenas Migrantes.</p>
          </div>
          <div className="item-mobile">
            <div className="item-img-mobile img8"></div>
            <h2>2019</h2>
            <p>Taller de lecto escritura y nivelación académica de niños migrantes, hijos de jornaleros agrícolas del Poblado Miguel Alemán.</p>
          </div>
          <div className="item-mobile">
            <div className="item-img-mobile img9"></div>
            <h2>2020</h2>
            <p>Capacitación a personal docente de educación básica para implementación del programa Prevención de conductas de riesgo mediante habilidades socioemocional para la vida.</p>
          </div>
          <div className="item-mobile">
            <div className="item-img-mobile img10"></div>
            <h2>2021</h2>
            <p>Equipamiento deportivo dentro del programa Prevención del delito juvenil a través del deporte.</p>
          </div>
          <div className="item-mobile">
            <div className="item-img-mobile img11"></div>
            <h2>2021</h2>
            <p>Implementación del programa Juega Vive, Prevención del delito juvenil a través del deporte, de la UNODC.</p>
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
