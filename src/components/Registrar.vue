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

          <input placeholder="" type="text" class="input" v-model="nombre">
          <span>Nombre</span>
        </label>

        <label>
          <input placeholder="" type="number" class="input" v-model="cedula" />
          <span>Cedula</span>
        </label>

        <label>
          <input placeholder="" type="number" class="input" v-model="telefono" />
          <span>Telefono</span>
        </label>

        <label>
          <input placeholder="" type="text" class="input" v-model="usuario" />
          <span>Usuario</span>
        </label>
        <label>
          <input placeholder="" type="password" class="input" v-model="password" />
          <span>contraseña</span>
        </label>
        <label>
          <input placeholder="" type="text" class="input" v-model="rol" />
          <span>Rol</span>
        </label>

      </div>

      <button @click="aditaragregarusuario()" class="submit">Registrar</button>
      <p class="signin"> <router-link to="/Login">¿Ya tienes una cuenta creada?</router-link> </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUsuarioStore } from "../stores/usuario.js";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import images from "../assets/fondo12.png";


const usuarioStore = useUsuarioStore();
const useUsuario = useUsuarioStore();
const $q = useQuasar();

let nombre = ref("")
let cedula = ref("")
let telefono = ref("")
let usuario = ref("")
let password = ref("")
let rol = ref("")

function validar() {
  if (nombre.value.trim() == "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Ingrese un nombre por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);

  } else if (cedula.value.trim() == "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Ingrese la cedula por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);
  } else if (telefono.value.trim() == "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Indique el numero de telefono por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);
  } else if (usuario.value.trim() == "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Ingrese su nombre de usuario por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);
  } else if (password.value.trim() == "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Ingrese su contraseña por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);
  } else if (rol.value.trim() == "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Seleccione uno de los roles disponibles por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);
  } else {
    validacion.value = true;
  }
}
async function editaragregarFicha() {
  validar();
  if (validacion.value === true) {
    if (cambio.value === 0) {
      if (nombre.value.trim() === '') {
        mostrarData.value = false;
        mostrarError.value = true;
        error.value = "Por favor digite un nombre";
        setTimeout(() => {
          mostrarData.value = true;
          mostrarError.value = false;
          error.value = "";
        }, 2200);
        return;
      }
      try {
        showDefault();
        await FichaStore.postFicha({
          nombre: nombre.value,
          codigo_ficha: codigo_ficha.value,
          nivel_de_formacion: nivel_de_formacion.value,
          fecha_inicio: fecha_inicio.value,
          ficha_fin: ficha_fin.value,
        });
        if (notification) {
          notification();
        }
        limpiar();
        $q.notify({
          spinner: false,
          message: "Area Agregado",
          timeout: 2000,
          type: "positive",
        });
        console.log("a")
        obtenerInfo();
      } catch (error) {
        if (notification) {
          notification();
        }
        $q.notify({
          spinner: false,
          // message: `${error.response.data.error.errors[0].msg}`,
          timeout: 2000,
          type: "negative",
        });
      }
    } else {
      let id = idFicha.value;
      if (id) {
        try {
          showDefault();
          await areasStore.putEditarArea(id, {
            nombre: nombre.value,
          });
          if (notification) {
            notification();
          }
          limpiar();
          $q.notify({
            spinner: false,
            message: "Ruta Actualizada",
            timeout: 2000,
            type: "positive",
          });
          obtenerInfo();
        } catch (error) {
          if (notification) {
            notification();
            console.log(notification);
          }
          $q.notify({
            spinner: false,
            /*  message: `${error.response.data.error.errors[0].msg}`, */
            timeout: 2000,
            type: "negative",
          });
        }
      }
    }
    validacion.value = false;
  }
}


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
