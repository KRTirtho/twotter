<template>
  <div class="twote-app">
    <CreateTwote
      :isAdmin="user.isAdmin"
      :username="user.username"
      :followers="0"
      @create-twote="createTwote"
    />
    <div class="twote-container">
      <TwoteItem
        v-for="(twote, i) in user.twotes"
        :username="user.username"
        :content="twote.content"
        :key="twote.id + i + twote.content"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { users } from "@/assets/users";
import { computed, defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";
import CreateTwote from "../components/CreateTwote.vue";
import TwoteItem from "../components/TwoteItem.vue";

export default defineComponent({
  setup() {
    const route = useRoute();
    const userId = computed<number>(() => parseInt(route.params.id as string));

    if (!userId.value) throw Error("no user id provided!");

    const state = reactive({
      user:
        (users.find((user) => user.id === userId.value) as typeof users[0] | undefined) ??
        users[0],
    });

    function createTwote(content: string) {
      state.user.twotes.unshift({
        id: state.user.twotes.length + 1,
        content,
      });
    }

    return { ...state, createTwote };
  },
  components: {
    CreateTwote,
    TwoteItem,
  },
});
</script>

<style scoped>
.twote-app,
.twote-container {
  display: flex;
  padding: 1.2rem;
}
.twote-container {
  flex-direction: column;
  width: 100%;
}
</style>
