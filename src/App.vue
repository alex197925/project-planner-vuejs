<!-- @format -->

<template>
  <NavbarView />
  <router-view />
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
export default {
  components: {
    NavbarView,
  },
};
</script>

<style>
body {
  background-color: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
