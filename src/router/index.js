import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ResourcesPage from "../pages/ResourcesPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/resources", component: ResourcesPage },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});