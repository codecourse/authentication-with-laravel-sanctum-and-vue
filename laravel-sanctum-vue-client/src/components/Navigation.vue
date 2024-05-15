<script setup>
import useAuth from "@/composables/useAuth.js";

const { authenticated, user, logout } = useAuth()
</script>

<template>
  <div v-if="authenticated">
    {{ user.name }} <button v-on:click="logout">Log out</button>
  </div>
</template>
