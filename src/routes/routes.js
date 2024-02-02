import Principal from "../components/Principal.vue";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Registrar from "../components/Registrar.vue";
import Area from "../components/Area.vue";
import Ficha from "../components/Ficha.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Principal },
  { path: "/Login",component: Login,},
  { path: "/Home",component: Home,
    children: [
      {path: "/Area", component: Area ,},
      {path: "/Ficha", component: Ficha}
    ]
  },
  { path: "/Registrar", component: Registrar, },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
