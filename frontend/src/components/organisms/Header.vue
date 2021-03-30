<template>
  <div class="header">
    <header class="bg-teal-400">
      <nav class="flex justify-between w-full bg-green-500 text-white p-4">
        <router-link to="/" class="font-semibold text-xl tracking-tight"
          >MangaApp</router-link
        >
        <div class="md:items-center md:w-auto flex">
          <div class="md:flex hidden">
            <router-link to="/about" class="md:text-white mr-4"
              >About</router-link
            >
            <router-link to="/about" class="md:text-white mr-4"
              >link2</router-link
            >
            <router-link to="/about" class="md:text-white mr-4"
              >link3</router-link
            >
            <router-link to="/about" class="md:text-white mr-4"
              >link4</router-link
            >
          </div>
          <div class="flex text-sm">
            <a
              class="p-2 ml-2 bg-white text-blue-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100"
              href="/auth/signin"
              >Login</a
            >
            <a
              class="p-2 ml-2 bg-blue-500 text-gray-100 font-semibold leading-none border border-blue-600 rounded hover:border-transparent hover:bg-blue-600"
              href="/auth/signup"
              >Sign up</a
            >
          </div>
        </div>
      </nav>
    </header>
    <div class="bottomNav fixed bottom-0 w-full">
      <nav
        class="md:hidden fixed bottom-0 w-full border bg-white flex overflow-x-auto"
      >
        <router-link
          to="/about"
          class="flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
            <path
              d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
				2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
            ></path>
          </svg>
          <span class="text-sm capitalize">About</span>
        </router-link>
        <router-link
          to="/about"
          class="flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0
				0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07
				5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65
				5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0
				5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
          <span class="text-sm capitalize">About</span>
        </router-link>
        <router-link
          to="/about"
          class="flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bookmark"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span class="text-sm capitalize">About</span>
        </router-link>
        <router-link
          to="/about"
          class="flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bell"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span class="text-sm capitalize">About</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
});
</script>
