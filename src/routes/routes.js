import Principal from "../components/Principal.vue";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Registrar from "../components/Registrar.vue";
import Area from "../components/Area.vue";
import Ficha from "../components/Ficha.vue";
import Usuario from "../components/Usuario.vue";
import Lote from "../components/Lote.vue";
import Pedido from "../components/Pedido.vue";
import Producto from "../components/Producto.vue";
import itemPresupuesto from "../components/itemPresupuesto.vue";
import Inicio from "../components/inicio.vue";
import distriPresupuesto from "../components/distriPresupuesto.vue";
import distriLoteFicha from "../components/distriLoteFicha.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Principal },
  { path: "/Login",component: Login,},
  { path: "/Home",component: Home,
    children: [
      {path: "/Inicio", component: Inicio ,},
      {path: "/Area", component: Area ,},
      {path: "/Ficha", component: Ficha},
      {path: "/Usuario", component: Usuario},
      {path: "/Lote", component: Lote},
      {path: "/Pedido", component: Pedido},
      {path: "/Producto", component: Producto},
      {path: "/itemPresupuesto", component: itemPresupuesto},
      {path: "/distriPresupuesto", component: distriPresupuesto},
      {path: "/distriLoteFicha", component: distriLoteFicha},
    ]
  },
  { path: "/Registrar", component: Registrar, },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
