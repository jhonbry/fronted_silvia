<template>
  <div class="body">
    <div class="contenedor">
      <q-card class="my-card">
        <div id="card-title">
          <h2 class="log">Login</h2>
          <i class="fa-regular fa-circle-user" id="img"></i>
        </div>
        <div class="containerData" v-if="MostrarData">
          <q-card-actions vertical align="right" class="texto">
            <q-input color="green" filled v-model="data.usuario" label="Nombre">
              <template v-slot:prepend>
                <i class="fa-solid fa-user-lock"></i>
              </template>
            </q-input>

            <q-input color="green" filled v-model="data.password" label="Contraseña" type="password">
              <template v-slot:prepend>
                <i class="fa-solid fa-file-signature"></i>
              </template>
            </q-input>
          </q-card-actions>


        </div>
        <div class="containerError" v-if="mostrarError">
          <h4>Por favor digite el Nombre o Contraseña</h4>
        </div>
        <div class="containerError" v-if="error2">
          <h4>{{ msj }}</h4>
        </div>
        <button @click="Login()" class="btn">Aceptar</button>
      </q-card>
    </div>
  </div>
</template>


<script setup>
import images from "../assets/fondo12.png"

import { ref, onMounted } from "vue";
import { useUsuarioStore } from "../stores/usuario.js";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
const usuarioStore = useUsuarioStore();
const $q = useQuasar();
let mostrarError = ref(false);
let MostrarData = ref(true);
const router = useRouter();
let usuario= ref ("");
let password= ref ("");
let notification = ref()
let greatMessage = ref("");
let badMessage = ref("");
let red = ref(null);
let error2 = ref(null);
let msj = ref(null)
const data = ref({
  usuario: "",
  password: "",
})
const useUsuario = useUsuarioStore();

async function obtenerInfo(){
  try {
    await usuarioStore.obtenerusuario();
    usuario.value= useUsuario.usuarios;
    rows.value=useUsuario.usuarios;
  } catch (error) {
    console.log(error);
  }
}

async function Login() {
  if (data.value.usuario.trim() === "" || data.value.password.trim() === "") {
    mostrarError.value = true;
    setTimeout(() => {
      mostrarError.value = false;
    }, 2200);
    return;
  } else {
    try {
      showDefault();
      console.log("data: ", data.value);
      const res = await useUsuario.login(data.value);
      console.log(res);
      if (notification) {
        notification();
      }
      if (res.msg) {
        console.log('maluco, user o contra maluca');
      } else {
        router.push('/Home');
      }
    } catch (error) {
      console.error("Error in login:", error);
    }
  }
  console.log(data.value);
}


const showDefault = () => {
  notification = $q.notify({
    spinner: true,
    message: "Please wait...",
    timeout: 0,
  });
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.form_container {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 40px 20px 40px;
  background-color: #ededed;
  box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.03),
    0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
    0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 11px;
  font-family: "Inter", sans-serif;
  border: 2px solid rgb(255, 255, 255);
}

.logo_container {
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  background: linear-gradient(180deg, rgba(248, 248, 248, 0) 50%, #F8F8F888 100%);
  border: 1px solid #F7F7F8;
  filter: drop-shadow(0px 0.5px 0.5px #EFEFEF) drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  border-radius: 11px;
}

.title_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.title {
  margin: 0;
  font-size: 1.25rem;
  color: #000000;
}

.subtitle {
  font-size: 0.725rem;
  max-width: 80%;
  text-align: center;
  line-height: 1.1rem;
  color: #ffffff;
}

.input_container {
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.icon {
  width: 20px;
  position: absolute;
  z-index: 99;
  left: 12px;
  bottom: 9px;
}

.input_label {
  font-size: 0.85rem;
  color: #000000;
  font-weight: 300;
}

.input_field {
  width: auto;
  height: 40px;
  padding: 0 0 0 40px;
  border-radius: 7px;
  outline: none;
  border: 1px solid #e5e5e5;
  filter: drop-shadow(0px 1px 0px #efefef) drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 2px #242424;
  background-color: white;
}

.sign-in_btn {
  width: 100%;
  height: 40px;
  border: 0;
  background: #115DFC;
  border-radius: 7px;
  outline: none;
  color: #ffffff;
  cursor: pointer;
}

.sign-in_ggl {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #ffffff;
  border-radius: 7px;
  outline: none;
  color: #242424;
  border: 1px solid #e5e5e5;
  filter: drop-shadow(0px 1px 0px #efefef) drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  cursor: pointer;
}

.sign-in_apl {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #212121;
  border-radius: 7px;
  outline: none;
  color: #ffffff;
  border: 1px solid #e5e5e5;
  filter: drop-shadow(0px 1px 0px #efefef) drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  cursor: pointer;
}

.separator {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: #8B8E98;
}

.separator .line {
  display: block;
  width: 100%;
  height: 1px;
  border: 0;
  background-color: #e8e8e8;
}

.flex {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-content: center;
  background-color: #219616;
}

.fondo {
  width: 100px;
}
</style>
