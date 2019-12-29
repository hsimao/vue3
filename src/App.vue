<template>
  <div id="app">
    <div id="user-info">
      <button @click="toggleUserInfo">{{ showUserInfo ? 'hide' : 'show' }} User Details</button>
      <p v-if="showUserInfo">You're logged in!</p>
    </div>
    <ProductForm :createProduct="createProduct" />
    <Products :items="products" :remove="deleteProduct" />
  </div>
</template>

<script>
import ProductForm from './components/ProductForm.vue'
import Products from './components/Producets'
import { ref } from '@vue/composition-api'

export default {
  name: 'app',
  components: {
    ProductForm,
    Products,
  },
  setup() {
    // 宣告響應式變數：使用 ref
    const products = ref([])
    const showUserInfo = ref(false)

    // 宣告 function
    const createProduct = (title, price) => {
      const newProduct = {
        id: Math.random(),
        title,
        price,
      }
      products.value.push(newProduct)
    }

    const deleteProduct = productId => {
      products.value = products.value.filter(p => p.id !== productId)
    }

    const toggleUserInfo = () => {
      // 編輯響應式變數, 使用 ref 宣告的需要使用 .value
      showUserInfo.value = !showUserInfo.value
    }

    return { products, showUserInfo, createProduct, deleteProduct, toggleUserInfo }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
