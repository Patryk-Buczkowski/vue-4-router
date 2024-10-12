<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation />
  <div class="container">
    <RouterView :key="$route.fullPath" v-slot="{ Component }">
      <transition name="moveUp" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>
  </div>
</template>

<style lang="css">
.moveUp-enter-active {
  animation: fandeIn 1s ease-in;
}

@keyframes fadeIn {
  0% {opacity: 0;}
  50% {opacity: 0.5;}
  100% {opacity: 1;}
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}

@keyframes moveUp {
  0% {transform: translateY(0);}
  100% {transform: translateY(-400px);}
}
</style>
