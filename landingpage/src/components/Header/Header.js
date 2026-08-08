import { useState } from 'react';
import { PhoneIcon, WhatsAppIcon } from '../../assets/icons/Icons';
import './Header.css';

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reservación', href: '#contacto' },
  { label: 'Zona de Cobertura', href: '#cobertura' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#inicio" className="header__brand">
          Carlos Maldonado Íñiguez
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/523324504074"
            target="_blank"
            rel="noopener noreferrer"
            className="header__whatsapp"
          >
            <WhatsAppIcon className="icon" />
            Whatsapp
          </a>
        </nav>

        <a href="tel:+523324504074" className="header__phone">
          <PhoneIcon className="icon" />
          <span>3324-504-074</span>
        </a>

        <button
          className="header__toggle"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
