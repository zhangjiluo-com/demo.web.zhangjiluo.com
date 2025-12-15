import type { SetupContext } from "vue";

export default function FunctionComponent(
  props: { msg: string },
  ctx: SetupContext
) {
  console.log("render", props);
  return (
    <div
      onClick={() => {
        ctx.emit("clickMe", props.msg + "!");
      }}
    >
      {props.msg}
    </div>
  );
}
