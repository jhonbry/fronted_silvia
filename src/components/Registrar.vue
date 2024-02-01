<template>
    <div class="q">
        <q-card-section>
            <div class="container">
                <div class="cuestionario">
                    <div class="logo">
                        <img :src="images" style=";">
                    </div>
                </div>
            </div>
        </q-card-section>
    </div>
</template> 
      
<script setup>
import images from "../assets/fondo.png"
</script>
  
  
<style scoped>
.q {
    margin: 0;
    height: 100vh;
    display: flex;
    background-color: #209616;
    background-size: contain;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
}

.container {
    background-color: white;
    height: 750px;
    width: 1300px;
    border-radius: 15px;

}
</style>