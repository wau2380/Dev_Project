import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: () => import("@/pages/main-page/main-page.vue"), // 동적 import
  },
  {
    path: "/Join",
    name: "JoinPage",
    component: () => import("@/pages/join-page/join-page.vue"),
  },
  {
    path: "/Login",
    name: "LoginPage",
    component: () => import("@/pages/login-page/login-page.vue"),
  },
  {
    path: "/Company",
    name: "CompanyPage",
    component: () => import("@/pages/company-page/company-page.vue"),
  },
  {
    path: "/MyPage",
    name: "MyPagePage",
    component: () => import("@/pages/my-page/my-page.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
