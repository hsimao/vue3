<template>
  <div>
    <h1>Lifecycle</h1>
  </div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured
} from "vue";
export default {
  name: "Lifecycle",
  setup() {
    onBeforeMount(() => console.log("onBeforeMount"));

    onMounted(() => console.log("onMounted"));

    onBeforeUpdate(() => console.log("onBeforeUpdate"));

    onUpdated(() => console.log("onUpdated"));

    onBeforeUnmount(() => console.log("onBeforeUnmount"));

    onUnmounted(() => console.log("onUnmounted"));

    onActivated(() => console.log("onActivated"));

    onDeactivated(() => console.log("onDeactivated"));

    onErrorCaptured(() => console.log("onErrorCaptured"));
  }
};
</script>

<style lang="scss" scoped></style>
