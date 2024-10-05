<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import SourceData from "../data.json";
import { getData } from '../components/api.ts'

const route = useRoute();
const destinationId = computed(() => route.params.id);
const destination = ref(null);

watch(() => route.params.slug, (newSlug) => {
  if (newSlug) {
    getData(newSlug).then((res) => destination.value = res);
  }
});

onMounted(() => {
  const slug = route.params.slug;
  getData(slug).then((res) => destination.value = res);

})

</script>

<template>
  <section v-if="destination" class="destination">
    <h2>{{ destination.name }}</h2>
    <p>{{console.log(destintion.image)}}</p>
    <div class="destination-details">
      <img :src="`/vue-4-router/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>
