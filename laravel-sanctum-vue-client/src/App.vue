<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <Navigation />
  <div class="py-6 lg:py-8">
    <div class="mx-auto max-w-7xl px-6 lg-px-8">
      <RouterView />
    </div>
  </div>
</template>
