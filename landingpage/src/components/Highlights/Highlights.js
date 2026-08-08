import { ShieldIcon, ChatIcon, ToolsIcon } from '../../assets/icons/Icons';
import './Highlights.css';

const ITEMS = [
  {
    icon: ShieldIcon,
    title: 'Garantía de hasta 3 meses en todos nuestros trabajos.',
    text: 'Brindamos confianza y seguridad asegurando que cada servicio cumpla con los más altos estándares, mejorando la tranquilidad de nuestros clientes.',
  },
  {
    icon: ChatIcon,
    title: 'Comunicación fácil y directa por múltiples canales.',
    text: 'Facilitamos el contacto a través de WhatsApp, Facebook, correo electrónico y teléfono para resolver tus dudas y coordinar servicios rápidamente.',
  },
  {
    icon: ToolsIcon,
    title: 'Uso de materiales y equipos de primera calidad.',
    text: 'Garantizamos durabilidad y eficiencia en cada instalación o reparación, optimizando el rendimiento y la seguridad de tus instalaciones.',
  },
];

function Highlights() {
  return (
    <section id="servicios" className="highlights">
      <div className="container">
        <div className="highlights__header">
          <h2>Servicios Profesionales de Fontanería y Electricidad</h2>
          <p>
            Descubra cómo nuestros expertos garantizan calidad y atención personalizada en
            cada proyecto, facilitando su comunicación a través de múltiples canales.
          </p>
        </div>

        <div className="highlights__body">
          <h3>Servicios Profesionales con Garantía y Calidad</h3>
          <p>
            Ofrecemos soluciones integrales en fontanería y electricidad, respaldadas por
            productos de alta calidad y atención personalizada.
          </p>

          <div className="highlights__grid">
            {ITEMS.map(({ icon: Icon, title, text }) => (
              <div className="highlights__card" key={title}>
                <div className="highlights__icon">
                  <Icon />
                </div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <a href="#contacto" className="btn btn--primary">
            Conoce más
          </a>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
