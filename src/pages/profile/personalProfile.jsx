import "./profile.css"


export default function Profile(){
  return(
    <section class="user-profile">

  <h1>Mi perfil</h1>


  <div class="profile-card">
    <h2>Datos personales</h2>

    <div class="input-group">
      <label>Gmail</label>
      <input type="email" placeholder="usuario@gmail.com"></input>
    </div>

    <div class="input-group">
      <label>Teléfono</label>
      <input type="tel" placeholder="+54 11 1234 5678"></input>
    </div>

    <button class="btn-primary">Guardar cambios</button>
  </div>


  <div class="profile-card">
    <h2>Cambiar contraseña</h2>

    <div class="input-group">
      <label>Contraseña actual</label>
      <input type="password"></input>
    </div>

    <div class="input-group">
      <label>Nueva contraseña</label>
      <input type="password"></input>
    </div>

    <div class="input-group">
      <label>Confirmar nueva contraseña</label>
      <input type="password"></input>
    </div>

    <button class="btn-danger">Actualizar contraseña</button>
  </div>

</section>
  )
}