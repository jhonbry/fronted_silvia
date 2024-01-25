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
          <!-- Empty drawer -->
          <div class="drawer-content">
            <q-avatar size="130px" class="avatar">
              <img src="https://via.placeholder.com/150" />
            </q-avatar>
            <div class="text-h6">John Doe</div>
            <div class="divider"></div> <!-- Línea divisora -->
            <div class="navigation">
              <!-- Aquí coloca tus diferentes páginas de navegación -->
              <router-link to="/">Inicio</router-link>
              <router-link to="/about">Acerca de</router-link>
              <router-link to="/contact">Contacto</router-link>
            </div>
          </div>
        </q-drawer>  
  
        <q-page-container>
          
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
/* Estilos adicionales */
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
  align-items: center;
}

.navigation router-link {
  margin: 10px 0;
}
</style>