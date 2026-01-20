import api from "../../api/axios.js";
import { useState} from "react";
import "./panelUsuario.css";

export default function PanelUsuario() {

  const [formUsuario, setFormUsuario] = useState({
    nombre: "",
    apellido: "",
    gmail: "",
    contrasenia: "",
    telefono: "",
    dni: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormUsuario(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function crearUsuario(e) {
    e.preventDefault();

    try {
      console.log(formUsuario)
      await api.post("user/crear", formUsuario);
      alert("Usuario creado correctamente");

      setFormUsuario({
        nombre: "",
        apellido: "",
        gmail: "",
        contrasenia: "",
        telefono: "",
        dni: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error al crear usuario");
    }
  }

  return (
    <div className="usuarioContainer">
      <form className="formCreacion" onSubmit={crearUsuario}>

        <h2>Crear Usuario</h2>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formUsuario.nombre}
          onChange={handleChange}
        />

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formUsuario.apellido}
          onChange={handleChange}
        />

        <input
          type="email"
          name="gmail"
          placeholder="Email"
          value={formUsuario.gmail}
          onChange={handleChange}
        />

       <input
  type="password"
  name="contrasenia"   
  placeholder="Contraseña"
  value={formUsuario.contrasenia}
  onChange={handleChange}
/>

        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formUsuario.telefono}
          onChange={handleChange}
        />

        <input
          type="text"
          name="dni"
          placeholder="DNI"
          value={formUsuario.dni}
          onChange={handleChange}
        />

        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
}
