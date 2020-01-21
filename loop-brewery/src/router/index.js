import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Beer from "../views/Beer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/beer/:id",
    name: "beer",
    component: Beer
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
