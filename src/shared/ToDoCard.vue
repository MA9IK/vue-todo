<template>
  <div class="task">
    <div>
      {{ task.title }}

      <ButtonComponent
        class="remove-button"
        label="Remove"
        @click="emit('remove')"
      />
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "./ButtonComponent.vue";

// eslint-disable-next-line
const emit = defineEmits(["remove"]);
// eslint-disable-next-line
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.task {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task button {
  padding: 5px 10px;
}

.task .remove-button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.task::before {
  content: "◦";
  font-size: 24px;
  color: #cbd5e1;
  margin-right: 10px;
}
</style>
