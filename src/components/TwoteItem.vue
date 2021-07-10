<template>
  <div class="twote-item__container">
    <h3>@{{ username }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TwoteItem",
  props: {
    username: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.twote-item__container {
  padding: 20px;
  box-shadow: 5px 5px 10px slategrey;
}
</style>
