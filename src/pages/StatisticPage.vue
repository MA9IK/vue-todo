<template>
  <ToDoContainer>
    <SectionHeader header="ToDo Statistic" />
    <StatisticBox />
  </ToDoContainer>
</template>

<script setup>
import ToDoContainer from "@/entities/todo/ui/ToDoContainer.vue";
import SectionHeader from "@/shared/SectionHeader";
import StatisticBox from "@/widgets/StatisticBox.vue";
</script>
