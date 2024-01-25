<template>
  <div class="q">
    <q-card class="card" flat bordered>
      <q-card-section class="texto">
        <router-link to="/Login">
          <a>
            <div class="text-h5" style="color: white;background-color: black; width: 150%; height: 115%;">Acceder</div>
          </a>
        </router-link>
        <a >
        <div class="text-h5" style="color: white;background-color: black; width: 150%; height: 115%;">Registrarse</div>
      </a>
      </q-card-section>

   

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template> 
  
<script setup>

</script>
  

<style scoped>
.q {
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  margin: 0%;
  padding: 0%;
  align-items: center;
  background-color: #00bfff;
}


#app {
  height: 100%;
}

.no-shadow {
  box-shadow: none !important;
  height: 100vh;
  width: 40vw;
  background-color: #00000091;
}

.card-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Ajusta según tus necesidades */
}

.texto {
  display: flex;
  justify-content: space-evenly;
  color: white !important;
  width: 100%;
}

a {
  text-decoration: none;
}
.text-h5
{
  display: flex;
    width: 20%;
    align-items: center;
    justify-content: center;
    border-radius: 9%;
}
</style>