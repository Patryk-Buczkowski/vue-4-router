import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/destination/:id/:slug", name: "destination.show", component: () => import("../views/DestinationShow.vue")},
  { path: "/destination/:id/:slug/:experienceSlug", name: 'experience.show', component: () => import('../views/ExperiencesShow.vue')}
];

const router = createRouter({
  history: createWebHistory('/vue-4-router/'),
  routes,
  linkActiveClass: 'active-link'
});

export default router;
