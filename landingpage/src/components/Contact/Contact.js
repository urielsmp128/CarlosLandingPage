import { MailIcon, FacebookIcon, WhatsAppIcon, PhoneIcon } from '../../assets/icons/Icons';
import './Contact.css';

const ADDRESS = 'Privada Juan Aguirre 527, Zapopan, Jalisco, México, 45180';
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

function Contact() {
  return (
    <section id="cobertura" className="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <h2>¿Listo para resolver tu proyecto?</h2>
          <p>
            Escríbenos por el canal que prefieras y coordinamos tu servicio de fontanería o
            electricidad con garantía de hasta 3 meses.
          </p>
          <p className="contact__address">
            <strong>Dirección:</strong>{' '}
            <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer">
              {ADDRESS}
            </a>
          </p>

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

        <div className="contact__map">
          <iframe
            title="Ubicación en Google Maps"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
