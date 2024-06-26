<template>
  <div class="container">
    <SectionHeader header="To-Do App" />
    <div class="header-actions">
      <ButtonComponent label="Add Task" @click="showNewTaskInput = true" />
    </div>
    <NewTaskForm v-if="showNewTaskInput" @add-task="addNewTask" />
    <TaskList :tasks="tasks" @remove-task="removeTask" />
  </div>
</template>

<script>
import SectionHeader from "./SectionHeader.vue";
import ButtonComponent from "./ButtonComponent.vue";
import NewTaskForm from "./NewTaskForm.vue";
import TaskList from "./TaskList.vue";

export default {
  name: "FlexContainer",
  components: { SectionHeader, ButtonComponent, NewTaskForm, TaskList },
  data() {
    return {
      tasks: [
        { id: 1, title: "Set a reminder beforehand" },
        { id: 2, title: "Find a location" },
        { id: 3, title: "Screenshot the address" },
        { id: 4, title: "Book the tickets" },
        { id: 5, title: "Find out the parking" },
        { id: 6, title: "Call them" },
      ],
      showNewTaskInput: false,
    };
  },
  methods: {
    addNewTask(title) {
      const newTask = {
        id: this.tasks.length + 1,
        title,
      };
      this.tasks.push(newTask);
      this.showNewTaskInput = false;
    },
    removeTask(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.header-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
