<script setup>
import axios from "axios";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import SourceData from "../data.json";

const client = axios.create({
  baseURL: "https://travel-dummy-api.netlify.app/",
});

const route = useRoute();
const destinationId = computed(() => route.params.id);
const destination = ref(null);

const getData = async (place) => {
  try {
    const response = await client.get(`/${place}`);
    destination.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    destination.value = null; 
  }
};

watch(() => route.params.slug, (newSlug) => {
  if (newSlug) {
    getData(newSlug);
  }
});

</script>

<template>
  <section v-if="destination" class="destination">
    <h2>{{ destination.name }}</h2>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>
