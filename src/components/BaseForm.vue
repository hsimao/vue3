<template>
  <div>
    <form novalidate @submit.prevent="onSubmit">
      <BaseInput
        ref="refName"
        v-model="name"
        :error.sync="nameError"
        label="Name"
        :validator="[minLength(3), required()]"
      />

      <BaseInput
        ref="refEmail"
        v-model="email"
        :error.sync="emailError"
        label="Email"
        :validator="[isEmail(), required()]"
      />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { minLength, isEmail, required } from "@/utils/validators";
import BaseInput from "@/components/BaseInput";

export default {
  name: "BaseForm",
  components: {
    BaseInput
  },
  setup(props, { refs }) {
    const formData = reactive({
      name: "",
      email: "",
      nameError: false,
      emailError: false
    });

    const onSubmit = () => {
      if (
        !formData.name ||
        !formData.email ||
        formData.nameError ||
        formData.emailError
      ) {
      } else {
        console.log("onSubmit", formData);
      }
    };

    return { ...toRefs(formData), onSubmit, minLength, isEmail, required };
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 20px;
}
</style>
