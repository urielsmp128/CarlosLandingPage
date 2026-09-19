import './Intro.css';

function Intro() {
  return (
    <section id="servicios" className="intro">
      <div className="container intro__inner">
        <h2>Soy Carlos, fontanero y electricista con más de 15 años de experiencia</h2>
        <span className="intro__divider" aria-hidden="true" />

        <div className="intro__text">
          <p>
            Soy <strong>Carlos Maldonado Íñiguez</strong> y me dedico desde hace{' '}
            <strong>más de 15 años</strong> a realizar{' '}
            <strong>servicios de fontanería y electricidad en Guadalajara</strong>. Trabajo
            con materiales de alta calidad y ofrezco{' '}
            <strong>garantía de hasta 3 meses</strong> en todos mis trabajos.
          </p>
          <p>
            Con la experiencia de estos años realizo{' '}
            <strong>instalaciones y reparaciones de tuberías</strong>,{' '}
            <strong>detección y reparación de fugas</strong>,{' '}
            <strong>instalaciones eléctricas</strong>,{' '}
            <strong>cambio de contactos y apagadores</strong> y{' '}
            <strong>revisión de cortos circuitos</strong>. Acudo a donde me necesites, ya sea
            tu casa, negocio o empresa.
          </p>
          <p>
            Trato directamente contigo: puedes escribirme por{' '}
            <strong>WhatsApp, Facebook, correo electrónico o llamarme por teléfono</strong>{' '}
            para resolver tus dudas y coordinar el servicio rápidamente.
          </p>
          <p>
            Contáctame, hago <strong>cotizaciones sin compromiso</strong> para cualquiera de
            mis servicios de fontanería o electricidad.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
