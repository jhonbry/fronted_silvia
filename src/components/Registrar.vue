<template>
  <div class="container">
    <form class="form">
      <div class="centeimg">
        <img :src="images" class="fondo" />
      </div>
      <p class="title">Registro</p>
      <p class="message">Regístrate ahora y obtén acceso completo a nuestra aplicación.</p>
      <div class="flex">
        <label>
          <input required="" placeholder="" type="text" class="input" />
          <span>Nombre</span>
        </label>

        <label>
          <input required="" placeholder="" type="text" class="input" />
          <span>Cedula</span>
        </label>

        <label>
          <input required="" placeholder="" type="email" class="input" />
          <span>Telefono</span>
        </label>

        <label>
          <input required="" placeholder="" type="password" class="input" />
          <span>Usuario</span>
        </label>
        <label>
          <input required="" placeholder="" type="password" class="input" />
          <span>contraseña</span>
        </label>
        <label>
          <input required="" placeholder="" type="password" class="input" />
          <span>Rol</span>
        </label>

        <label>
          <input required="" placeholder="" type="password" class="input" />
          <span>Estado</span>
        </label>
      </div>
  
      <button class="submit">Registrar</button>
      <p class="signin"> <router-link to="/Login">¿Ya tienes una cuenta creada?</router-link> </p>
    </form>
  </div>
</template>

<script setup>
import images from "../assets/fondo12.png";
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #209616;
  align-items: center;
  justify-content: center;
}

.centeimg {
  display: flex;
  justify-content: center;
}

.fondo {
  height: 100px;
  width: 100px;
  margin: 25px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 60vh;
  height: 70vh;
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
}

.title {
  font-size: 28px;
  color: #209616;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;

}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0;
  background-color: #209616;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;

}

.message,
.signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
  text-align: center;

}

.signin {
  text-align: center;

}

.signin a {
  color: royalblue;
  text-decoration: none;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 15%;
  justify-content: center;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input+span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown+span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus+span,
.form label .input:valid+span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid+span {
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: #209616;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: 0.3s ease;
}

.submit:hover {
  background-color: rgb(56, 90, 194);
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}


label .select {
  width: 100%;
  padding: 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

label .select+span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

label .select:placeholder-shown+span {
  top: 15px;
  font-size: 0.9em;
}

label .select:focus+span,
label .select:valid+span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

label .select:valid+span {
  color: green;
}
</style>
