import { useState } from "react";
import { actividadContext } from "./actividadContext";

const StateActividad = ({children}) =>{
    const [actividad,setActividad] = useState([])
    const addAct = (newAct) =>{
        setActividad(newAct)
    }
    const deleteAct= () =>{
        setActividad([])
    }

    return (
        <actividadContext.Provider
        value={{
            actividad,
            deleteAct,addAct
        }}>
            {children}
        </actividadContext.Provider>
    )
}
export default StateActividad;