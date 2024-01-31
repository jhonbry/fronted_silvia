  <template>
    <div class="q">
      <div class="contenedores">
        <img :src="images" class="fondo">
        <h1>Gestión de bodega</h1>
        <h5>Serivicio Nacional de Educación</h5>
      </div>
      <q-card class="card" flat bordered>
        <q-card-section class="texto">
          <router-link to="/Login">
            <a>
              <div class="text-h5" style="color: white;background-color: black;  height: 115%;">Acceder</div>
            </a>
          </router-link>
          <a >
          <div class="text-h5" style="color: white;background-color: black;  height: 115%;">Registrarse</div>
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
  import images from "../assets/fondo.png"
  </script>


  <style scoped>
  .q {
    margin: 0;
    height: 100vh;
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
  }

  a {
    text-decoration: none;
  }
  .text-h5
  {
    display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9%;
  }
  .fondo{
    width: 500px;

  }
  .contenedores{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h5{
    color: white;
    font-size: 35px;
    margin: 0%;
    font-family: sans-serif;
    font-weight:  bolder;

  }
  h1{
    margin: 0%;
    color: white;
    font-family: sans-serif;
    font-weight:  bolder;
  }

  </style>