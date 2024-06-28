<template>
  <div class="tasks">
    <ToDoCard
      v-for="task in tasks"
      @remove="emit('remove-task', task)"
      :key="task.id"
      :task="task"
    />
  </div>
</template>

<script setup>
import ToDoCard from "@/shared/ToDoCard.vue";
const { defineProps, defineEmits } = require("vue");

// eslint-disable-next-line
const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});

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
