import { PhoneIcon, WhatsAppIcon } from '../../assets/icons/Icons';
import './FloatingActions.css';

function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Contacto rápido">
      <a
        href="tel:+523324504074"
        className="floating-actions__btn floating-actions__btn--call"
        aria-label="Llámanos ahora"
      >
        <PhoneIcon className="floating-actions__icon" />
        <span className="floating-actions__label">Llámanos</span>
      </a>
      <a
        href="https://wa.me/523324504074"
        target="_blank"
        rel="noreferrer"
        className="floating-actions__btn floating-actions__btn--whatsapp"
        aria-label="Escríbenos por WhatsApp"
      >
        <WhatsAppIcon className="floating-actions__icon" />
        <span className="floating-actions__label">WhatsApp</span>
      </a>
    </div>
  );
}

export default FloatingActions;
