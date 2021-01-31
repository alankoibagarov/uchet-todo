import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "current",
    component: Home,
    exact: true
  },
  {
    path: "/completed",
    name: "completed",
    component: () => import("../views/Completed.vue")
  },
  {
    path: "/deleted",
    name: "deleted",
    component: () => import("../views/Deleted.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
