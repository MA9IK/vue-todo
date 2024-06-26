<template>
  <div class="task">
    <div v-if="isEditable">
      <input
        type="text"
        v-model="titleInput"
        placeholder="Enter task title"
        @input="$emit('update:title', titleInput)"
      />
      <button @click="$emit('save')">Save</button>
    </div>
    <div v-else>
      {{ title }}
      <button class="remove-button" @click="$emit('remove', title)">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoTask",
  props: {
    title: {
      type: String,
      default: "",
    },
    isEditable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      titleInput: this.title,
    };
  },
  watch: {
    title(newTitle) {
      this.titleInput = newTitle;
    },
  },
};
</script>

<style scoped>
.task {
  min-width: 300px;
  max-width: 300px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-wrap: break-word;
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
