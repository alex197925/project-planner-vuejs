<!-- @format -->

<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";

export default {
  name: "HomeView",
  components: { SingleProject },

  data() {
    return {
      // Here all projects
      projects: [],
    };
  },

  // Fetching data from data/db.json and updating projects[]
  mounted() {
    fetch(" http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },

  methods: {
    // Deleting and updating locale.
    handleDelete(id) {
      this.projects = this.projects.filter((product) => {
        return product.id !== id;
      });
    },
  },
};
</script>
