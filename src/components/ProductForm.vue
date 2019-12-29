<template>
  <form id="product-form" @submit="saveProduct">
    <div class="form-control">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="titleInput">
    </div>
    <div class="form-control">
      <label for="price">Price</label>
      <input type="number" min="0" id="price" step="0.01" v-model="priceInput">
    </div>
    <button type="submit" :disabled="!isValid">Save</button>
  </form>
</template>

<script>
export default {
  name: "ProductForm",
  props: {
    createProduct: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      titleInput: "",
      priceInput: "",
      submitted: false
    };
  },
  computed: {
    price() {
      return parseFloat(this.priceInput);
    },
    isValid() {
      let isValid = true;

      if (this.titleInput.trim().length === 0) {
        isValid = false;
      }
      if (isNaN(this.price) || this.price <= 0) {
        isValid = false;
      }
      return isValid;
    }
  },
  watch: {
    submitted() {
      if (this.submitted) {
        this.titleInput = "";
        this.priceInput = "";
        this.submitted = false;
      }
    }
  },
  methods: {
    saveProduct(event) {
      event.preventDefault();
      this.createProduct(this.titleInput, this.price);
      this.submitted = true;
    }
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

  label {
    padding-right: 15px;
  }

  input {
    padding: 6px 10px;
    outline: none;
    font-size: 16px;
  }
}

button {
  margin-top: 20px;
}
</style>