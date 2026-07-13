import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const siteConfig = {
  whatsappNumber: "919620417344",
  whatsappMessage:
    "Hello SWOTEDGE, I would like to discuss a new event, activation, or brand experience project.",
};

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

function Loader({ isHidden }) {
  return (
    <div className={`loader ${isHidden ? "is-hidden" : ""}`} aria-hidden={isHidden}>
      <div className="loader__content">
        <div className="loader__logo-wrap">
          <img className="loader__logo" src={assetUrl("assets/logo.png")} alt="SWOTEDGE logo" />
        </div>
        <p className="loader__tag">Beyond Screens & Spaces</p>
        <div className="loader__bar">
          <span className="loader__bar-fill" />
        </div>
      </div>
    </div>
  );
}

function Shell({ children, whatsappUrl }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <div className="ambient ambient--top" />
      <div className="ambient ambient--bottom" />
      <div className="grid-wash" />

      <header className="topbar">
        <Link className="brand" to="/">
          <img src={assetUrl("assets/logo.png")} alt="SWOTEDGE logo" />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>

        <nav className={`nav ${menuOpen ? "is-open" : ""}`} id="site-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            d="M27.2 4.7A15.2 15.2 0 0 0 3.9 24.4L2 30l5.8-1.8A15.2 15.2 0 1 0 27.2 4.7Zm-11 24a12.5 12.5 0 0 1-6.3-1.7l-.5-.3-3.4 1 1.1-3.3-.3-.5a12.4 12.4 0 1 1 9.4 4.8Zm6.8-9.3c-.4-.2-2.5-1.2-2.8-1.4-.4-.1-.7-.2-.9.2-.3.4-1 1.4-1.3 1.7-.2.2-.4.3-.8.1s-1.7-.6-3.2-2c-1.2-1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.3 0 2 1.4 3.8 1.6 4 .2.3 2.8 4.3 6.9 6 .9.4 1.6.6 2.1.8.9.3 1.8.3 2.4.2.8-.1 2.5-1 2.8-2 .4-.9.4-1.8.3-2-.1-.2-.4-.3-.8-.5Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}

export default function App() {
  const [loaderHidden, setLoaderHidden] = useState(false);

  const whatsappUrl = useMemo(() => {
    const base = `https://wa.me/${siteConfig.whatsappNumber}`;
    return `${base}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaderHidden(true), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister().catch(() => {});
        });
      });

      if ("caches" in window) {
        caches.keys().then((keys) => {
          keys.forEach((key) => {
            caches.delete(key).catch(() => {});
          });
        });
      }
    }
  }, []);

  return (
    <>
      <Loader isHidden={loaderHidden} />
      <Shell whatsappUrl={whatsappUrl}>
        <Routes>
          <Route path="/" element={<HomePage whatsappUrl={whatsappUrl} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage whatsappUrl={whatsappUrl} />} />
        </Routes>
      </Shell>
    </>
  );
}
