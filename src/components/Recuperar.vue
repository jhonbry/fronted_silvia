<template>
    <div class="container">
      <form class="form" @submit.prevent="registrarUsuario">
        <div class="center-img">
          <img :src="images" class="fondo" />
        </div>
        <p class="title">Recuperar</p>
        <p class="message">
          ¡Recupera tu clave ahora mismo!
        </p>
  
        <div class="flex">
          <label>
            <input v-model="nombre" required placeholder="" type="text" class="input" />
            <span>Usuario</span>
          </label>  
        </div>
        <div class="bot">
      <button class="button2">
        <router-link to="/">
          <span class="lable">Cancelar</span>
            </router-link>
      </button>
        <button type="submit" class="submit">Recuperar</button>
        </div><br>
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

.flex{
    display: flex;
    width: 100%;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

.form label {
  position: relative;
}

.form label .input{
    width: 200px;
    height: 50px;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

select{
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
  font-weight: 600;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
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

label .select + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

label .select:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

label .select:focus + span,
label .select:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

label .select:valid + span {
  color: green;
}

.button2 {
  border: none;
  outline: none;
  background-color: #209616;
  padding: 10px;
  border-radius: 10px;
  color: fff;
  font-size: 16px;
  
}

.lable {
  color: #fff;
}
a{
  text-decoration: none;
}
.button2:hover {
  background: #264cf8e1;
}

.bot {
    display: flex;
    gap: 25px;
}
</style>