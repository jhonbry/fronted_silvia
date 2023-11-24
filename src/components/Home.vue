<template>
    <div>
        <q-layout view="hHh LpR lFf">


            <q-header elevated class="bg-primary text-white">
                <q-toolbar>
                    <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

                    <q-toolbar-title>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                        </q-avatar>
                        Title
                    </q-toolbar-title>
                </q-toolbar>
            </q-header>


            <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="desktop" bordered>
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
  
<script  setup >
import { ref } from 'vue'


let leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value
}


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
    flex-wrap:wrap ;
    align-items: center;
    justify-content: center;

}

.card {
    width: 190px;
    height: 254px;
    background: #07182E;
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
    content: '';
    position: absolute;
    width: 100px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
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
    content: '';
    position: absolute;
    background: #07182E;
    inset: 5px;
    border-radius: 15px;
}
</style>

