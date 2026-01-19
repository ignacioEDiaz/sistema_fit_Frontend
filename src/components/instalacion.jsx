import { useEffect, useRef, useState } from "react"
import api from "../api/axios";
import "./instalacion.css"

export default function Instalacion(){
    const [instalaciones,setInstalaciones]=useState([])
    const[currentIndex,setCurrentIndex]=useState(0)
    const listref = useRef();


    const getInstalaciones = async ()=>{
    const instalaciones = await api.get("instalacion/instalaciones");
    setInstalaciones(instalaciones.data);
    console.log(instalaciones.data)
   }

    useEffect(()=>{
        getInstalaciones()
    },[])
    useEffect(()=>{
        const listNode= listref.current;
        const imgNode=listNode.querySelectorAll("li > img")[currentIndex]//esto devuelve la imagen actual
        if(imgNode){
            imgNode.scrollIntoView({
                behavior:"smooth",
                inline: "center"
            })
        }
    },[currentIndex])
   
    const scrollToImage= (dir)=>{
        if (dir === 'prev'){
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 :curr -1;
            })
        }else{
            const isLastSlide = currentIndex === instalaciones.length -1;
            if(!isLastSlide){
                setCurrentIndex(curr => curr + 1);
            }
        }
    }

    

    return(
        <div className="containerInstalacion">
            <h1 className="tituloInstalaciones">instalaciones</h1>
            <div className="instalacionesGaleria">
                <div className="leftButton"onClick={()=> scrollToImage(('prev'))}>
                 &#10094;
                </div>
                <div className="galeria">
                    <ul ref={listref}>
                        {
                            instalaciones.map((insta)=>{
                                return <li key ={insta.id}>
                                    <img src={`data:${insta.imagen.mimeType};base64,${insta.imagen.buffer}`} width={1100} height={680} />
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="rightButton"onClick={()=> scrollToImage(('next'))}>
                  &#10095;
                </div>
            </div>
        </div>
    )
}