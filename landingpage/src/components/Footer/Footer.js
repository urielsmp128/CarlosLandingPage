import { MailIcon, FacebookIcon } from '../../assets/icons/Icons';
import logo from '../../assets/images/logo.jpg';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">
          <img src={logo} alt="Carlos Maldonado, fontanero y electricista en Zapopan" width="360" height="248" className="footer__logo" loading="lazy" />
          Carlos Maldonado Íñiguez
        </span>

        <div className="footer__social">
          <a href="mailto:carlosmaldon2010@live.com" aria-label="Correo electrónico">
            <MailIcon className="icon" />
          </a>
          <a
            href="https://www.facebook.com/CarlosMaldonadoIniguez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon className="icon" />
          </a>
        </div>

        <span className="footer__copy">
          © {year} Carlos Maldonado Íñiguez. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
