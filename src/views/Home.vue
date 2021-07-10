<template>
  <div class="home">
    <ul>
      <li v-for="(user, i) in users" :key="user.id + i">
        <router-link :to="{ name: 'UserProfile', params: { id: user.id } }">{{
          user.username
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { users } from "../assets/users";

export default defineComponent({
  name: "Home",
  setup() {
    return { users };
  },
});
</script>

<style scoped>
.home {
  padding: 10px;
}
ul > li > a {
  color: slategrey;
  text-decoration: none;
}
</style>
