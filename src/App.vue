<template>
  <div id="app">
    <FlexContainer />
  </div>
</template>

<script>
import FlexContainer from "./components/FlexContainer.vue";
// import RemoveAllPopUp from "./components/popUp/RemoveAllPopUp.vue";

export default {
  name: "App",
  components: {
    FlexContainer,
    // RemoveAllPopUp,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
