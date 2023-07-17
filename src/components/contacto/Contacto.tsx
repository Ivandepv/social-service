import "./Contacto.css"
import img from "../../assets/voluntariado.webp";


export const Contacto = () => {
  const phoneNumber = '6623547720';
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  return (
    <div>
      <h1 className='title'>Comunicate con nosotros</h1>  
      <hr/>
      <div className='container-contact'>
        <h3>¡Queremos saber de ti!</h3>
        <p>Si deseas comunicarte con nosotros o inscribir a tu escuela pare recibir algunos de nuestros beneficios. Te invitamos a ponerte en contacto con nosotros.</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="whatsapp-button">
            <i className="fab fa-whatsapp"></i> Enviar mensaje de WhatsApp
          </button>
        </a>

        <h3>POR LA EDUCACIÓN I.A.P.</h3>
        <br />
        <h5>Calle Agustín de Iturbide 39, Hermosillo, Sonora, Mexico</h5>
        <p>01 662 362 5555</p>
        <h5>Horario</h5>
        <b>Lunes a viernes: 9:00 am - 5:00 pm</b>
      </div>

      <h1 className='title'>Voluntariado</h1>
      <hr />

      <div className='container-contact'>
        <p>Juntos podemos promover la Responsabilidad Social corporativa y personal. </p>
        <p>¡Únete a nosotros y participa en las actividades para apoyar a la educación de calidad de niños y niñas sonorenses!</p>
        <p>Pregúntanos cómo sumarte a las Jornadas de Voluntariado que se presentan a continuación. </p>
        <div className='container-contact_img'>
          <img src={img} alt="" />
        </div>
        <h3>¡Únete a nosotros !</h3>
        <p>Si te interesa participar en alguna de las actividades ingresa tus datos y la actividad en la que te gustaría participar/realizar. </p>
        <a href="mailto:porlaeducacion55@gmail.com?subject=Voluntariado&body=CUERPO_DEL_CORREO" target="_blank" rel="noopener noreferrer">
          
          <button className='btn-email'><i className="fas fa-envelope"></i>Enviar correo electrónico</button>
        </a>

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


    </div>
  )
}
