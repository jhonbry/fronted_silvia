import Principal from "../components/Principal.vue";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Registrar from "../components/Registrar.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Principal},

  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/Home", 
    component: Home
  },
  {
    path: "/Registrar",
    component: Registrar
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
