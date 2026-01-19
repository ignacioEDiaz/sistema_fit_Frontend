import { useParams } from "react-router-dom"
import "./activityes.css"
import api from "../../api/axios"
import { useState,useEffect, } from "react"


export default function Actividades(){
    const [misActividades,setMisActividades]=useState([])
    const [nombreActividad,setNombreActividad]= useState("nada")
    const[dia,setDia]=useState("lunes")
    const [actividadesConHorarios,setActividades] = useState([])

    async function getActividadesConHorarios(){
const actividades = await api.get("/actividad/getActividades", {
 params: {
    nombre: "Crossfit Intermedio",
    dia: "lunes"
  }
});

        setActividades(actividades.data.actividades)
        console.log(actividades.data)
    }
    async function getMisActividades(){
      const misActs= await api.get("/actividad/getMisActividades")
      setMisActividades(misActs.data.actividades)
    }



    useEffect(()=>{
        getActividadesConHorarios()
        getMisActividades()
    },[])

function getColorClase(inscriptos , capacidad ) {

  if (!capacidad) {
    return "lleno"
  } else if (inscriptos >= capacidad) {
    return "lleno"
  } else if (inscriptos >= capacidad * 0.5) {
    return "medio"
  } else {
    return "disponible"
  }
}
async function inscribirAct(horarioInicio) {
  try{
    api.post("/actividad/inscribirUsuarioEn",{
      nombreActividad:nombreActividad,
      dia:dia,
      horarioInicioActividad:horarioInicio,
        })
  }catch(err){
    alert(err)
  }
}


   const { nombre }=useParams()
useEffect(() => {
  if (nombre) {
    setNombreActividad(nombre)
  }
}, [nombre])

    return(
        <div className="actContainer">
        <div className="actSection">
             <h1> {nombre}</h1>
             <div className="dias">
  <div
    className={`dia ${dia  === "lunes" ? "activo" : ""}`}
    onClick={() => setDia("lunes")}
  >
    Lunes
  </div>

  <div
    className={`dia ${dia  === "martes" ? "activo" : ""}`}
    onClick={() => setDia("martes")}
  >
    Martes
  </div>

  <div
    className={`dia ${dia  === "miercoles" ? "activo" : ""}`}
    onClick={() => setDia("miercoles")}
  >
    Miércoles
  </div>

  <div
    className={`dia ${dia  === "jueves" ? "activo" : ""}`}
    onClick={() => setDia("jueves")}
  >
    Jueves
  </div>

  <div
    className={`dia ${dia  === "viernes" ? "activo" : ""}`}
    onClick={() => setDia("viernes")}
  >
    Viernes
  </div>

  <div
    className={`dia ${dia === "sabados" ? "activo" : ""}`}
    onClick={() => setDia("sabados")}
  >
    Sábados
  </div>
</div>
            <div className="timesSection">
  {actividadesConHorarios.map(act => {
    const inicio = new Date(act.horarioInicio)
    const fin = new Date(act.horarioFin)
    const colorClase = getColorClase(act.inscriptos, act.capacidad)
    return (
      <div className="contenedor2">
      <div className={`horarioBlock ${colorClase}`}onClick={()=>inscribirAct(inicio)}  key={act.id}>
        <p className="horarioHoraI">
          {inicio.getHours()}:{inicio.getMinutes().toString().padStart(2, '0')}
        </p>
        <p className="guion">-</p>
        <p className="horarioHoraF">
          {fin.getHours()}:{fin.getMinutes().toString().padStart(2, '0')}
        </p>
        <p className="fechaHorario">
          {inicio.getDate()}/{inicio.getMonth() + 1}
        </p>
        <div className="inscripcionButton" >
          Unirme
        </div>
      </div>
      </div>
    )
  })}
</div>           
            <div className="coachesSection"></div>
        </div>
        <div className="myActsSection"><h1>Mis Actividades</h1>
        <div className="actividadesRows">
          {misActividades.map(miAct => (
  <div className="miactCard" key={miAct.id}>
    <div className="miactHeader">
      <span className="miactDia">{miAct.dia}</span>
      <span className="miactHora">
        {new Date(miAct.horarioInicioActividad).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })}
      </span>
    </div>

    <h1 className="miactTitulo">{miAct.nombreActividad}</h1>
  </div>
))}
        </div>
        </div>
        </div>
    )
}