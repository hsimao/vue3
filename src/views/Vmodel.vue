<template>
  <div>
    <SalutationName
      v-model:salutation.capitalize="form.salutation"
      v-model:name.capitalize="form.name"
      v-model:desc.capitalize.reverse="form.desc"
      type="email"
      class="thicc"
    />

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
      name: "",
      desc: ""
    });

    return { form };
  }
};
</script>

<style lang="scss" scoped></style>
