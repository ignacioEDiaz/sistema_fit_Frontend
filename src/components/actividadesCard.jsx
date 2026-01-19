import "./actividadesCard.css"
import { useState,useEffect, useContext } from "react"
import api from "../api/axios";
import StateActividad  from "../context/StateActividad";
import { useNavigate } from "react-router-dom";


export default function ActividadesSection(){

    const [actividades,setActividades] = useState([]);
   const getActividades= async () =>{
        const actividades= await api.get("actividadCard/actividadesCard");
       setActividades(actividades.data)
       console.log(actividades.data)
   }
     useEffect(() => {
        getActividades();
    }, []);

    const navigate = useNavigate()
    const irAct = (nombre) =>{
        navigate(`/actividades/${encodeURIComponent(nombre)}`)
    }

    return (
        <div className="actividadesContainer">
        <h1 className="titulo">actividades</h1>
        <div className="actividadesFila">
            {actividades.map((act)=>(
                <div key={act.id} className="actividadCard">
                    <h2 className="">{act.nombre}</h2>
                   <div className="imagenContainer"> {act.imagen ? (
                            <img
                                src={`data:${act.imagen.mimeType};base64,${act.imagen.buffer}`}
                                alt={act.nombre}
                                className="actividadImg"
                            />
                        ) : (
                            <p>Sin imagen</p>
                        )}
                        </div>
                    <button
                    onClick={() => irAct(act.nombre)}
                     className="actividadButton">Ver horarios</button>

                </div>
            ))}
        </div>
        </div>
    )

}