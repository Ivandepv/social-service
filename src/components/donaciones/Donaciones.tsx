
import "./Donaciones.css"
import { motion } from 'framer-motion'

export const Donaciones = () => {
  return (
    <motion.div
      initial={{width:0}}
      animate={{width:"100vw"}}
      exit={{x:window.innerWidth, transition: {duration:0.1}}}
    >
      <h1 className='title'>Ayuda a nuestra causa</h1>
      <hr/>

      <div className='container'>
        <p>Tu donativo contribuye a mejorar la calidad de la educación que reciben niñas y niños de escuelas públicas,  fomentar el bienestar emocional, psicológico y conductual para la prevención de conductas de riesgos, así como el desarrollo de habilidades y competencias.</p>
        <div className='item-img donaciones-img'></div>
      </div>
      
      <h1 className='title'>¿Cómo donar?</h1>
      <hr />


      <div className='container-contact'>
        <h3>Donativo económico</h3>
        <p>Donativo económico, transferencia bancaria o cheque a nombre de Por la Educación IAP. Apoyo único o recurrente de forma mensual, bimestral o anual.</p>
        <h4>Banco Bancomer (Nacional)</h4>
        <h4>Pesos Mexicanos</h4>
        <b>Cuenta: 0111110535</b>
        <br />
        <b>CLABE: 012760001111105354</b>
        <br />
        <p>Para solicitar su recibo deducible favor de pasar a nuestra forma de contacto</p>
      </div>

      <div className='container-contact'>
        <h3>Donativo en especie</h3> 
        <p>Libros infantiles, material didáctico, útiles escolares, pintura, mobiliario escolar, material deportivo, artículos de limpieza y cualquier material que se utilice en las escuelas y en el proceso educativo. Así también se aceptan computadoras, proyectores, entre otros. Somos donataria autorizada por el SAT, envíanos un correo para hacerte llegar tu recibo deducible de impuestos.</p>
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
