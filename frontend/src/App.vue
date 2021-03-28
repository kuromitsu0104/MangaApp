<template>
  <Header />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/organisms/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
});
</script>
