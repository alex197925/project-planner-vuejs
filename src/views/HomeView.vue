<!-- @format -->

<template>
  <div class="home">Home</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},

  data() {
    return {
      projects: [],
    };
  },

  mounted() {
    fetch(" http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
