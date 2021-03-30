<template>
  <div class="app">
    <Header />
    <Counter />
    <DecrementButton />
    <IncrementButton />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/organisms/Header.vue";
import Counter from "@/components/Counter.vue";
import DecrementButton from "@/components/DecrementButton.vue";
import IncrementButton from "@/components/IncrementButton.vue";
export default defineComponent({
  components: {
    Header,
    Counter,
    DecrementButton,
    IncrementButton,
  },
});
</script>
