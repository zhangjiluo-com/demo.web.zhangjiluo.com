import { defineComponent, ref } from "vue";

export default defineComponent(
  (props) => {
    const count = ref(0);
    return () => {
      console.log("setup", props.msg);
      return (
        <div class="" onClick={() => count.value++}>
          {props.msg} {count.value}
        </div>
      );
    };
  },
  {
    props: {
      msg: String,
    },
  }
);
