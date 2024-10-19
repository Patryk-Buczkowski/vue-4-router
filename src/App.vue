<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation />
  <div class="container flex min-w-[400px]">
    <RouterView
      class="view left-sidebar"
      name="LeftSidebar"
      v-slot="{ Component }"
    >
      <transition name="moveUp" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>

    <RouterView v-slot="{ Component }" class="main-view">
      <transition name="moveUp" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>
  </div>
</template>

<style lang="css">

.moveUp-enter-active {
  animation: fadeIn 0.8s ease-in;
}

.moveUp-leave-active {
  animation: fadeOut 0.8s ease-out;
}

.moveUp-enter {
  opacity: 1;
}

.moveUp-leave {
  opacity: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  0.5% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  0.5% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

.left-sidebar {
  width: 30%;
}

.main-view {
  width: 70%;
}
</style>
