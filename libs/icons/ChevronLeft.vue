<template>
  <svg :class="`bi bi-chevron-left `+ status" :width="width" :height="height" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M13.354 3.646a.5.5 0 010 .708L7.707 10l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  status: String,
  width: String,
  height: String
})
</script>

<style scoped>

</style>
