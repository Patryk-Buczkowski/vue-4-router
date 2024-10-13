import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";
import Home from "../views/Home.vue";
import { getData } from "../components/api";
import { ref } from "vue";
import { useScrollStore } from "../stores/scrollStore";

const scrollPosition = ref(window.scrollY);

document.addEventListener("scroll", () => {
  scrollPosition.value = window.scrollY;
  console.log("Pozycja scrolla podczas przewijania:", scrollPosition.value);
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
  history: createWebHistory('/vue-4-router/'),
  routes,
  linkActiveClass: 'active-link',
  scrollBehavior(_to, _from, savedPosition) {
    const scrollStore = useScrollStore();
  
    document.addEventListener('scroll', () => {
      scrollStore.setScrollPosition(window.scrollY); 
      console.log('Zapisano pozycję scrolla:', scrollStore.scrollPosition);
    });
  
    if (savedPosition) {
      console.log('Zapisana pozycja:', savedPosition);
      return savedPosition;
    } else {
      return new Promise((resolve) => {
        console.log('Ustawiam scrollTop na:', 350); // Możesz użyć konkretnej liczby np. 350
        resolve({ top: 350 }); // Spróbuj z konkretną liczbą
      });
    }
  },
  
});

export default router;
