<!-- @format -->

<template>
  <!-- Add conditional class -->
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="toggleText">{{ project.title }}</h3>
      <!-- Here will be all icons  -->
      <div class="icons">
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span class="material-icons"> edit </span></router-link
        >

        <span @click="deleteProject" class="material-icons"> delete </span>
        <span @click="toggleComplete" class="material-icons tick"> done </span>
      </div>
    </div>
    <div class="details">
      <p v-if="isShowing">{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      isShowing: false,
      url: "http://localhost:3000/projects/" + this.project.id,
    };
  },

  methods: {
    toggleText() {
      this.isShowing = !this.isShowing;
    },

    // Send delete request to the database with fetch
    deleteProject() {
      fetch(this.url, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err));
    },
    //Updating only property "complete" in db.json
    toggleComplete() {
      // Fetching base url
      fetch(this.url, {
        // Use method PATCH
        method: "PATCH",
        // Preparing to send data with this request, type of json
        headers: { "Content-Type": "application/json" },
        // Here we send data with json data
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => {
          this.$emit("complete", this.project.id);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}

.project.complete {
  border-left: 4px solid #0de36d;
}

.project.complete .tick {
  color: #0de36d;
}
</style>
