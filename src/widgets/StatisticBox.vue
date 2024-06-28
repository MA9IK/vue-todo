<template>
  <HeaderActions>
    <RouterLink to="/"><ButtonComponent label="Go Back" /></RouterLink>
  </HeaderActions>
  <p>Total task to do: {{ count }}</p>
</template>

<script setup>
import HeaderActions from "@/entities/todo/ui/HeaderActions.vue";
import ButtonComponent from "@/shared/ButtonComponent.vue";
import { RouterLink } from "vue-router";
import { tasks } from "@/tasks";
import { countItems } from "@/features/index.js";

const count = countItems(tasks._rawValue);
</script>

<style></style>
