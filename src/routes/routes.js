
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
import { useUsuarioStore } from "../stores/usuario.js";
import { createRouter, createWebHashHistory } from "vue-router";
const auth = (to, from, next) => {
  if (checkAuth()) {
      const userUsuario = useUsuarioStore()
      const rol = userUsuario.rol
      if (!to.meta.rol.includes(rol)) {
          return next({ name: 'login' })
      }
      next()
  } else {
      return next({ name: 'login' })
  }
}

const checkAuth = () => {
  const useUsuario = useUsuarioStore()

  const token = useUsuario.token

  if (useUsuario.login == "" || useUsuario.login === undefined) {
      return false;
  }
  if (!token) return false
  return true
};

const routes = [
  { path: "/",component: Login,},
  { path: "/Home",component: Home,
    children: [
      {path: "/Inicio", component: Inicio, },
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
