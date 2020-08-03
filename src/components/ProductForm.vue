<template>
  <form id="product-form" @submit="saveProduct">
    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="inputState.title" />
    </div>
    <div class="form-control">
      <label for="price">Price</label>
      <input
        type="number"
        min="0"
        id="price"
        step="0.01"
        v-model="inputState.price"
      />
    </div>
    <button type="submit" :disabled="!isValid">Save</button>
  </form>
</template>

<script>
import { ref, reactive, watch, computed } from "vue";

export default {
  name: "ProductForm",
  props: {
    createProduct: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    // 使用 reactive 宣告響應物件
    const inputState = reactive({
      title: "",
      price: ""
    });

    // 使用 ref 宣告響應布林值
    const submitted = ref(false);

    const saveProduct = event => {
      event.preventDefault();
      props.createProduct(inputState.title, priceAsNumber.value);
      submitted.value = true;
    };

    // computed
    // 需注意, 使用 computed 宣告出來的變數取值時需要使用 .value
    const priceAsNumber = computed(() => {
      return parseFloat(inputState.price);
    });

    const isValid = computed(() => {
      let isValid = true;

      if (inputState.title.trim().length === 0) {
        isValid = false;
      }

      if (isNaN(priceAsNumber.value) || priceAsNumber.value <= 0) {
        isValid = false;
      }
      return isValid;
    });

    // watch
    watch(() => {
      // 監聽 submitted
      if (submitted.value) {
        inputState.title = "";
        inputState.price = "";
        submitted.value = false;
      }
    });

    return { inputState, saveProduct, isValid };
  }
};
</script>

<style lang="scss" scoped>
#product-form {
  padding: 30px;
  border: solid 1px #2c3e50;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
}

.form-control {
  padding: 10px;
}

button {
  margin-top: 20px;
}
</style>
