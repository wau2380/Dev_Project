import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/pages/main-page/main-page.vue"), // 동적 import
  },
  {
    path: "/Join",
    name: "Join",
    component: () => import("@/pages/join-page/join-page.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("@/pages/login-page/login-page.vue"),
  },
  {
    path: "/Company",
    name: "Company",
    component: () => import("@/pages/company-page/company-page.vue"),
  },
  {
    path: "/MyPage",
    name: "MyPage",
    component: () => import("@/pages/my-page/my-page.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
