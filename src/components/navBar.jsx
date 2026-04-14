import "./navBar.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const { hash } = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const goTo = (ruta) => {
    navigate(ruta);
    setMenuOpen(false);
  };

  return (
    <nav className="nav">

      <div className="gymLogo" />

      {/* HAMBURGUESA */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MENÚ */}
      <div className={`menuContainer ${menuOpen ? "open" : ""}`}>
        <ol className="menuOptions">
          <li onClick={() => goTo("/#inicio")}>Inicio</li>
          <li onClick={() => goTo("/#actividades")}>Actividades</li>
          <li onClick={() => goTo("/#instalaciones")}>Instalaciones</li>
          <li onClick={() => goTo("/adminDashboard")}>Administrar</li>
        </ol>

        <div className="userIcon" onClick={() => goTo("/profile")} />
      </div>

      <div className="social" />

    </nav>
  );
}