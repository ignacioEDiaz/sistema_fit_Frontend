import api from "../../api/axios.js";
import { useState } from "react";
import "./panelProfesor.css"; // podés renombrarlo luego si querés

export default function PanelProfesor() {

  const [formProfesor, setFormProfesor] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    password: "",
    role: "xxi"
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormProfesor(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function crearProfesor(e) {
    e.preventDefault();

    try {
      await api.post("/profesor/crear", formProfesor);
      alert("Profesor creado correctamente");

      setFormProfesor({
        nombre: "",
        apellido: "",
        dni: "",
        password: "",
        role: "xxi"
      });

    } catch (error) {
      console.error(error);
      alert("Error al crear profesor");
    }
  }

  return (
    <div className="usuarioContainer">
      <form className="formCreacion" onSubmit={crearProfesor}>

        <h2>Crear Profesor</h2>

        {/* nombre */}
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formProfesor.nombre}
          onChange={handleChange}
          required
        />

        {/* apellido */}
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formProfesor.apellido}
          onChange={handleChange}
          required
        />

        {/* dni */}
        <input
          type="text"
          name="dni"
          placeholder="DNI"
          value={formProfesor.dni}
          onChange={handleChange}
          required
        />

        {/* password */}
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formProfesor.password}
          onChange={handleChange}
          required
        />

        {/* role fijo */}
        <input
          type="text"
          name="role"
          value="xxi"
          readOnly
        />

        <button type="submit">Crear Profesor</button>
      </form>
    </div>
  );
}
