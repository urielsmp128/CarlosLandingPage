import fugasImage from '../../assets/images/services/reparacion-de-fugas.webp';
import destapeImage from '../../assets/images/services/destape-canerias.webp';
import sanitariosImage from '../../assets/images/services/instalacion-de-sanitarios.webp';
import bombasImage from '../../assets/images/services/intalacion-de-hidro-tinaco.webp';
import electricasImage from '../../assets/images/services/instalaciones-electricas.jpeg';
import centrosImage from '../../assets/images/services/centros-de-carga.jpeg';
import iluminacionImage from '../../assets/images/services/instalar-ventilador-techo.webp';
import cortosImage from '../../assets/images/services/arreglo-de-cables-expuestos.webp';
import automatizacionImage from '../../assets/images/services/automatizacion-basica.jpeg';
import './Services.css';

// `image` is the path/import of each card's photo; leave it empty to show the placeholder.
const SERVICES = [
  {
    title: 'Reparación de fugas',
    alt: 'Plomero reparando una fuga en una tubería de agua',
    text: 'Detección y arreglo de filtraciones en tuberías de agua potable o drenaje.',
    image: fugasImage,
  },
  {
    title: 'Destape de cañerías',
    alt: 'Destape y limpieza de cañerías obstruidas con sonda eléctrica',
    text: 'Limpieza y desazolve de lavabos, fregaderos, inodoros y tuberías obstruidas con sonda eléctrica.',
    image: destapeImage,
  },
  {
    title: 'Instalación de sanitarios',
    alt: 'Instalación de sanitarios, lavabos y llaves en un baño',
    text: 'Montaje y cambio de tazas de baño, lavabos, regaderas, llaves mezcladoras y tarjas.',
    image: sanitariosImage,
  },
  {
    title: 'Bombas de agua',
    alt: 'Instalación de bomba de agua e hidroneumático',
    text: 'Colocación, revisión y compostura de bombas centrífugas, sumergibles o presurizadoras.',
    image: bombasImage,
  },
  {
    title: 'Instalaciones eléctricas',
    alt: 'Electricista instalando cableado, contactos y apagadores',
    text: 'Cableado nuevo, muretes, colocación de contactos, apagadores y enchufes.',
    image: electricasImage,
  },
  {
    title: 'Centros de carga',
    alt: 'Centro de carga con pastillas termomagnéticas',
    text: 'Instalación y reemplazo de pastillas termomagnéticas (interruptores automáticos) y centros de distribución.',
    image: centrosImage,
  },
  {
    title: 'Iluminación',
    alt: 'Instalación de un ventilador de techo y lámparas',
    text: 'Montaje de lámparas, arbotantes, ventiladores de techo y sistemas de iluminación LED.',
    image: iluminacionImage,
  },
  {
    title: 'Cortos circuitos',
    alt: 'Reparación de cables expuestos y fallas por corto circuito',
    text: 'Localización y reparación de fallas, chispazos o apagones parciales en el hogar.',
    image: cortosImage,
  },
  {
    title: 'Automatización básica',
    alt: 'Conexión de timbres y sensores eléctricos',
    text: 'Conexión de timbres, bombas de agua automáticas con flotador eléctrico y sensores de movimiento.',
    image: automatizacionImage,
  },
];

function Services() {
  return (
    <section id="contacto" className="services">
      <div className="container">
        <div className="services__header">
          <h2>Servicios profesionales con garantía de hasta 3 meses</h2>
          <p>
            Ofrecemos fontanería y electricidad con materiales de alta calidad y atención
            personalizada para tu total satisfacción.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ title, text, image, alt }) => (
            <article className="services__card" key={title}>
              <div className="services__media">
                {image ? (
                  <img
                    src={image}
                    alt={alt || title}
                    width="800"
                    height="500"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="services__placeholder" role="img" aria-label={`Imagen de ${title}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <circle cx="9" cy="10" r="1.8" />
                      <path d="m21 16-5-5-8 8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="services__body">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
