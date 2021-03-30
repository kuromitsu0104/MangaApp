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
          <font-awesome-icon icon="check-circle" />
          <span class="text-sm capitalize">About</span>
        </router-link>
        <router-link
          to="/about"
          class="flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
        >
          <font-awesome-icon icon="check-circle" />
          <span class="text-sm capitalize">About</span>
        </router-link>
        <router-link
          to="/about"
          class="flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
        >
          <font-awesome-icon icon="check-circle" />
          <span class="text-sm capitalize">About</span>
        </router-link>
        <router-link
          to="/about"
          class="flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
        >
          <font-awesome-icon icon="check-circle" />
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
