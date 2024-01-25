<template>
    <div>
      <q-layout view="hHh LpR fff">
        <q-header reveal elevated class="bg-primary text-white">
          <q-toolbar>
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
  
            <q-toolbar-title>
              <q-avatar>
                <img
                  src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
                />
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
        <h1>hola</h1>
          <!-- drawer content -->
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
  
          <router-view />
        </q-page-container>
      </q-layout>
    </div>
  </template>
    
  <script setup>
  import { ref } from 'vue';
  
  const leftDrawerOpen = ref(false);
  
  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;
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
    background: #4169e18d;
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
    background-color: rgb(0, 136, 255);
  }
  
  .card:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
  
  

  

  </style>  