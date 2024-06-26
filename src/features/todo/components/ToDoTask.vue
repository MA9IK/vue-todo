<template>
  <div class="task">
    <div v-if="isEditable">
      <input
        type="text"
        v-model="titleInput"
        placeholder="Enter task title"
        @input="emit('update:title', titleInput)"
      />
      <button @click="emit('save')">Save</button>
    </div>
    <div v-else>
      {{ task.title }}
      <button class="remove-button" @click="removeTask">Remove</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// eslint-disable-next-line
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
  isEditable: {
    type: Boolean,
    default: false,
  },
});

// eslint-disable-next-line
const emit = defineEmits(["remove", "save", "update:title"]);

const titleInput = ref(props.task.title);
const removeTask = () => {
  emit("remove", props.task);
};
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

.task input {
  flex: 1;
  padding: 5px;
  margin-right: 10px;
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
