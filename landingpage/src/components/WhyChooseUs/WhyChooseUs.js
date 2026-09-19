import { ShieldIcon, ChatIcon, UserIcon } from '../../assets/icons/Icons';
import './WhyChooseUs.css';

const ITEMS = [
  {
    icon: ShieldIcon,
    title: 'Garantía de calidad',
    text: 'Respaldo cada trabajo con garantía de hasta 3 meses, fruto de más de 15 años de experiencia.',
  },
  {
    icon: ChatIcon,
    title: 'Trato directo',
    text: 'Trato directo conmigo por WhatsApp, Facebook, correo o teléfono para resolver tus dudas.',
  },
  {
    icon: UserIcon,
    title: 'Experiencia y atención personal',
    text: 'Te asesoro personalmente con el criterio de más de 15 años en el oficio, adaptado a lo que necesitas.',
  },
];

function WhyChooseUs() {
  return (
    <section className="why">
      <div className="container">
        <div className="why__header">
          <h2>Más de 15 años haciendo fontanería y electricidad en tu hogar</h2>
          <p>
            Trabajo con productos de alta calidad y garantía de hasta 3 meses para tu total
            tranquilidad y satisfacción.
          </p>
        </div>

        <div className="why__grid">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div className="why__card" key={title}>
              <div className="why__icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <p className="why__quote">
          “Me comprometo a ofrecerte un servicio de fontanería y electricidad con calidad
          y la atención de alguien con más de 15 años de experiencia en cada trabajo.”
        </p>
      </div>
    </section>
  );
}

export default WhyChooseUs;
