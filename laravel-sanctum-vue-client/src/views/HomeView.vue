<script setup>
import axios from 'axios'
import { reactive } from 'vue'

const form = reactive({
  email: 'alex@codecourse.com',
  password: 'password'
})

const login = async () => {
  await axios.get('/sanctum/csrf-cookie')
  await axios.post('/login', form)

  axios.get('/api/user').then((response) => {
    console.log(response)
  })
}
</script>

<template>
  <main>
    <form v-on:submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" v-model="form.email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="text" id="password" v-model="form.password">
      </div>
      <button type="submit">Log in</button>
    </form>
  </main>
</template>
