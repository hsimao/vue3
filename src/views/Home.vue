<template>
  <div>
    <div id="user-info">
      <button @click="toggleUserInfo">
        {{ showUserInfo ? "hide" : "show" }} User Details
      </button>
      <p v-if="showUserInfo">You're logged in!</p>
    </div>
    <ProductForm :createProduct="createProduct" />
    <Products :items="products" :remove="deleteProduct" />
    滑鼠x: {{ mouseX }}<br />
    滑鼠y: {{ mouseY }}
    <router-view />
  </div>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
import Products from "@/components/Producets";
import { ref } from "vue";
import { useToggle } from "@/cmp-functions/toggle";
import { useMousePosition } from "@/cmp-functions/mousePosition";

export default {
  name: "app",
  components: {
    ProductForm,
    Products
  },
  setup() {
    // 使用 setup 管理變數與 function 的好處, 可以統一歸類擺放
    // 高複用的邏輯可非常容易看出, 並抽出封裝, 例如以下 useToggle

    // 宣告響應式變數：使用 ref
    const products = ref([]);

    // 宣告 function
    const createProduct = (title, price) => {
      const newProduct = {
        id: Math.random(),
        title,
        price
      };
      products.value.push(newProduct);
    };

    const deleteProduct = productId => {
      products.value = products.value.filter(p => p.id !== productId);
    };

    // 使用已經封裝好的 toggle, 並自訂變數名稱與方法名稱, 不會有原本 mixins 命名衝突的問題
    const { show: showUserInfo, toggle: toggleUserInfo } = useToggle();

    // 使用已經封裝好的 useMousePosition, 取得當前滑鼠座標
    const { x: mouseX, y: mouseY } = useMousePosition();

    return {
      products,
      showUserInfo,
      createProduct,
      deleteProduct,
      toggleUserInfo,
      mouseX,
      mouseY
    };
  }
};
</script>

<style lang="scss"></style>
