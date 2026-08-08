import { WrenchIcon, BoltIcon, ToolsIcon } from '../../assets/icons/Icons';
import './Services.css';

const SERVICES = [
  {
    icon: WrenchIcon,
    title: 'Fontanería de confianza',
    text: 'Resolvemos problemas hidráulicos con rapidez y eficacia, garantizando durabilidad y seguridad.',
  },
  {
    icon: BoltIcon,
    title: 'Instalaciones eléctricas seguras',
    text: 'Proveemos instalaciones eléctricas con materiales certificados para máxima confiabilidad.',
  },
  {
    icon: ToolsIcon,
    title: 'Mantenimiento integral',
    text: 'Realizamos mantenimiento preventivo y correctivo adaptado a tus necesidades específicas.',
  },
];

function Services() {
  return (
    <section id="cobertura" className="services">
      <div className="container">
        <div className="services__header">
          <h2>Servicios profesionales con garantía de hasta 3 meses</h2>
          <p>
            Ofrecemos fontanería y electricidad con materiales de alta calidad y atención
            personalizada para tu total satisfacción.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <div className="services__card" key={title}>
              <div className="services__icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
