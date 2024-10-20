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
  border-bottom: 2px solid greenyellow;
}


#logo.active-link {
  text-decoration: none;
  color: rgb(42, 165, 124);
  border-bottom: none;
}

#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 10px;
  background: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #4e6c71;
  z-index: 2;
}
#nav a {
  display: inline-block;
  margin-right: 20px;
  color: white;
  opacity: 0.7;
  transition: 0.2 ease color;
}

#nav a.external-link.logo {  
  color: greenyellow;
}

#nav a.internal-link {
  color: #ffa;
}
#nav a.router-link-active,
#nav a:hover {
  opacity: 1;
}
#logo {
  font-weight: bold;
  font-size: 1.5rem;
  opacity: 1 !important;
}
</style>
