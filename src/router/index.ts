import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import UserProfile from "../views/UserProfile.vue";
import Admin from "../views/Admin.vue";
import store from "@/store";
import { users } from "@/assets/users";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:id",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const user = store.state.user;
  if (!user) {
    await store.dispatch("setUser", users[0]);
  }
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  if (requiresAdmin && !user?.isAdmin) next({ name: "Home" });
  else next();
});

export default router;
