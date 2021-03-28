<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
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
