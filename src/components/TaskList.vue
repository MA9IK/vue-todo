<template>
  <div class="tasks">
    <ToDoTask
      v-for="task in tasks"
      :key="task.id"
      :title="task.title"
      @remove="removeTask(task)"
    />
  </div>
</template>

<script>
import ToDoTask from "./ToDoTask.vue";

export default {
  name: "TaskList",
  components: { ToDoTask },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeTask(task) {
      this.$emit("remove-task", task);
    },
  },
};
</script>

<style scoped>
.tasks {
  margin-top: 20px;
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
  border-radius: 4px;
  background: #f9f9f9;
}
</style>
