<template>
  <div class="baseInput">
    <label>{{ label }}</label>
    <input type="text" v-model="input" name="name">
    <ul v-if="errors.length > 0" class="errors">
      <li class="error" v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
import { watch, ref } from "@vue/composition-api";
import useInputValidator from "@/cmp-functions/useInputValidator";

export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: ""
    },
    validator: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Number],
      default: ""
    }
  },
  setup(props, { emit }) {
    const hasError = ref(false);

    const { input, errors } = useInputValidator(
      props.value,
      props.validator,
      value => emit("input", value)
    );

    // 監聽 error
    watch(
      errors,
      value => {
        hasError.value = value.some(error => error !== null);
      }
      // { lazy: true }
    );

    return { input, errors, hasError };
  }
};
</script>

<style lang="scss" scoped>
.baseInput {
  margin: 10px 0;
}

.errors {
  list-style: none;
}
.error {
  color: red;
}
</style>