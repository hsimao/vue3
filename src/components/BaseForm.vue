<template>
  <div>
    <form novalidate @submit.prevent="onSubmit">
      <BaseInput ref="refName"
        v-model="name"
        label="Name"
        :validator="[minLength(3), required()]" />

      <BaseInput ref="refEmail"
        v-model="email"
        label="Email"
        :validator="[isEmail(), required()]" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { minLength, isEmail, required } from "@/utils/validators";
import BaseInput from "@/components/BaseInput";

export default {
  name: "BaseForm",
  components: {
    BaseInput
  },
  setup(props, { refs }) {
    const name = ref("");
    const email = ref("");

    const onSubmit = () => {
      if (
        !email.value ||
        !name.value ||
        refs.refName.hasError ||
        refs.refEmail.hasError
      ) {
      } else {
        console.log("onSubmit", {
          name: name.value,
          email: email.value
        });
      }
    };

    return {
      name,
      email,
      onSubmit,
      minLength,
      isEmail,
      required
    };
  }
};
</script>

<style lang="scss" scoped>
button {
  margin-top: 20px;
}
</style>