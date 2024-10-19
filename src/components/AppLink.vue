<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
});

const isExternal = computed(() => typeof props.to === "string");
</script>

<template>
  <a v-if="isExternal" class="external-link" target="_blank" rel="noopener noreferrer" :href="to"
    ><slot
  /></a>
  <RouterLink class="internal-link" v-else :to="props.to"><slot /></RouterLink>
</template>
