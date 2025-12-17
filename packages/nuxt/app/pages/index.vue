<script setup lang="tsx">
const { t } = useI18n();

const route = useRoute();

function onClick() {
  if (route.meta.layout !== "desktop") {
    setPageLayout("desktop");
  } else {
    setPageLayout("default");
  }
}
</script>
<template>
  <div class="">
    {{ t("xw") }}
    <button @click="onClick()">动态更改布局</button>
    <NuxtLayout>
      <div class="">default</div>
    </NuxtLayout>
    <Hello />
  </div>
</template>
