<template>
  <div id="app">
    <div id="user-info">
      <button @click="toggleUserInfo">{{ showUserInfo ? 'hide' : 'show'}} User Details</button>
      <p v-if="showUserInfo">You're logged in!</p>
    </div>
    <ProductForm :createProduct="createProduct" />
    <Products :items="products" :remove="deleteProduct" />

  </div>
</template>

<script>
import ProductForm from "./components/ProductForm.vue";
import Products from "./components/Producets";

export default {
  name: "app",
  components: {
    ProductForm,
    Products
  },
  data() {
    return {
      products: [],
      showUserInfo: false
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
    },
    toggleUserInfo() {
      this.showUserInfo = !this.showUserInfo;
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
