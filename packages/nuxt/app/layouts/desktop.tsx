export default defineComponent(function (props, ctx) {
  return () => {
    return (
      <div class="">
        <div class="">desktop</div>
        {ctx.slots.default?.()}
      </div>
    );
  };
});
