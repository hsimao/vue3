<template>
  <div>
    <h1>Reactive</h1>

    <h3>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</h3>
    <ul>
      <li v-for="(attend, index) in attending" :key="index">{{ attend }}</li>
    </ul>
    <button @click="capacityAdd()">Capacity Add</button>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "vue";

export default {
  name: "Reactive",
  setup() {
    const event = reactive({
      capacity: 4,
      attending: ["Mars", "Jack", "Sally"],
      spacesLeft: computed(() => {
        return event.capacity - event.attending.length;
      }),
      capacityAdd: () => event.capacity++
    });

    // 為了讓 template 不要使用 event.capacity 來顯示且又保持響應效果
    // 可使用 toRefs 方法, 可將每個屬性轉換成單一響應屬性
    // return { ...toRefs(event), capacityAdd };
    // 如果沒有要返回 capacityAdd 也可改寫如下, 或將 function 包在 event 物件內
    return toRefs(event);
  }
};
</script>
