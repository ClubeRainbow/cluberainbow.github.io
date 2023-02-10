import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./pages/MainPage.vue"),
      name: "home",
    },
    {
      path: "/about",
      component: () => import("./pages/About.vue"),
      name: "about",
    },
    {
      path: "/info",
      component: () => import("./pages/Info.vue"),
      name: "info",
    },
    {
      path: "/support",
      component: () => import("./pages/Support.vue"),
      name: "support",
    },
    {
      path: "/associations",
      component: () => import("./pages/Associations.vue"),
      name: "associations",
    },
    {
      path: "/contacts",
      component: () => import("./pages/Contacts.vue"),
      name: "contacts",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});