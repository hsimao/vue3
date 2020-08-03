<template>
  <div>
    <SalutationName v-model:salutation="form.salutation" />

  </div>
</template>

<script>
import { reactive } from "vue";
import SalutationName from "@/components/SalutationName";

export default {
  name: "V-model",
  components: {
    SalutationName
  },
  setup() {
    const from = reactive({
      salutation: "",
      nanme: ""
    });

    return { form };
  }
};
</script>

<style lang="scss" scoped>
</style>