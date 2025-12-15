<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import JsxComponent from "./components/JsxComponent.tsx";
import FunctionComponent from "./components/FunctionComponent.tsx";
import { ref } from "vue";
import TDesignComponent from "./components/TDesignComponent.vue";

const fcMsg = ref("Hello FunctionComponent");

function onClick(value: string) {
  fcMsg.value = value;
}
</script>

<template>
  <div>
    <img src="./assets/vue.svg" class="logo mx-auto" alt="Vue logo" />
  </div>
  <div class="">
    <div class="">JsxComponent:</div>
    <JsxComponent msg="Hello Jsx" />
  </div>
  <div class="">
    <div class="w-full h-14 flex items-center justify-center bg-red-500">
      FunctionComponent:
    </div>
    <FunctionComponent :msg="fcMsg" @clickMe="onClick" />
  </div>
  <HelloWorld msg="Vue" />
  <TDesignComponent />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
