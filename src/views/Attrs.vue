<template>
  <div>
    <AttrsInput
      type="email"
      class="emailInput"
      v-model="email"
      @blur="email = 'yoyo'"
    />
    {{ email }}
  </div>
</template>

<script>
import { ref } from "vue";
import AttrsInput from "@/components/AttrsInput";

export default {
  name: "Attrs",
  components: {
    AttrsInput
  },
  setup() {
    const email = ref("");
    return { email };
  }
};
</script>

<style scoped></style>
