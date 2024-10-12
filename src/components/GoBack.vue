<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const handleButton = () => {
    router.back()
}
</script>

<template>
    <span class="go-back">
        <button @click="handleButton">Go Back</button>
    </span>
</template>