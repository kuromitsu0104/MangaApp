<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  data() {
    return {
      msg: "Hello World.",
    };
  },
});
</script>
