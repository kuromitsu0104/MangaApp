<template>
  <div class="app">
    <sidebar />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "@/components/organisms/Sidebar.vue";

export default defineComponent({
  components: {
    Sidebar,
  },
});
</script>
