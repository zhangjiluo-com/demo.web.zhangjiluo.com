import { NuxtLayout } from "#components";

export default defineComponent(function (props, ctx) {
  const { t } = useI18n();

  const route = useRoute();
  console.log(route.meta.layout);

  function onClick() {
    if (route.meta.layout !== "desktop") {
      setPageLayout("desktop");
    } else {
      setPageLayout("default");
    }
  }

  onMounted(() => {
    console.log("index onBeforeMount", route.meta.layout);
    // onClick();
  });
  return () => {
    return (
      <div>
        {t("xw")}
        <button onClick={onClick}>动态更改布局</button>
        <NuxtLayout name="desktop">
          <div class="">desktop</div>
        </NuxtLayout>
        <NuxtLayout>
          <div class="">default</div>
        </NuxtLayout>
      </div>
    );
  };
});
