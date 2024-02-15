<template>
  <div>
    <div>
      <h1 style="text-align: center; margin-top: 50px;">Presupuesto</h1>
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
              <q-input v-model="nombre" label="Nombre" type="text" style="width: 300px" />
              <q-input v-model="presupuesto" label="Presupuesto" type="number" style="width: 300px" />
              <q-input v-model="año" label="Año" type="text" style="width: 300px" />
            </q-card-section>
          </div>

          <div class="containerError" v-if="mostrarError">
            <h4>{{ error }}</h4>
          </div>

          <q-separator />

          <q-card-actions align="center" style="gap: 30px; margin-top: 10px">
            <button class="btn" @click="fixed = false">Cancelar</button>
            <button @click="editaragregarItem()" class="btn">Aceptar</button>
          </q-card-actions>
        </div>
      </q-card>
    </q-dialog>
    <div style="width: 1000px;">
      <div class="btn-agregar">
        <q-btn class="bg-secondary" label="Agregar Ficha" @click="agregarItem()" />
      </div>
      <div class="q-pa-md">
        <q-table class="my-sticky-virtscroll-table" virtual-scroll flat bordered v-model:pagination="pagination"
          :rows-per-page-options="[0]" :virtual-scroll-sticky-size-start="48" row-key="index" :rows="rows"
          :columns="columns" style="height: 600px;">

          <template v-slot:body-cell-opciones="props">
            <q-td :props="props" class="botones">
              <q-btn color="warning" icon="edit" class="botonv1" @click="editarFicha(props.row)" />
            </q-td>
          </template>
        </q-table>

      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { format } from "date-fns";
import { useItemStore } from "../stores/itempresupuesto.js";
import { useQuasar } from "quasar";
const ItemStore = useItemStore();
const $q = useQuasar();
let error = ref("");
let text = ref("");
let rows = ref([]);
let fixed = ref(false);
let nombre = ref("");
let presupuesto = ref("");
let año = ref("");
let cambio = ref(0);
let mostrarError = ref(false);
let mostrarData = ref(true);
let pagination = ref({ rowsPerPage: 0 })
let items = ref([]);
async function obtenerInfo() {
  try {
    await ItemStore.obtenerInfoitem();
    items.value = ItemStore.items;
    rows.value = ItemStore.items;
  } catch (error) {
    console.log(error);
  }
}


const columns = [
  { name: "presupuesto", label: "Presupuesto", field: "presupuesto", sortable: true, align: "left" },
  { name: "nombre", label: "Nombre", field: "nombre", sortable: true, align: "left" },
  { name: "año", label: "Año", field: "año", sortable: true, align: "left" },
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

function agregarItem() {
  fixed.value = true;
  text.value = "Agregar Ficha";
  cambio.value = 0;
  limpiar();
}

function validar() {
  if (nombre.value.trim() === "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Digite el nombre por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);

  } else if (presupuesto.value.trim() === "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Ingrese el presupuesto por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);
  } else if (año.value.trim() === "") {
    mostrarData.value = false;
    mostrarError.value = true;
    error.value = "Indique el año por favor";
    setTimeout(() => {
      mostrarData.value = true;
      mostrarError.value = false;
      error.value = "";
    }, 2200);
  } else {
    validacion.value = true;
  }
}

async function editaragregarItem() {
  validar();
  if (validacion.value === true) {
    if (cambio.value === 0) {
      try {
        showDefault();
        await ItemStore.postItem({
          nombre: nombre.value,
          presupuesto: presupuesto.value,
          año: año.value,
        });
        if (notification) {
          notification();
        }
        limpiar();
        $q.notify({
          spinner: false,
          message: "Area Agregado",
          timeout: 2000,
          type: "positive",
        });
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
      let id = _id.value;
      if (id) {
        try {
          showDefault();
          await ItemStore.putEditarItem(id, {
            nombre: nombre.value,
            presupuesto: presupuesto.value,
            año: año.value,
          });
          if (notification) {
            notification();
          }
          limpiar();
          $q.notify({
            spinner: false,
            message: "Ficha Actualizada",
            timeout: 2000,
            type: "positive",
          });
          obtenerInfo();
          fixed.value = false;
        } catch (error) {
          if (notification) {
            notification();
          }
          $q.notify({
            spinner: false,
            /*  message: ${error.response.data.error.errors[0].msg}, */
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
  presupuesto.value = "";
  nombre.value = "";
  año.value = "";
}

let idRuta = ref("");

let validacion = ref(false);
let notification = ref(null);
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

let _id = ref("")
function editarFicha(data) {
  fixed.value = true;
  _id.value = data._id
  nombre.value = data.nombre
  presupuesto.value = data.presupuesto
  año.value = data.año
  cambio.value = 1;
}

</script>
