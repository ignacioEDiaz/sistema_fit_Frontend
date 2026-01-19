import "./home.css"
import ActividadesSection from "../../components/actividadesCard"
import Inicio from "../../components/inicio"
import Instalacion from "../../components/instalacion"
export default function Home() {
return(
    <div className="containerHome">
         <Inicio />
           <div id="actividades">
         <ActividadesSection />
         </div>
         <div id="instalaciones">
         <Instalacion /> 
         </div>
    </div>
)
}