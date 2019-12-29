<template>
  <ul>
    <li v-for="prod of items" :key="prod.id" @click="removeProduct(prod.id)">
      <h2>{{ prod.title }}</h2>
      <h3>Price: ${{ prod.price.toFixed(2) }}</h3>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'products',
  props: {
    items: {
      type: Array,
      required: true,
    },
    remove: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const removeProduct = prodId => {
      props.remove(prodId)
    }

    return { removeProduct }
  },
}
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  list-style: none;
  padding: 30px;
  max-width: 600px;
  width: 100%;
  margin: 20px auto;
  border: solid 1px #2c3e50;

  li + li {
    border-top: solid 1px #2c3e50;
  }

  li {
    padding: 6px 30px;
    margin: 0;
    display: flex;
    align-items: center;

    h2 {
      padding-right: 15px;
      border-right: 2px #2c3e50 solid;
    }

    h3 {
      padding-left: 15px;
    }
  }
}
</style>
