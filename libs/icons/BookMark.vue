<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="width" fill="currentColor" :class="`bi ` + status" viewBox="0 0 24 24"><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"></path></svg>
</template>

<script setup lang="ts">
defineProps({
  status: {
    type: String,
    default: ''
  },
  width: String,
  height: String
})
</script>

<style scoped>

</style>