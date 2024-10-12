import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";
import Home from "../views/Home.vue";
import { getData } from "../components/api";

let scrollPosition: number;

document.addEventListener("scroll", () => {
  scrollPosition = window.scrollY;
  console.log("Pozycja scrolla podczas przewijania:", scrollPosition);
});

const checkUserAccess = async (id: string, slug: string) => {
  return await getData(slug).then((res) => (res.id == id ? true : false));
};

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("../views/DestinationShow.vue"),
    beforeEnter: async (
      to: RouteLocationNormalized,
      _from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const id = to.params.id as string;
      const slug = to.params.slug as string;

      if (await checkUserAccess(id, slug)) {
        next();
      } else {
        next({ name: "NotFound" });
      }
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("../views/ExperiencesShow.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/vue-4-router/"),
  routes,
  linkActiveClass: "active-link",
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({top: scrollPosition}), 301)
    })
  },
});

export default router;
