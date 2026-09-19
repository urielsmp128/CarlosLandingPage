import { useCallback, useEffect, useRef, useState } from 'react';
import { StarIcon } from '../../assets/icons/Icons';
import './Reviews.css';

// Keep in sync with the `review` entries in the LocalBusiness JSON-LD in public/index.html.
const REVIEWS = [
  {
    name: 'Uriel Madrigal',
    rating: 5,
    text: 'Excelente 👌 servicio super recomendado, el joven Carlos super atento, educado, un trabajo limpio y rápido, recomendable al 100%. Ojalá todos brindaran una atención tan buena.',
  },
  {
    name: 'Elsa Garzón',
    rating: 5,
    text: 'Atención super rápida, buena atención y excelente servicio. La persona que nos atendió fue muy educado y nos explicó todo muy bien, sinceramente me sorprendió que nos atendiera tan rápido porque tuvimos una emergencia y él inmediatamente acudió. Muy buen trabajo, sinceramente lo recomiendo 👌👌👌👌👌',
  },
  {
    name: 'Jose Luis',
    rating: 5,
    text: 'Excelente servicio, buena calidad y muy amables, se toman el tiempo para explicar y mejorar el servicio.',
  },
  {
    name: 'Juan Pablo Lizarraga',
    rating: 5,
    text: 'Siempre hemos tenido una respuesta eficiente cuando tenemos un problema de mantenimiento. Nos han sacado del apuro más de una vez, ya sean urgentes o no. Lo recomendamos ampliamente.',
  },
];

const AUTOPLAY_MS = 5000;

function Reviews() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const scrollByCard = useCallback((direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 24 : track.clientWidth;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    const atStart = track.scrollLeft <= 4;
    if (direction > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction < 0 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: direction * step, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || reduceMotion) return undefined;
    const id = setInterval(() => scrollByCard(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, scrollByCard]);

  return (
    <section
      className="reviews"
      aria-roledescription="carrusel"
      aria-label="Reseñas de clientes"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container">
        <div className="reviews__header">
          <h2>Lo que dicen nuestros clientes</h2>
          <p>La confianza de quienes ya han trabajado con nosotros respalda cada servicio.</p>
        </div>

        <div className="reviews__carousel">
          <button
            type="button"
            className="reviews__nav reviews__nav--prev"
            aria-label="Reseña anterior"
            onClick={() => scrollByCard(-1)}
          >
            ‹
          </button>

          <div className="reviews__track" ref={trackRef}>
            {REVIEWS.map((review, i) => (
              <figure className="reviews__card" key={i}>
                <div className="reviews__stars" role="img" aria-label={`${review.rating} de 5 estrellas`}>
                  {Array.from({ length: review.rating }, (_, s) => (
                    <StarIcon key={s} className="reviews__star" />
                  ))}
                </div>
                <blockquote>{review.text}</blockquote>
                <figcaption>
                  <strong>{review.name}</strong>
                  {review.place && <span>{review.place}</span>}
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            className="reviews__nav reviews__nav--next"
            aria-label="Reseña siguiente"
            onClick={() => scrollByCard(1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
