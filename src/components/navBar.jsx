import "./navBar.css";
import { useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);


  return (
    <nav className="nav">
      <div className="gymLogo" />

      <div className="menuContainer">
        <ol className="menuOptions">
          <li onClick={() => navigate("/#inicio")}>Inicio</li>
          <li onClick={() => navigate("/#actividades")}>Actividades</li>
          <li onClick={() => navigate("/#instalaciones")}>Instalaciones</li>
          <li onClick={() => navigate("/adminDashboard")}>Administrar</li>
        </ol>

        <div className="userIcon" onClick={()=> navigate("/profile")} />
      </div>

      <div className="social" />
    </nav>
  );
}
