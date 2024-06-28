<template>
  <div class="create-task">
    <input
      type="text"
      v-model="title"
      placeholder="Enter task title"
      @input="emit('update:title', title)"
    />

    <ButtonComponent label="Save" @click="emit('save')" />
  </div>
</template>

<script setup>
import ButtonComponent from "./ButtonComponent.vue";

// eslint-disable-next-line
const emit = defineEmits(["remove", "save", "update:title"]);
</script>

<style scoped>
.create-task {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
}

input {
  flex: 1;
  padding: 5px;
  margin-right: 10px;
  outline: none;
  border: none;
}
</style>
