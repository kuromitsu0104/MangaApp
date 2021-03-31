<template>
  <div class="Dashboard">
    <h1>Dashboard</h1>
    <p>{{ state.items }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import axios from "axios";

// const baseURL = process.env["VUE_APP_BACKEND_BASE_URL"];
const baseURL = "https://qiita.com/api/v2/items?query=tag";
const token = process.env["VUE_APP_QIITA_TOKEN"];
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default defineComponent({
  name: "Dashboard",
  setup() {
    const state = reactive({
      items: [],
    });
    onMounted(async () => {
      const res = await axios.get(baseURL, config);
      state.items = res.data;
    });
    // const createTodo = async () => {
    //   await axios.put(baseURL, { title: state.title });
    // };
    return { state };
  },
});
</script>
