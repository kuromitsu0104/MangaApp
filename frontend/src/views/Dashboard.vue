<template>
  <div class="Dashboard">
    <h1>Dashboard</h1>
    <!-- <article
      v-for="(item, index) in state.items"
      :key="index"
      class="border w-2/4 mx-auto border-gray-400 rounded-lg md:p-4 bg-white sm:py-3 py-4 px-2 m-10"
    >
      <div>
        <div class="m-2">
          <div class="flex items-center">
            <div class="mr-2">
              <a>
                <img
                  class="rounded-full w-8"
                  :src="item.user.profile_image_url"
                  alt="profile image"
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <p>
                <a class="text text-gray-700 text-sm hover:text-black">{{
                  item.user.name
                }}</a>
              </p>
              <a class="text-xs text-gray-600 hover:text-black">
                <time :datetime="item.updated_at">{{ item.updated_at }}</time>
              </a>
            </div>
          </div>
        </div>
        <div class="pl-12 md:pl-10 xs:pl-10">
          <h2 class="text-2xl font-bold mb-2 hover:text-blue-600 leading-7">
            <a :href="item.url" id="post title">
              {{ item.title }}
            </a>
          </h2>
          <div class="mb-2">
            <a
              v-for="(tag, index) in item.tags"
              :key="index"
              class="text-sm text-gray-600 p-1 hover:text-black"
            >
              <span class="text-opacity-50">#</span>
              {{ tag.name }}
            </a>
          </div>
          <div class="mb-1 leading-6">
            {{ item.body.slice(0, 130) }}
          </div>
          <div class="flex justify-between items-center">
            <div class="flex">
              <a
                href="/hagnerd/setting-up-tailwind-with-create-react-app-4jd"
                class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
              >
                <svg
                  class="inline fill-current"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"
                  ></path>
                </svg>
                {{ item.likes_count
                }}<span class="hidden md:inline">&nbsp;LGTM</span>
              </a>
              <a
                href="/hagnerd/setting-up-tailwind-with-create-react-app-4jd#comments"
                class="py-1 pl-1 pr-2 text-gray-600 text-sm rounded hover:bg-gray-100 hover:text-black"
              >
                <svg
                  class="inline fill-current"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"
                  ></path>
                </svg>
                {{ item.comments_count
                }}<span class="hidden md:inline">&nbsp;comments</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import axios from "axios";

// const baseURL = process.env.VUE_APP_BACKEND_BASE_URL;
const baseURL =
  "https://qiita.com/api/v2/items?page=1&per_page=100&query=tag:Vue.js stocks:>5 title:2020";
const token = process.env.VUE_APP_QIITA_TOKEN;
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default defineComponent({
  name: "Dashboard",
  setup() {
    const state = reactive({
      items: {},
    });
    onMounted(async () => {
      const res = await axios.get(baseURL, config);
      state.items = res.data;
      console.log(res.data[0]);
    });
    // const createTodo = async () => {
    //   await axios.put(baseURL, { title: state.title });
    // };
    return { state };
  },
});
</script>
