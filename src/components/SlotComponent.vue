<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <div class="content">
      <slot name="content"></slot>
    </div>
    {{text}}
    <input type="text" v-model="text">

  </div>
</template>

<script>
export default {
  name: "SlotComponent",
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 150px;
  width: 100%;
  background-color: blue;
}

.content {
  margin-top: 20px;
  background-color: yellow;
}
</style>