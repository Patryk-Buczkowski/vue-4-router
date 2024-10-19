<script setup>
import { onBeforeRouteLeave } from 'vue-router';

onBeforeRouteLeave((to, from) => {
    const answer = window.confirm(
        'Are You sure to leave?'
    )

    if (!answer) return false
})

</script>

<template>
    <div>
        <h1 class="text-blue-700">invoices</h1>
    </div>
</template>