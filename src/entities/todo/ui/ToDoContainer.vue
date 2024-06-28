<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  max-height: 500px;
  min-width: 500px;
  overflow: hidden;
  scroll-behavior: smooth;
}
</style>
