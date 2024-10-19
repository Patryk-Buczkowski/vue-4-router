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
    <div class="flex flex-col items-center">
        <h1 class="text-red-600">You are logged in {{ user }}</h1>
        <button class="w-fit mb-2" @click="logout">Logout</button>

        <RouterLink :to="{name: 'invoices'}">
            <button>Invoices</button>
        </RouterLink>
    </div>

</template>