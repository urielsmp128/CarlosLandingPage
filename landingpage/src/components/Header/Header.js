import { useEffect, useState } from 'react';
import { PhoneIcon, WhatsAppIcon } from '../../assets/icons/Icons';
import logo from '../../assets/images/logo.jpg';
import './Header.css';

const NAV_LINKS = [
  { label: 'Inicio', href: '#servicios' },
  { label: 'Servicios', href: '#contacto' },
  { label: 'Contacto', href: '#cobertura' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  // Scroll-spy: the active link is the last section whose top has passed the header.
  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.href.slice(1));
    const update = () => {
      const line = window.scrollY + 120;
      let current = ids[0]; // "Inicio" stays active from the top of the page
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      });
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
      if (atBottom) current = ids[ids.length - 1];
      setActiveId(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#inicio" className="header__brand">
          <img src={logo} alt="Carlos Maldonado, fontanero y electricista en Zapopan" width="360" height="248" className="header__logo" />
          <span className="header__name">Carlos Maldonado Íñiguez</span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`header__link ${activeId === link.href.slice(1) ? 'header__link--active' : ''}`}
              aria-current={activeId === link.href.slice(1) ? 'true' : undefined}
              onClick={() => setMenuOpen(false)}
            >
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
