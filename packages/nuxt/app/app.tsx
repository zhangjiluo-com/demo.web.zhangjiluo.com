import { NuxtPage } from "#components";

export default defineComponent(function () {
  const { locale } = useI18n();

  useHead({
    htmlAttrs: { lang: locale },
  });
  return () => {
    return <NuxtPage />;
  };
});
