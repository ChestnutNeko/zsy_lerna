import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../components/index";
// import { getUrlParam } from "../lib/location.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Index,
    meta: {
      title: "demo"
    }
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
    meta: {
      title: "demo"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/demo",
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (!window.entryUrl) {
    window.entryUrl = location.href;
  }
  // if (getUrlParam("uuid")) {
  //   sessionStorage.setItem("uuid", getUrlParam("uuid"));
  // }
  next();
});

export default router;