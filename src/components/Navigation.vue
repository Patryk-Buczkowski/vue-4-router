<script setup>
import sourceData from "../data.json";
import { computed, ref, watchEffect } from "vue";

const destinations = ref(sourceData.destinations);
</script>

<template>
  <div id="nav">
    <RouterLink id="logo" class="logo" to="/">Travel App</RouterLink>
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
    >
      {{ destination.name }}
    </RouterLink>
  </div>
</template>

<style>
#nav .active-link {
  scale: 125%;
  color: blue;
  border-bottom: 2px solid navy;
}

#logo.active-link {
  text-decoration: none;
  color: rgb(42, 165, 124);
  border-bottom: none;
}
</style>
