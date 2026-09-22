import './About.css';
import carlosPhoto from '../../assets/images/carlos-maldonado.png';

function About() {
  return (
    <section className="about">
      <div className="container about__inner">
        <div className="about__media">
          <img
            className="about__frame"
            src={carlosPhoto}
            alt="Carlos Maldonado Íñiguez"
          />
        </div>

        <div className="about__content">
          <span className="about__eyebrow">Sobre mí</span>
          <h2>Carlos Maldonado Íñiguez</h2>
          <p className="about__role">
            Especialista en instalaciones eléctricas y fontanería
          </p>
          <p>
            Servicios profesionales con garantía de hasta 3 meses. Ofrecemos fontanería y
            electricidad con materiales de alta calidad y atención personalizada para tu
            total satisfacción.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
