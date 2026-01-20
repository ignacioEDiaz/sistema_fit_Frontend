import React, { useState,useEffect } from "react";
import "./adminPage.css";

import PanelUsuario from "../../components/panelEstados/panelUsuario.jsx";
import PanelProfesor from "../../components/panelEstados/panelProfesor.jsx";
import PanelActividades from "../../components/panelEstados/panelActividades.jsx";

const AdminDashboard = () => {

  const [panelActivo, setPanelActivo] = useState("USUARIO");
  const [isMobile, setIsMobile] = useState(false)
   useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const handlePanelChange = (panel) => {
    setPanelActivo(panel)
    
   
  }
  function renderPanel() {
    switch (panelActivo) {
      case "USUARIO":
        return <PanelUsuario />;

      case "PROFESOR":
        return <PanelProfesor />;

      case "ACTIVIDADES":
        return <PanelActividades />;

      default:
        return null;
    }
  }

  return (
    <div className="dashboardContainer">
      
      {/* MENU */}
       <aside className="menu">
     <button
  className={panelActivo === "USUARIO" ? "active" : ""}
  onClick={() => handlePanelChange("USUARIO")}
>
  {!isMobile ? (
    <span>Usuario</span>
  ) : (
    <>
      <span className="menu-icon">👤</span>
      <span>Usuario</span>
    </>
  )}
</button>

<button
  className={panelActivo === "PROFESOR" ? "active" : ""}
  onClick={() => handlePanelChange("PROFESOR")}
>
  {!isMobile ? (
    <span>Profesor</span>
  ) : (
    <>
      <span className="menu-icon">🎓</span>
      <span>Profesor</span>
    </>
  )}
</button>

<button
  className={panelActivo === "ACTIVIDADES" ? "active" : ""}
  onClick={() => handlePanelChange("ACTIVIDADES")}
>
  {!isMobile ? (
    <span>Actividades</span>
  ) : (
    <>
      <span className="menu-icon">⚡</span>
      <span>Actividades</span>
    </>
  )}
</button>

      
      {/* Efecto visual adicional para el panel activo */}
      <div className="active-indicator" data-active={panelActivo}></div>
    </aside>

      {/* PANEL */}
      <section className="adminPanel">
        {renderPanel()}
      </section>

    </div>
  );
};

export default AdminDashboard;
