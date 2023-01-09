/** @format */

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddProjectView from "../views/AddProjectView.vue";
import EditProjectViewVue from "@/views/EditProjectView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "AddProject",
    component: AddProjectView,
  },
  {
    path: "/projects/:id",
    name: "EditProject",
    component: EditProjectViewVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
