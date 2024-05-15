<script setup>
import axios from 'axios'
import { reactive } from 'vue'
import useAuth from "@/composables/useAuth.js";
import Navigation from "@/components/Navigation.vue";

const { login: loginAction } = useAuth()

const form = reactive({
  email: 'alex@codecourse.com',
  password: 'password'
})

const login = async () => {
  loginAction(form)
}
</script>

<template>
  <Navigation />
  <main>
    <form v-on:submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" v-model="form.email">
        <p v-if="errors.email">{{ errors.email[0] }}</p>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="text" id="password" v-model="form.password">
        <p v-if="errors.password">{{ errors.password[0] }}</p>
      </div>
      <button type="submit">Log in</button>
    </form>
  </main>
</template>
