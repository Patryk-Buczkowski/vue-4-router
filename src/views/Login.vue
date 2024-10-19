<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
    // user Auth should be there using e.g. db
    window.user = username.value
    router.push({name: 'protected'})
}
</script>

<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>
            <label >Username
                <input class="input" v-model="username" type="text" name="username">
            </label>
            
            <label >Password
                <input class="input" v-model="password" type="text" name="password">
            </label>
            
            <button class="btn">Login</button>
        </form>

    </div>
</template>