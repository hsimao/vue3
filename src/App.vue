<template>
  <div id="app">
    <div id="user-info">
      <button @click="toggle">{{ show ? 'hide' : 'show'}} User Details</button>
      <p v-if="show">You're logged in!</p>
    </div>
    <ProductForm :createProduct="createProduct" />
    <Products :items="products" :remove="deleteProduct" />

  </div>
</template>

<script>
import ProductForm from "./components/ProductForm.vue";
import Products from "./components/Producets";
import { toggleMixin } from "./mixins/toggle";

export default {
  name: "app",
  components: {
    ProductForm,
    Products
  },
  mixins: [toggleMixin],
  data() {
    return {
      products: []
    };
  },
  methods: {
    createProduct(title, price) {
      const newProduct = {
        id: Math.random(),
        title: title,
        price
      };

      this.products.push(newProduct);
    },
    deleteProduct(productId) {
      this.products = this.products.filter(p => p.id !== productId);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  padding: 12px 30px;
  background-color: #2c3e50;
  color: #fff;
  font-size: 20px;
  outline: none;
  cursor: pointer;
}
</style>
