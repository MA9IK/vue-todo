<template>
  <h1>{{ header }}</h1>
</template>

<script setup>
// eslint-disable-next-line
const props = defineProps({
  header: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
