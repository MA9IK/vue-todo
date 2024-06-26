<template>
  <button @click="emit('click')">{{ label }}</button>
</template>

<script setup>
// eslint-disable-next-line
const emit = defineEmits(["click"]);

// eslint-disable-next-line
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
