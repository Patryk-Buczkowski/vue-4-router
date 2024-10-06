<script setup lang="ts">
interface Experience {
  description: string;
  image: string;
  name: string;
  slug: string;
}
const props = defineProps<{
  experience: Experience;
}>();
</script>

<template>
  <section>
    <h1>{{ props.experience.name }}</h1>
    <img
      :src="`/vue-4-router/images/${props.experience.image}`"
      :alt="experience.name"
    />
    <p>{{ props.experience.description }}</p>
  </section>
</template>
