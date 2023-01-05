<!-- @format -->

<template>
  <div class="project">
    <div class="actions">
      <h3 @click="toggleText">{{ project.title }}</h3>
      <!-- Here will be all icons  -->
    </div>
    <div class="details">
      <p v-if="isHidden">{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: false,
    };
  },

  methods: {
    toggleText() {
      this.isHidden = !this.isHidden;
    },
  },

  props: ["project"],
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
</style>
