<template>
  <div class="body">
    <div class="contenedor">
      <q-card class="my-card"><br>
        <div class="card-title">
          <img :src="images" class="fondo" alt="Logo">
          <h4 class="log">Login</h4>
        </div>
        <div class="containerData" v-if="MostrarData">
          <q-card-actions vertical class="texto">
            <q-input color="green" filled v-model="data.usuario" label="Nombre">
              
            </q-input>
            <q-input color="green" filled v-model="data.password" label="Contraseña" type="password">
             
            </q-input>
          </q-card-actions>
        </div>
        <button @click="Login()" class="btn">Aceptar</button> <br>
        <div class="containerError" v-if="mostrarError || error2">
          <h5 v-if="mostrarError">Por favor digite el Nombre o Contraseña</h5>
          <h4 v-if="error2">{{ msj }}</h4>
          
        </div>
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
        mostrarErrores(res.msg)
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

function mostrarErrores (msg) {
  notification = $q.notify({
    type: 'negative',
    message: msg,
    timeout: 0,
  });
};

</script>

<style scoped>
.q-field--filled {
    padding: 0 12px;
    border-radius: 4px 4px 0 0;
    width: 300px;
    

}


.body {
  background-color: #289e2c;
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
}

.my-card{
    width: 80vw;
    max-width: 400px;
    height: 52vh;
    min-height: 500px;
    display: flex;
    align-items: center;
    background-color: #ededed;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
    border: 2px solid #ffffff;
    flex-direction: column;
    overflow: hidden;
}

.card-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.fondo {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.texto {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.btn {
  background-color: #4caf50;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.containerError {
  text-align: center;

}

h5 {
  font-size: 14px;
  color: red;
}

h4 {
  font-size: 26px;
  color: rgb(0, 0, 0);
}
</style>
