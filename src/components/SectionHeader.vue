<template>
  <h1>{{ header }}</h1>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
