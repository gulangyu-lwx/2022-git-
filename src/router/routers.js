const routes = [
  {
    name: "/",
    path: "/index",
    component: () => import("../view/index/index.vue"),
  },
  {
    path: "/",
    redirect: "/index",
    component: () => import("../view/index/index.vue"),
  },
  {
    name: "one",
    path: "/one",
    component: () => import("../view/one/index.vue"),
  },
  {
    name: "two",
    path: "/two",
    component: () => import("../view/two/index.vue"),
  },
  {
    name: "three",
    path: "/three",
    component: () => import("../view/three/index.vue"),
  },
  {
    name: "demo",
    path: "/demo",
    component: () => import("../view/demo/qs.vue"),
  },
];

export default routes;
