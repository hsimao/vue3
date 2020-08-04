<template>
  <div class="attrsInput">
    <input
      v-bind="{
        ...$attrs,
        onInput: event => $emit('update:modelValue', event.target.value)
      }"
      :value="modelValue"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BaseInput",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>
