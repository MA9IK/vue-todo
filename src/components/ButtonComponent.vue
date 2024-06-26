<template>
  <button @click="$emit('click')">{{ label }}</button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
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
