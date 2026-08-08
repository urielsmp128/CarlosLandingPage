import { ShieldIcon, ChatIcon, UserIcon } from '../../assets/icons/Icons';
import './WhyChooseUs.css';

const ITEMS = [
  {
    icon: ShieldIcon,
    title: 'Garantía de calidad',
    text: 'Ofrecemos garantía de hasta 3 meses en todos nuestros trabajos realizados.',
  },
  {
    icon: ChatIcon,
    title: 'Comunicación directa',
    text: 'Facilitamos el contacto mediante WhatsApp, Facebook, correo y teléfono para resolver tus dudas.',
  },
  {
    icon: UserIcon,
    title: 'Atención personalizada',
    text: 'Nuestro equipo brinda asesoría profesional adaptada a tus necesidades específicas.',
  },
];

function WhyChooseUs() {
  return (
    <section className="why">
      <div className="container">
        <div className="why__header">
          <h2>Servicios profesionales de fontanería y electricidad en tu hogar</h2>
          <p>
            Contamos con productos de alta calidad y garantía de hasta 3 meses para tu total
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
          “Confiamos en ofrecer un servicio de fontanería y electricidad con calidad
          insuperable y atención profesional en cada proyecto.”
        </p>
      </div>
    </section>
  );
}

export default WhyChooseUs;
