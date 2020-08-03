<template>
  <div>
    <SalutationName
      v-model:salutation="form.salutation"
      v-model:name="form.name" />

    <pre>{{ form }}</pre>
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
    const form = reactive({
      salutation: "",
      name: ""
    });

    return { form };
  }
};
</script>

<style lang="scss" scoped></style>
