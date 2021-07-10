<template>
  <nav>
    <router-link to="/">
      <h2>Twotter</h2>
    </router-link>
    <h4>{{ user.username }}</h4>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      user: {
        username: "El Martinez",
      },
    });
    return { ...state };
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
