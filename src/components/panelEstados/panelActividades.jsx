import { useEffect, useState } from "react";
import api from "../../api/axios";
import "./panelActividades.css";

export default function PanelActividades() {

  const [actividades, setActividades] = useState([]);
  const [formActividad, setFormActividad] = useState({
    sede: "",
    nombre: "",
    capacidad: "",
    dia: "",
    horarioInicio: "",
    horarioFin: "",
    intervalo: ""
  });

  useEffect(() => {
    getAllActividades();
  }, []);

  async function getAllActividades() {
    try {
      const res = await api.get("/actividades");
      setActividades(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormActividad(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function crearActividad(e) {
    e.preventDefault();

    try {
      await api.post("/actividades/crear", formActividad);
      await getAllActividades();

      setFormActividad({
        sede: "",
        nombre: "",
        capacidad: "",
        dia: "",
        horarioInicio: "",
        horarioFin: "",
        intervalo: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error al crear actividad");
    }
  }

  async function borrarActividad(id) {
    try {
      await api.delete(`/actividades/${id}`);
      setActividades(prev => prev.filter(act => act.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="containerActividades">

      {/* FORMULARIO */}
      <form className="crearActividades" onSubmit={crearActividad}>
        <h2>Crear Actividad</h2>

        <input name="sede" placeholder="Sede" value={formActividad.sede} onChange={handleChange} />
        <input name="nombre" placeholder="Nombre" value={formActividad.nombre} onChange={handleChange} />
        <input type="number" name="capacidad" placeholder="Capacidad" value={formActividad.capacidad} onChange={handleChange} />
        <input name="dia" placeholder="Día" value={formActividad.dia} onChange={handleChange} />
        <input name="horarioInicio" placeholder="Horario inicio" value={formActividad.horarioInicio} onChange={handleChange} />
        <input name="horarioFin" placeholder="Horario fin" value={formActividad.horarioFin} onChange={handleChange} />
        <input name="intervalo" placeholder="Intervalo" value={formActividad.intervalo} onChange={handleChange} />

        <button type="submit">Crear Actividad</button>
      </form>

      {/* LISTADO */}
      <div className="todasLasActividades">
        <h2>Actividades</h2>

        {actividades.length === 0 && <p>No hay actividades</p>}

        {actividades.map(act => (
          <div className="actividadRow" key={act.id}>
            <span>
              <strong>{act.nombre}</strong> — {act.dia} | {act.horarioInicio} - {act.horarioFin}
            </span>

            <button onClick={() => borrarActividad(act.id)}>Borrar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
