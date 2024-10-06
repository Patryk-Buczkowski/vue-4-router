<script setup lang="ts">
interface Experience {
  image: string;
  name: string;
}

const props = defineProps<{
  experience: Experience;
}>();

</script>

<template>
  <div class="card">
    <img
      :src="`/vue-4-router/images/${props.experience.image}`"
      :alt="props.experience.name"
    />
    <span class="card__text">
      {{ props.experience.name }}
    </span>
  </div>
  
</template>
