<template>
  <div id="app">
    <header>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/form" class="link">Form</router-link>
      <router-link to="/demo" class="link">Demo</router-link>
      <router-link to="/reactive" class="link">Reactive</router-link>
      <router-link to="/lifecycle" class="link">Lifecycle</router-link>
      <router-link to="/watch" class="link">Watch</router-link>
      <router-link to="/api" class="link">API</router-link>
      <router-link to="/apiVuex" class="link">API Vuex</router-link>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
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

header {
  padding: 12px 20px;
  margin-bottom: 20px;
}

.link {
  padding: 12px;
  color: #2c3e50;
  text-decoration: none;
}

.link.router-link-exact-active {
  font-weight: bold;
}

button {
  padding: 12px 30px;
  background-color: #2c3e50;
  color: #fff;
  font-size: 20px;
  outline: none;
  cursor: pointer;
}

label {
  padding-right: 15px;
}

input {
  padding: 6px 10px;
  outline: none;
  font-size: 16px;
}
</style>
