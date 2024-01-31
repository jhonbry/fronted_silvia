<template>
  <div>
    <router-view />

    <q-layout view="hHh LpR fff">
      <q-header reveal elevated class="bg-green text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title>
            <q-avatar>
              <img :src="avatar" />
            </q-avatar>
            Inicio
          </q-toolbar-title> 
        </q-toolbar>
      </q-header>

      <q-drawer
        show-if-above
        v-model="leftDrawerOpen"
        side="left"
        behavior="desktop"
        elevated
      >
        <!-- Empty drawer -->
        <div class="drawer-content">
          <q-avatar size="130px" class="avatar">
            <img src="https://via.placeholder.com/150" />
          </q-avatar>
          <div class="text-h6">Usuario</div>
          <div class="divider"></div>
          <div class="navigation">
            <q-item clickable v-for="(link, index) in links" :key="index" @click="navigateTo(link.path)">
              <q-item-section>{{ link.text }}</q-item-section>
            </q-item>
            <div class="divider"></div>
          </div>
        </div>
      </q-drawer>

        <q-page-container>
          <div class="tarjetas">
            <div class="card" style="height: 250px; width: 200px;">      
              <h2></h2>
            </div>
            <div class="card" style="height: 250px; width: 200px;">
              <h2></h2>
            </div>
            <div class="card" style="height: 250px; width: 200px;">
              <h2></h2>
            </div>
            <div class="card" style="height: 250px; width: 200px;">
              <h2></h2>
            </div>
            <div class="card" style="height: 250px; width: 200px;">
              <h2></h2>
            </div>
            <div class="card" style="height: 250px; width: 200px;">
              <h2></h2>
            </div>
            <div class="card" style="height: 250px; width: 200px;">
              <h2></h2>
            </div>
            <div class="card" style="height: 250px; width: 200px;">
              <h2></h2>
            </div>
            <div class="card" style="height: 250px; width: 200px;">
              <h2></h2>
            </div>
            <div class="card" style="height: 250px; width: 200px;">
              <h2></h2>
            </div>
          </div>
          
        </q-page-container>
      </q-layout>
    </div>
  </template>
    
    <script setup>
    import { ref } from 'vue';
    import avatar from '../assets/avatar.png'
    import { useRoute, useRouter } from 'vue-router';
    
    const leftDrawerOpen = ref(false);
    const route = useRoute();
    const router = useRouter();
    
    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };
    
    const links = [
      { text: 'Inicio', path: '/' },
      { text: 'Acerca de', path: '/about' },
      { text: 'Contacto', path: '/contact' }
    ];
    
    const navigateTo = (path) => {
      router.push(path);
    };
    </script>
  
  <style scoped>


  .q-page-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .tarjetas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 80px;
    padding: 6%;
  }
  

  .card {
    box-sizing: border-box;
    width: 240px;
    height: 254px;
    background: #209616;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: 2px 7px 11px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    user-select: none;
    font-weight: bolder;
    color: black;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
  
  .card:hover {
    border: 1px solid black;
    transform: scale(1.05);
    background-color: #23c414;
  }
  
  .card:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
  
  .drawer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  margin-top: 20px;
}

.text-h6 {
  margin-top: 10px;
}

.divider {
  width: 80%;
  border-bottom: 1px solid #ccc;
  margin: 20px auto;
}

.navigation {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 80%;
    text-align: center;
  }

  .navigation q-item {
    width: 100%;
  }

  .navigation q-item-section {
    width: 100%;
    font-size: 1.2rem;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
    box-sizing: border-box;
    display: flex; /* Agregado */
    align-items: center; /* Agregado */
    justify-content: center; /* Agregado */
  }

  .navigation q-item-section:hover {
    background-color: #e0e0e0;
  }

  .navigation .divider {
    height: 1px;
    width: 100%;
    background-color: #ccc;
    margin: 20px auto;
  }

.bg-green {
  background-color: #209616 !important;
}
  
  </style>  
