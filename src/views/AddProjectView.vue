<!-- @format -->

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input type="text" required v-model="title" />
      <label>Details:</label>
      <textarea required v-model="details"></textarea>
      <button>Add Project</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
    };
  },
  methods: {
    handleSubmit() {
      // Create new project object
      //   We don't have to add "id"
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      };
      //   console.log(project);
      // Sending json to the data base
      fetch("http://localhost:3000/projects", {
        // Use method POST
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Sending created project
        body: JSON.stringify(project),
      })
        .then(() => {
          // Redirect after submitting the form to the home page
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  outline: none;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  outline: none;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
