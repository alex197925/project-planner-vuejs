<!-- @format -->

<template>
  <div class="home">
    <FilterNavView @filterChange="current = $event" :current="current" />

    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import FilterNavView from "@/components/FilterNavView.vue";

export default {
  name: "HomeView",
  components: { SingleProject, FilterNavView },

  data() {
    return {
      // Here all projects
      projects: [],
      // Tracking value of selected button
      current: "all",
    };
  },

  computed: {
    filteredProjects() {
      if (this.current === "completed") {
        return this.projects.filter((project) => project.complete);
      }
      if (this.current === "ongoing") {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects;
    },
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

    // Updating local data
    handleComplete(id) {
      let p = this.projects.find((project) => {
        return project.id === id;
      });
      p.complete = !p.complete;
    },
  },
};
</script>
