<template>
  <div class="teleport">
    <teleport to="#end-of-body" :disabled="show">
      teleport 1
    </teleport>

    <teleport to="#end-of-body" :disabled="show2">
      teleport 2
    </teleport>

    <teleport to="#end-of-body" v-if="show3">
      teleport 3
    </teleport>

    <div>origin content</div>
    <button @click="show = !show">toggle Teleport 1</button>
    <button @click="show2 = !show2">toggle Teleport 2</button>
    <button @click="show3 = !show3">toggle Teleport 3</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Teleport",
  setup() {
    const show = ref(false);
    const show2 = ref(false);
    const show3 = ref(false);

    return { show, show2, show3 };
  }
};
</script>

<style lang="scss" scoped>
.teleport {
  // min-height: 100vh;
}
</style>
