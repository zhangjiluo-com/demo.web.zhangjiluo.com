<script setup lang="tsx">
// useState 的值是响应式的，跨组件，跨页面的
const count = useState("count", () => 0);
</script>
<template>
  <div>
    <h1>Hello, Nuxt!</h1>
    <p>Count: {{ count }}</p>
    <button @click="count++">Increment</button>
  </div>
</template>
