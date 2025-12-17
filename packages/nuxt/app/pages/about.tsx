export default defineComponent(function () {
  const { t } = useI18n();
  return () => {
    return <div>{t("gy")}</div>;
  };
});
