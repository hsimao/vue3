<template>
  <div>
    <!-- 可直接在父層組件上監聽子層生命週期, 不用到子組件修改代碼 -->
    <SlotComponent
      @hook:beforeMount="loading = true"
      @hook:mounted="loading = false"
      @hook:beforeUpdate="loading = true"
      @hook:updated="loading = false">

      <!-- 具名插槽舊寫法 -->
      <!-- <template v-slot:header>header</template>
      <template v-slot:content>content</template> -->

      <!-- v2.6.0 以上的新寫法 -->
      <template #header>Header</template>
      <template #content>Content</template>

    </SlotComponent>

    <!-- 動態 attribute -->
    <input type="text" v-model="attributeName">
    <a :[attr]="attributeName">{{ attributeName }}</a>

  </div>
</template>

<script>
import SlotComponent from "@/components/SlotComponent";
import { ref, watch, onMounted, onUnmounted } from "@vue/composition-api";

export default {
  name: "Test",
  components: {
    SlotComponent
  },
  setup() {
    const attributeName = ref(
      "https://vuejs.org/v2/guide/components-slots.html"
    );
    const attr = ref("href");

    const loading = ref(false);

    watch(
      loading,
      (newVal, oldVal) => {
        console.log("loading newVal", newVal);
        console.log("loading oldVal", oldVal);
      },
      { lazy: true }
    );

    const print = text => {
      console.log(text);
    };

    return { attributeName, attr, loading, print };
  },
  methods: {
    // 可使用 $once 監聽生命週期 在 beforeDestroy 清除 timer
    // $once 在 vue3 內不可使用, 上方 setup 內也無法使用
    handleTimer() {
      let timer = null;
      timer = setInterval(() => {
        console.log("timer");
      }, 1000);
      this.$once("hook:beforeDestroy", () => clearInterval(timer));
    }
  },
  mounted() {
    this.handleTimer();
  }
};
</script>

<style lang="scss" scoped>
</style>