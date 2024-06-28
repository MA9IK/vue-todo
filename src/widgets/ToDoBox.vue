<template>
  <ToDoContainer>
    <SectionHeader header="To-Do App" />
    <HeaderActions>
      <ButtonComponent label="Add Task" @click="handleShowNewTaskInput" />
      <RouterLink to="/statistic">
        <ButtonComponent label="My Statistic" />
      </RouterLink>
    </HeaderActions>
    <ToDoCreationForm v-if="showNewTaskInput" @add-task="handleAddNewTask" />
    <TaskList :tasks="tasks" @remove-task="handleRemoveTask" />
  </ToDoContainer>
</template>

<script setup>
import SectionHeader from "@/shared/SectionHeader.vue";
import ButtonComponent from "@/shared/ButtonComponent.vue";
import ToDoCreationForm from "@/entities/todo/ui/ToDoCreationForm.vue";
import ToDoContainer from "@/entities/todo/ui/ToDoContainer.vue";
import TaskList from "@/entities/todo/ui/TaskList.vue";
import HeaderActions from "@/entities/todo/ui/HeaderActions.vue";
import { ref } from "vue";
import { handleRemove, handleAdd } from "@/features/index.js";
import { RouterLink } from "vue-router";
import { tasks } from "@/tasks";

const showNewTaskInput = ref(false);

const handleShowNewTaskInput = () => {
  showNewTaskInput.value = true;
};

const handleAddNewTask = (title) => {
  handleAdd(title, tasks);
  showNewTaskInput.value = false;
};

const handleRemoveTask = (task) => {
  handleRemove(task, tasks);
};
</script>
