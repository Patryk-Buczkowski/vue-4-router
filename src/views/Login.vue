<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const router = useRouter();

const login = () => {
  // user Auth should be there using e.g. db
  window.user = username.value;
  router.push({ name: "protected" });
};
</script>

<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label
        >Username
        <input class="input" v-model="username" type="text" name="username" />
      </label>

      <label
        >Password
        <input class="input" v-model="password" type="text" name="password" />
      </label>

      <button class="btn">Login</button>
    </form>
  </div>
</template>

<style lang="css">
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

.input {
  border: 1px solid gray;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.btn {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
}
</style>
