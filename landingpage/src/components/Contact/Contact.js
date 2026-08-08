import { MailIcon, FacebookIcon, WhatsAppIcon, PhoneIcon } from '../../assets/icons/Icons';
import './Contact.css';

function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container contact__inner">
        <div>
          <h2>¿Listo para resolver tu proyecto?</h2>
          <p>
            Escríbenos por el canal que prefieras y coordinamos tu servicio de fontanería o
            electricidad con garantía de hasta 3 meses.
          </p>
        </div>

        <div className="contact__links">
          <a href="tel:+523324504074" className="contact__link">
            <PhoneIcon className="icon" />
            3324-504-074
          </a>
          <a
            href="https://wa.me/523324504074"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <WhatsAppIcon className="icon" />
            WhatsApp
          </a>
          <a href="mailto:carlosmaldon2010@live.com" className="contact__link">
            <MailIcon className="icon" />
            Correo electrónico
          </a>
          <a
            href="https://www.facebook.com/CarlosMaldonadoIniguez"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <FacebookIcon className="icon" />
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
