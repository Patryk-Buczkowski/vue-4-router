<script setup>
import { useRouter } from "vue-router";
import sourceData from "../data.json";
import { computed, ref, watchEffect } from "vue";
import { isNavigationFailure, NavigationFailureType } from "vue-router";

const router = useRouter();
const destinations = ref(sourceData.destinations);

const addDynamicRoute = () => {
  router.addRoute({
    name: 'dynamic',
    path: '/dynamic',
    component: () => import('../views/Login.vue')
  })
}

// const triggerRouterError = async () => {
//   const naviationErr = await router.push('/')

//   if (isNavigationFailure(naviationErr, NavigationFailureType.duplicated)) {
//     console.log('to', naviationErr.to);
//     console.log('from', naviationErr.from);
//   } else {
//     console.log('przeszło')
//   }
// };

</script>

<template>
  <div class="home">
    <h1>All destinations</h1>
    <button @click="addDynamicRoute">Add Dynamic Route</button>
    <RouterLink to="/dynamic">Visit Dynamic Route 😝</RouterLink>
    <div class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <h2 text->{{ destination.name }}</h2>
        <img
          :src="`/vue-4-router/images/${destination.image}`"
          :alt="destination.image"
        />
      </RouterLink>
    </div>
  </div>
</template>

<style lang="css">
.home img {
  max-width: 230px;
}
.home .destinations {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
