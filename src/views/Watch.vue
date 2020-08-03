<template>
  <div>
    <h1>Watch</h1>
    <label>Serach：</label>
    <input type="text" v-model="searchInput" />
    <br />
    <label>Age：</label>
    <input type="text" v-model="ageInput" />
    <br />
    <label>Job：</label>
    <input type="text" v-model="jobInput" />
    <br />
    <br />
    <label>First Name</label>
    <input type="text" v-model="firstName" />
    <br />
    <label>Last Name</label>
    <input type="text" v-model="lastName" />
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "Watch",
  setup() {
    const searchInput = ref("");
    const ageInput = ref(0);
    const jobInput = ref("");
    const firstName = ref("");
    const lastName = ref("");

    // 不指定監聽, 只要在函示內的其一數據發生變化，就會執行
    watch(() => {
      console.log("search: ", searchInput.value);
      console.log("Age: ", ageInput.value);
    });

    // 指定監聽
    watch(jobInput, (newVal, oldVal) => {
      console.log("jobInput newVal: ", newVal);
      console.log("jobInput oldVal: ", oldVal);
    });

    // 指定監聽多個, 使用陣列
    watch(
      [firstName, lastName],
      ([newFirst, newLast], [oldFirst, oldLast]) => {
        console.log("firstName Old： ", oldFirst);
        console.log("firstName New ", newFirst);
        console.log("LastName Old： ", oldLast);
        console.log("LastName New ", newLast);
      },
      { lazy: true } // 需設定第一次不執行，不然會報錯
    );

    return { searchInput, jobInput, ageInput, firstName, lastName };
  }
};
</script>

<style lang="scss" scoped></style>
