<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import SourceData from "../data.json";
import { getData } from "../components/api.ts";
import ExperiencesCard from "../components/ExperiencesCard.vue";
import GoBack from "../components/GoBack.vue";


const route = useRoute();
const destination = ref(null);

const fetchData = async (slug) => {
  try {
    const res = await getData(slug);
    destination.value = res;
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
  () => route.params.slug,
  async (newSlug) => {
    if (newSlug) {
      fetchData(newSlug);
    }
  }
);
</script>

<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <GoBack />
    <div class="destination-details">
      <img
        :src="`/vue-4-router/images/${destination.image}`"
        :alt="destination.name"
      />
      <p>{{ destination.description }}</p>
    </div>
  </section>

  <section v-if="destination?.experiences.length" class="experiences">
    <h2>Top experiences in {{ destination.name }}</h2>
    <div class="cards">
      <RouterLink
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{name: 'experience.show', params: {experienceSlug: experience.slug}}"
      >
        <ExperiencesCard :experience="experience" />
      </RouterLink>
    </div>
    <RouterView />
  </section>
</template>
