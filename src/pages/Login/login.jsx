import { useState } from "react";
import "./Login.css";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const navigate = useNavigate();
    const[userName,setUsername]= useState("")
    const[password,setPassword]= useState("")
    const[error,setError]= useState(false)
     async function  handleSubmit(e){
        e.preventDefault()
        if (userName === "" || password === ""){
            setError(true)
            return
        }
        setError(false)
    

    try{ 
    const response = await api.post("/user/login",{userName,password})
    console.log(response.data)
    localStorage.setItem("token", response.data.message);

    }catch(err){
        console.log(err)
    }
    navigate("/")

}
   
    return(
    <div className="container">
        <h1>Login</h1>
        <div className="login-form">
            <h2>Bienvenido/a!</h2>
        <form
        onSubmit={handleSubmit                                                                                                     }
        >
            <div className="imput">
                <p>Usuario</p>
                <input type='text' 
                value={userName}
                onChange={e=>setUsername(e.target.value)}
                />
            </div>
            <div className="imput">
                <p>Contraseña</p>
                <input type="password" 
                value={password}
                onChange={e=>setPassword(e.target.value)}
                />
            </div>
             <button className="register"
             type="submit">Loguearme</button>
        </form>
             {error && <p>Los campos son obligatorios</p>}
        </div>
        
    </div>
    )
}

