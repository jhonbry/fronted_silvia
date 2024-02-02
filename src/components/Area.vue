<template>
  <div>
    <div>
      <h1 style="text-align: center; margin-top: 50px;">Vendedores</h1>
      <hr />
    </div>
    <q-dialog v-model="fixedagregar">
      <q-card class="modal-content">
        <div class="contorno">
          <q-card-section class="row items-center q-pb" style="color: black">
            <div class="text-h6">{{ text }}</div>
            <q-space />
          </q-card-section>
          <q-separator />
          <div class="containerData" v-if="mostrarData">
            <q-card-section style="max-height: 50vh" class="scroll">
              <q-input v-model="Nombre" label="Nombre" style="width: 300px" />
              <q-input v-model="Cedula" label="Cedula" style="width: 300px" type="number" />
              <q-input v-model="Telefono" label="Telefono" type="number" style="width: 300px" />
              <q-input v-model="password" label="Contraseña" type="password" style="width: 300px" />
            </q-card-section>
          </div>

          <div class="containerError" v-if="mostrarError">
            <h4>{{ error }}</h4>
          </div>
          <q-separator />

          <q-card-actions align="right" style="gap: 30px; margin-top: 10px">
            <button class="btn" v-close-popup>Cancelar</button>
            <button @click="AgregarVendedor()" class="btn">Aceptar</button>
          </q-card-actions>
        </div>
      </q-card>
    </q-dialog>

    <q-dialog v-model="fixed">
      <q-card class="modal-content">
        <div class="contorno">
          <q-card-section class="row items-center q-pb" style="color: black">
            <div class="text-h6">{{ text }}</div>
            <q-space />
          </q-card-section>
          <q-separator />
          <div class="containerData" v-if="mostrarData">
            <q-card-section style="max-height: 50vh" class="scroll">
              <q-input v-model="Nombre" label="Nombre" style="width: 300px" />
              <q-input v-model="Cedula" label="Cedula" style="width: 300px" type="number" />
              <q-input v-model="Telefono" label="Telefono" type="number" style="width: 300px" />
            </q-card-section>
          </div>

          <div class="containerError" v-if="mostrarError">
            <h4>{{ error }}</h4>
          </div>
          <q-separator />

          <q-card-actions align="right" style="gap: 30px; margin-top: 10px">
            <button class="btn" v-close-popup>Cancelar</button>
            <button @click="EditarVendedorExistente()" class="btn">
              Aceptar
            </button>
          </q-card-actions>
        </div>
      </q-card>
    </q-dialog>

    <div style="width: 1000px; ">
      <div class="btn-agregar">
        <q-btn class="bg-secondary text-white" label="Agregar Vendedores" @click="agregarVendedor()" />
      </div>
      <div class="q-pa-md" style="padding: 0;">
        <q-table class="my-sticky-dynamic" flat bordered :rows="rows" :columns="columns" :loading="loading"
          row-key="index" virtual-scroll :virtual-scroll-item-size="48" :virtual-scroll-sticky-size-start="48"
          :pagination="pagination" :rows-per-page-options="[0]" @virtual-scroll="onScroll"
          style="height: 600px;"><template v-slot:body-cell-estado="props">
            <q-td :props="props">
              <label for="" v-if="props.row.estado == 1" style="color: green">Activo</label>
              <label for="" v-else style="color: red">Inactivo</label>
            </q-td>
          </template>
          <template v-slot:body-cell-opciones="props">
            <q-td :props="props" class="botones">
              <button @click="EditarVendedor(props.row._id)" class="edi">
                <i class="fa-solid fa-pencil"></i>
              </button>
              <button @click="InactivarVendedor(props.row._id)" v-if="props.row.estado == 1" class="inac">
                <i class="fa-solid fa-xmark"></i>
              </button>
              <button @click="putActivarVendedor(props.row._id)" v-else class="act">
                <i class="fa-solid fa-check"></i>
              </button>
            </q-td>
          </template></q-table>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.modal-content {
  width: 480px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: -webkit-linear-gradient(bottom, #2dbd6e, #a6f77b);
  border-radius: 3%;
}

.containerError {
  background-color: rgba(255, 0, 0, 0.429);
  padding: 15px;
  text-align: center;
  font-family: "Letra";
  font-weight: bold;
  width: 310px;
  border: 3px solid red;
  margin-bottom: 5px;
}

.containerError h4 {
  font-size: 15px;
  margin: 0;
  padding: 0;
}

.botones button {
  margin: 2px;
}

.btn {
  font-family: "Letra";
  width: 100px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  padding: 10px;
  cursor: pointer;
  background: -webkit-linear-gradient(bottom, #2dbd6e, #a6f77b);
}

.btn:hover {
  transition: ease-in-out 0.5s;
  transform: scale(1.1);
}

.btn-agregar {
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: left;
  color: black;
  text-transform: capitalize;
  margin-bottom: 15px;
}

hr {
  background-color: green;
  height: 2px;
  border: none;
  width: 363px;
  margin-bottom: 1%;
}

h1 {
  font-family: "Letra";
  text-align: center;
  margin: 0;
  align-items: center;
  margin-top: 2%;
}

.text-h6 {
  font-size: 28px;
  font-family: "Letra";
}

.contorno {
  background-color: white;
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.botones .edi {
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 7px;
  background-color: transparent;
}

.botones .edi:hover {
  transform: scale(1.05);
  transition: all 0.5s;
}

.botones .act {
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 7px;
  background-color: transparent;
}

.act i {
  font-size: 22px;
  color: green;
}

.inac {
  /*   display: flex;
  align-items: center; */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  margin: 0;
  background-color: transparent;
}

.botones .edi i {
  font-size: 20px;
}

.inac i {
  font-size: 25px;
  color: red;
}
</style>