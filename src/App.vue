<template>
  <nav>
    <router-link to="/">
      <h2>Twotter</h2>
    </router-link>
    <h4 v-if="user">{{ user.username }}</h4>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { UserStore } from "./store";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore<UserStore>();
    const user = computed(() => store.state.user);
    return { user };
  },
});
</script>

<style>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>

<style scoped>
nav {
  display: flex;
  align-items: center;
  padding: 0.5rem 1.2rem;
  justify-content: space-between;
  background: linear-gradient(to left, aquamarine, cyan);
}

nav > h4 {
  color: cadetblue;
  background: rgba(256, 256, 256, 0.4);
}

nav > a {
  color: black;
  text-decoration: none;
}
</style>
