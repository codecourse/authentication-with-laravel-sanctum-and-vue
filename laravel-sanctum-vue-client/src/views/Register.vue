<script setup>
import {reactive, ref} from 'vue'
import useAuth from "@/composables/useAuth.js";
import router from "@/router/index.js";
import axios from 'axios'

const { login: loginAction, attempt } = useAuth()

const errors = ref({})
const form = reactive({
  name: 'Alex',
  email: 'alex@codecourse.com',
  password: 'password'
})

const register = () => {
  axios.post('/register', form).then(() => {
    attempt().then(() => {
      router.push({ name: 'dashboard' })
    })
  }).catch(e => {
    if (e.response.status === 422) {
      errors.value = e.response.data.errors
    }
  })
}
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" v-on:submit.prevent="register">
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div class="mt-2">
            <input id="name" name="email" type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="form.name">
          </div>
          <p v-if="errors.name" class="mt-2 text-sm text-red-600" id="email-error">{{ errors.name[0] }}</p>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="form.email">
          </div>
          <p v-if="errors.email" class="mt-2 text-sm text-red-600" id="email-error">{{ errors.email[0] }}</p>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="mt-2">
            <input id="password" name="password" type="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="form.password">
          </div>
          <p v-if="errors.password" class="mt-2 text-sm text-red-600" id="email-error">{{ errors.password[0] }}</p>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <RouterLink :to="{ name: 'login' }" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>