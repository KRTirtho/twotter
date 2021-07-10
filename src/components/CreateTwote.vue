<template>
  <div>
    <div class="create-twote__container">
      <h1>@{{ username }}</h1>
      <sup v-show="isAdmin">admin</sup>
      <p>Followers: {{ followers }}</p>

      <form @submit.prevent="createTwote">
        <label for="twote-box"> Create New Twote </label>
        <textarea
          id="twote-box"
          name="twote-description"
          v-model="state.twoteDescription"
          rows="5"
          cols="40"
        />

        <label for="twote-select">Twote Type</label>
        <select name="twote-type" id="twote-select" v-model="state.twoteType">
          <option value="instant">Instant</option>
          <option value="draft">Draft</option>
        </select>

        <button type="submit">Twote!!!</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "CreateTwote",
  setup(_, ctx) {
    const state = reactive({
      twoteDescription: "",
      twoteType: "instant",
    });

    function createTwote() {
      if (state.twoteType === "instant" && state.twoteDescription) {
        ctx.emit("create-twote", state.twoteDescription);
        state.twoteDescription = "";
      }
    }
    return { state, createTwote };
  },
  props: {
    username: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    followers: {
      type: Number,
      required: true,
      default: 0,
    },
  },
});
</script>

<style scoped>
.create-twote__container {
  display: flex;
  flex-direction: column;
  padding: 1rem 1.2rem;
  border-radius: 5px;
  box-shadow: 3px 3px 10px slategrey;
}
.create-twote__container > form {
  display: flex;
  flex-direction: column;
}

.create-twote__container > :not(:first-child),
:not(:last-child) {
  margin-top: 5px;
  margin-bottom: 5px;
}

sup {
  background: gray;
  align-self: flex-start;
  border-radius: 3px;
  color: white;
  padding: 3px;
}
</style>
