import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Beer from "../views/Beer.vue";
import BeerName from "../views/BeerName.vue";

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
  },
  {
    path: "/beername/:beername",
    name: "beername",
    component: BeerName
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
