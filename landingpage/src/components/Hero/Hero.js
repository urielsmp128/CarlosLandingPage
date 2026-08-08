import { PhoneIcon } from '../../assets/icons/Icons';
import './Hero.css';

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__inner container">
        <div className="hero__content">
          <h1>
            Servicios especializados de fontanería y electricidad con garantía de 3 meses.
          </h1>
          <p>
            Brindamos soluciones confiables en fontanería y electricidad, usando materiales
            de alta calidad y atención cercana para cumplir tus necesidades con eficacia.
          </p>
          <div className="hero__actions">
            <a href="#servicios" className="btn btn--primary">
              Conoce más
            </a>
            <a href="tel:+523324504074" className="hero__phone">
              <PhoneIcon className="icon" />
              3324 504 074
            </a>
          </div>
        </div>

        <div className="hero__media" aria-hidden="true">
          <div className="hero__media-frame">
            <span>Carlos Maldonado Íñiguez</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
