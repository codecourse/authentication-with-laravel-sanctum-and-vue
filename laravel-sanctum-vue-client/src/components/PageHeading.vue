<script setup>
defineProps({
  title: String
})
</script>

<template>
<header>
  <div class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
    {{ title }}
  </div>
</header>
</template>