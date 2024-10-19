<script setup>
import sourceData from "../data.json";
import { computed, ref, watchEffect } from "vue";
import AppLink from "./AppLink.vue";

const destinations = ref(sourceData.destinations)

</script>

<template>
  <div id="nav">
    <AppLink id="logo" class="logo" to="/">Travel App</AppLink>
    <AppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
      >
        {{ destination.name }}
      </AppLink>
      <AppLink :to="{name: 'protected'}">DashBoard</AppLink>
      <AppLink to="https://www.youtube.com/">You Tube</AppLink>
  </div>
</template>

<style>
#nav .active-link {
  scale: 125%;
  color: #0000ff;
  border-bottom: 2px solid navy;
}


#logo.active-link {
  text-decoration: none;
  color: rgb(42, 165, 124);
  border-bottom: none;
}
</style>
