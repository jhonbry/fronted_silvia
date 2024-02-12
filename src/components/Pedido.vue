<template>
  <div>
    <div>
      <h1 style="text-align: center; margin-top: 50px;">Pedido</h1>
      <hr />
    </div>
    <!-- Modal -->
    <q-dialog v-model="fixed">
      <q-card class="modal-content">
        <div class="contorno">
          <q-card-section class="row items-center q-pb-none" style="color: black">
            <div class="text-h6">{{ text }}</div>
            <q-space />
          </q-card-section>
          <q-separator />
          <div v-if="mostrarData">
            <q-card-section style="max-height: 50vh" class="scroll">
              <q-input v-model="fechacreacion" label="fechacreacion" type="date" style="width: 300px" />
              <q-input v-model="fechaentrega" label="fechaentrega" type="date" style="width: 300px" />
              <q-input v-model="subtotal" label="subtotal" type="number" style="width: 300px" />
              <q-input v-model="total" label="total" type="number" style="width: 300px" />
            </q-card-section>
          </div>
          <div class="containerError" v-if="mostrarError">
            <h4>{{ error }}</h4>
          </div>
          <q-separator />
          <q-card-actions align="center" style="gap: 30px; margin-top: 10px">
            <button class="btn" @click="fixed = false">Cancelar</button>
            <button @click="editaragregarpedido" class="btn">Aceptar</button>
          </q-card-actions>
        </div>
      </q-card>
    </q-dialog>
    <div style="width: 1000px;">
      <div class="btn-agregar">
        <q-btn class="bg-secondary" label="Agregar Ficha" @click="agregarpedido" />
      </div>
      <div class="q-pa-md">
        <q-table class="my-sticky-virtscroll-table" virtual-scroll flat bordered v-model:pagination="pagination"
          :rows-per-page-options="[0]" :virtual-scroll-sticky-size-start="48" row-key="index" :rows="rows"
          :columns="columns" style="height: 600px;">
          <template v-slot:body-cell-opciones="props">
                <q-td :props="props" class="botones">
                    <q-btn color="warning" icon="edit" class="botonv1" @click="editaragregarpedido(props.row)" />
                </q-td>
            </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { format } from "date-fns";
import { usePedidoStore } from "../stores/pedido.js";
import { useQuasar } from "quasar";

const Pedidostore = usePedidoStore();
const $q = useQuasar();
let error = ref("");
let text = ref("");
let rows = ref([]);
let fixed = ref(false);
let fechacreacion = ref("");
let fechaentrega = ref("");
let subtotal = ref("");
let total = ref("");
let estado = ref("");
let cambio = ref(0);
let mostrarError = ref(false);
let mostrarData = ref(true);
let pagination = ref({ rowsPerPage: 0 })
let pedidos = ref([]);

async function obtenerInfo() {
  try {
    await Pedidostore.obtenerpedido();
    pedidos.value = Pedidostore.pedidos;
    rows.value = Pedidostore.pedidos;
    console.log(Pedidostore.pedidos);
  } catch (error) {
    console.log(error);
  }
}

const columns = [
  { name: "fechacreacion", label: "fechacreacion", field: "fechacreacion", format: (val) => format(new Date(val), "yyyy-MM-dd"), sortable: true, align: "left" },
  // { name: "fechaentrega", label: "fechaentrega", field: "fechaentrega", format: (val) => format(new Date(val), "yyyy-MM-dd"), sortable: true, align: "left" },
  { name: "subtotal", label: "subtotal", field: "subtotal", sortable: true, align: "left" },
  { name: "total", label: "total", field: "total", sortable: true, align: "left" },
  { name: "estado", label: "Estado", field: "estado", sortable: true, align: "left" },
  {
    name: "estado",
    label: "Estado",
    field: "estado",
    sortable: true,
    align: "left",
    format: (val) => (val ? "Activo" : "Inactivo"),
  },
  {
    name: "opciones",
    label: "Opciones",
    field: (row) => null,
    sortable: false,
    align: "center",
  },
];

function agregarpedido() {
  fixed.value = true;
  text.value = "Agregar pedido";
  cambio.value = 0;
  limpiar();
}

function validar() {
  if (fechacreacion.value.trim() == "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Digite la fecha de creacion por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);

  } else if (fechaentrega.value.trim() == "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Ingrese la fecha de entrega por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);
  } else if (subtotal.value.trim() == "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Ingrese el subtotal por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);
  } else if (total.value.trim() == "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Ingrese el total por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);
  } else {
    validacion.value = true;
  }
}

async function editaragregarpedido() {
  validar();
  if (validacion.value === true) {
    if (cambio.value === 0) {
      if (fechaentrega.value.trim() === '') {
        mostrarData.value = false;
        mostrarError.value = true;
        error.value = "Por favor digite una fecha de entrega";
        setTimeout(() => {
          mostrarData.value = true;
          mostrarError.value = false;
          error.value = "";
        }, 2200);
        return;
      }
      try {
        showDefault();
        await Pedidostore.postpedido({
          fechaentrega: fechaentrega.value,
          subtotal: subtotal.value,
          total: total.value,
        });
        if (notification) {
          notification();
        }
        limpiar();
        $q.notify({
          spinner: false,
          message: "pedido Agregado",
          timeout: 2000,
          type: "positive",
        });
        console.log("a")
        obtenerInfo();
      } catch (error) {
        if (notification) {
          notification();
        }
        $q.notify({
          spinner: false,
          // message: `${error.response.data.error.errors[0].msg}`,
          timeout: 2000,
          type: "negative",
        });
      }
    } else {
      let id = idRuta.value;
      if (id) {
        try {
          showDefault();
          await Pedidostore.putEditarpedido(id, {
            fechaentrega: fechaentrega.value,
          });
          if (notification) {
            notification();
          }
          limpiar();
          $q.notify({
            spinner: false,
            message: "pedido Actualizado",
            timeout: 2000,
            type: "positive",
          });
          obtenerInfo();
        } catch (error) {
          if (notification) {
            notification();
            console.log(notification);
          }
          $q.notify({
            spinner: false,
            /*  message: `${error.response.data.error.errors[0].msg}`, */
            timeout: 2000,
            type: "negative",
          });
        }
      }
    }
    validacion.value = false;
  }
}

function limpiar() {
  fechacreacion.value = "";
  fechaentrega.value = "";
  subtotal.value = "";
  total.value = "";
}

let idRuta = ref("");

let validacion = ref(true);
let notification = () => {};
const showDefault = () => {
  notification = $q.notify({
    spinner: true,
    message: "Please wait...",
    timeout: 0,
  });
};

onMounted(async () => {
  obtenerInfo();
});

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
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
  
  .contorno {
    background-color: white;
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .botones button {
    margin: 2px;
  }
  
  .btn-agregar {
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    justify-content: left;
    color: white;
    margin-left: 19px;
  }
  
  .body {
    padding: 30px;
    margin: 0;
    text-transform: capitalize;
  }
  
  .containerBoton {
    display: flex;
    justify-content: center;
  }
  
  hr {
    background-color: green;
    height: 2px;
    border: none;
    width: 363px;
    margin-bottom: 1%;
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
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
  }
  
  .containerError h4 {
    font-size: 25px;
    margin: 0;
    padding: 0;
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
    margin-bottom: 10px;
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
  </style>
  <style lang="sass">
    
    </style>
    