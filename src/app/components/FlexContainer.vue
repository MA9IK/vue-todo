<template>
  <div class="container">
    <SectionHeader header="To-Do App" />
    <div class="header-actions">
      <ButtonComponent label="Add Task" @click="handleShowNewTaskInput" />
    </div>
    <NewTaskForm v-if="showNewTaskInput" @add-task="handleAddNewTask" />
    <TaskList :tasks="tasks" @remove-task="handleRemoveTask" />
  </div>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import ButtonComponent from "./ButtonComponent.vue";
import { TaskList, NewTaskForm } from "@/features/todo/index.js";
import { ref } from "vue";

const tasks = ref([
  { id: 1, title: "Set a reminder beforehand" },
  { id: 2, title: "Find a location" },
  { id: 3, title: "Screenshot the address" },
  { id: 4, title: "Book the tickets" },
  { id: 5, title: "Find out the parking" },
  { id: 6, title: "Call them" },
]);
const showNewTaskInput = ref(false);

const handleShowNewTaskInput = () => {
  showNewTaskInput.value = true;
};

const handleAddNewTask = (title) => {
  tasks.value.push({ id: tasks.value.length + 1, title });
  showNewTaskInput.value = false;
  console.log(tasks);
};

const handleRemoveTask = (task) => {
  tasks.value = tasks.value.filter((t) => t.id !== task.id);
};
</script>

<style scoped>
.container {
  padding: 20px;
  max-height: 500px;
  overflow: hidden;
  scroll-behavior: smooth;
}

.header-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
