<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import SourceData from "../data.json";
import { getData } from "../api.ts";
import ExperiencesCard from "../components/ExperiencesCard.vue";

const route = useRoute();
const destination = ref(null);
const experience = ref(null);

const fetchData = async (slug) => {
  const experienceSlug = route.params.experienceSlug;
  try {
    const res = await getData(slug);
    destination.value = res;
    experience.value = destination.value?.experiences?.find(
      (e) => e.slug === experienceSlug
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    destination.value = null;
  }
};

onMounted(() => {
  const slug = route.params.slug;
  fetchData(slug);
});

watch(
  () => route.params.experienceSlug,
  async (newSlug) => {
    if (newSlug) {
      experience.value = destination.value?.experiences?.find(
        (e) => e.slug === newSlug
      );
    }
  }
);
</script>

<template>
  <section v-if="destination">
    <h1 class="experiences">{{ experience.name }}</h1>
    <img
      class="picture"
      :src="`/vue-4-router/images/${experience.image}`"
      :alt="experience.name"
    />
    <p>{{ experience.description }}</p>
  </section>
</template>

<style>
.experiences + .picture {
  width: 350px;
  height: 300px;
}
</style>
