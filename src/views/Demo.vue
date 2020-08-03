<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="title" />
    <hr />

    <h3>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</h3>
    <ul>
      <li v-for="(attend, index) in attending" :key="index">{{ attend }}</li>
    </ul>
    <button @click="capacityAdd()">Capacity Add</button>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import useEventSpace from "@/cmp-functions/useEventSpace";

export default {
  name: "Demo",
  props: {
    test: {
      type: String,
      default: "hihi"
    }
  },
  data() {
    return {
      name: "Mars"
    };
  },
  setup(props, context) {
    console.log("context", context);
    console.log("context.parent", context.parent);
    console.log("context.slots", context.slots);
    console.log("context.attrs", context.attrs);
    console.log("context.root", context.root);
    console.log("context.emit", context.emit);
    console.log("context.refs", context.refs);

    const title = ref("Mars");

    // 監聽 props
    watch(() => {
      console.log("watch", props.test);
    });

    return { ...useEventSpace(), title };
  }
};
</script>

<style lang="scss" scoped></style>
