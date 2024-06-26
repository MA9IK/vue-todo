<template>
  <div class="tasks">
    <ToDoTask
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :isEditable="false"
      @remove="emit('remove-task', task)"
    />
  </div>
</template>

<script setup>
import ToDoTask from "./ToDoTask.vue";
// eslint-disable-next-line
const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});
// eslint-disable-next-line
const emit = defineEmits(["remove-task"]);
</script>

<style scoped>
.tasks {
  margin-top: 20px;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  background: #f9f9f9;
}
</style>
