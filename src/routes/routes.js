import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Producto from "../components/Producto.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: Login },

  {
    path: "/Home",
    component: Home,
    children: [
        { path: "/", component: "/Home" },
        { path: "/Home/Producto", component: Producto },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
