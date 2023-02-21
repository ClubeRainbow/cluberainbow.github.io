import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/:catchAll(.*)*',  
      component: () => import("./pages/Error.vue"),
      name: 'error',
    },
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
      path: "/merch",
      component: () => import("./pages/Merch.vue"),
      name: "merch",
    },
    {
      path: "/resources",
      component: () => import("./pages/Resources.vue"),
      name: "resources",
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