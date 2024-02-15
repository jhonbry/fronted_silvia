<template>
  <div class="q">
    <div class="contenedores">
      <img :src="images" class="fondo">
      <h1>Gestión de bodega.</h1>
      <h5>Serivicio Nacional de Educación.</h5>
    </div>
    <q-card class="card" flat bordered>
      <q-card-section>
        <div class="cuadro">
        <div class="texto">
          <router-link to="/Login">
            <a>
              <div class="text-h5" style=";background-color: #155f0f;  height: 50px; width: 230px; border-radius: 15px;">
                Acceder</div>
            </a>
          </router-link>
         
        </div>
      </div>
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
import images from "../assets/fondo.png"
</script>


<style scoped>
.q {
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 70% 30%;
  background-color: #209616;
  background-size: contain;
  background-repeat: no-repeat;
}


#app {
  height: 100%;
}

.no-shadow {
  box-shadow: none !important;
  background-color: #209616;

}

.q-card--bordered {
  border: 0px solid rgba(0, 0, 0, 0.12);
  background-color: white;
}

.card-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.texto {
  display: flex;
  flex-direction: column;
  color: white !important;
  gap: 10px;
  align-content: center;
  flex-wrap: wrap;
}

a {
  text-decoration: none;
}

.text-h5 {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9%;
  color: rgb(255, 255, 255);

}

.text-h5:hover {
  background-color: rgb(148, 148, 148) !important;
  color: black;
}

.fondo {
  width: 500px;
}

.contenedores {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h5 {
  color: white;
  font-size: 35px;
  margin: 0%;
  font-family: sans-serif;
  font-weight: bolder;

}

h1 {
  margin: 0%;
  color: white;
  font-family: sans-serif;
  font-weight: bolder;
}

.card {
  display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
}


</style>