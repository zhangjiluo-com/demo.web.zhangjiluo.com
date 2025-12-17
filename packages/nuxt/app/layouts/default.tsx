export default defineComponent(function (props, ctx) {
  return () => {
    return <div class="">{ctx.slots.default?.()}</div>;
  };
});
