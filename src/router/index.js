import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "Home" */ "@/views/Home")
  },
  {
    path: "/form",
    name: "AppForm",
    component: () => import(/* webpackChunkName: "AppForm" */ "@/views/AppForm")
  },
  {
    path: "/demo",
    name: "Demo",
    component: () => import(/* webpackChunkName: "Demo" */ "@/views/Demo")
  },
  {
    path: "/reactive",
    name: "Reactive",
    component: () => import(/* webpackChunkName: "Demo" */ "@/views/Reactive")
  },
  {
    path: "/lifecycle",
    name: "Lifecycle",
    component: () =>
      import(/* webpackChunkName: "Lifecycle" */ "@/views/Lifecycle")
  },
  {
    path: "/watch",
    name: "Watch",
    component: () => import(/* webpackChunkName: "Watch" */ "@/views/Watch")
  },
  {
    path: "/api",
    name: "ApiHandle",
    component: () =>
      import(/* webpackChunkName: "ApiHandle" */ "@/views/ApiHandle")
  },
  {
    path: "/apiVuex",
    name: "ApiHandleVuex",
    component: () =>
      import(/* webpackChunkName: "ApiHandleVuex" */ "@/views/ApiHandleVuex")
  },
  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "Text" */ "@/views/Test")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
