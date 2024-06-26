<template>
  <div class="new-task">
    <ToDoTask
      :isEditable="true"
      :title="newTaskTitle"
      @update:title="newTaskTitle = $event"
      @save="saveNewTask"
    />
  </div>
</template>

<script>
import ToDoTask from "./ToDoTask.vue";

export default {
  name: "NewTaskForm",
  components: { ToDoTask },
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    saveNewTask() {
      if (this.newTaskTitle.trim() !== "") {
        this.$emit("add-task", this.newTaskTitle);
        this.newTaskTitle = "";
      }
    },
  },
};
</script>

<style scoped>
.new-task {
  margin-bottom: 20px;
}
</style>
