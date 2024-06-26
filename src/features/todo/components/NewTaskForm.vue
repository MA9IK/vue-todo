<template>
  <div class="new-task">
    <ToDoTask
      :task="newTask"
      :isEditable="true"
      @update:title="updateTitle"
      @save="saveTask"
    />
  </div>
</template>

<script setup>
import ToDoTask from "./ToDoTask.vue";
import { ref } from "vue";
// eslint-disable-next-line
const emit = defineEmits(["add-task"]);
const newTask = ref({ id: null, title: "" });

const updateTitle = (newTitle) => {
  newTask.value.title = newTitle;
};

const saveTask = () => {
  if (newTask.value.title.trim() !== "") {
    emit("add-task", newTask.value.title);
    newTask.value.title = "";
  }
};
</script>

<style scoped>
.new-task {
  margin-bottom: 20px;
}
</style>
