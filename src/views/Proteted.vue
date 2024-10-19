<script setup lang="ts">
import { ref } from 'vue';
import router from '../router';

declare global {
    interface Window {
        user: string | null
    }
}


const user = ref(window.user || null)

const logout = () => {
    window.user = null
    router.push({name: 'Home'})
}

</script>

<template>
    <div>
        <h1 class="bg-red-600">You are loged in {{ user }}</h1>
        <button @click="logout">Logout</button>
    </div>

</template>