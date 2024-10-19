<script setup>
import sourceData from "../data.json";
import { computed, ref, watchEffect } from "vue";

const destinations = ref(sourceData.destinations)

</script>

<template>
  <div class="home">
    <h1>All destinations</h1>
    <div class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
      >
        <h2 text->{{ destination.name }}</h2>
        <img :src="`/vue-4-router/images/${destination.image}`" :alt="destination.image" />
      </RouterLink>
    </div>
  </div>
</template>
