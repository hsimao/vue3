<template>
  <div class="baseInput">
    <label>{{ label }}</label>
    <input type="text" v-model.trim="input" name="name">
    error: {{error}}
    <ul v-if="errors.length > 0" class="errors">
      <li class="error" v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
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
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { input, errors } = useInputValidator(
      props.value,
      props.validator,
      value => emit("input", value),
      value => emit("update:error", value)
    );

    return { input, errors };
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