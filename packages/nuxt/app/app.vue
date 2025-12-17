<script setup lang="tsx">
const { locale } = useI18n();

useHead({
  htmlAttrs: { lang: locale },
});
</script>
<template>
  <NuxtPage />
</template>
