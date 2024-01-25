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
            <div class="card">
              <h2>CARD</h2>
            </div>
            <div class="card">
              <h2>CARD</h2>
            </div>
            <div class="card">
              <h2>CARD</h2>
            </div>
            <div class="card">
              <h2>CARD</h2>
            </div>
            <div class="card">
              <h2>CARD</h2>
            </div>
            <div class="card">
              <h2>CARD</h2>
            </div>
            <div class="card">
              <h2>CARD</h2>
            </div>
            <div class="card">
              <h2>CARD</h2>
            </div>
            <div class="card">
              <h2>CARD</h2>
            </div>
            <div class="card">
              <h2>CARD</h2>
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
    flex-direction: row;
    gap: 80px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  
  .card {
    width: 190px;
    height: 254px;
    background: #07182e;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 20px;
    margin: 10px;
    /* Espaciado entre tarjetas */
  }
  
  .card h2 {
    z-index: 1;
    color: white;
    font-size: 2em;
  }
  
  .card::before {
    content: "";
    position: absolute;
    width: 100px;
    background-image: linear-gradient(
      180deg,
      rgb(0, 183, 255),
      rgb(255, 48, 255)
    );
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }
  
  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }
  
    to {
      transform: rotate(360deg);
    }
  }
  
  .card::after {
    content: "";
    position: absolute;
    background: #07182e;
    inset: 5px;
    border-radius: 15px;
  }
  </style>  