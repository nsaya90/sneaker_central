import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenView from "../views/MenView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProfileView from "../views/ProfileView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/men",
    name: "menview",
    component: MenView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
