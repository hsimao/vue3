<template>
  <div>
    <h1>API Handle Vuex</h1>
    <div>
      <label>Search for</label>
      <input type="text"
        v-model.trim="search"
        @keyup.enter="handleSearch"
        :disabled="loading">
    </div>
    <div>
      <p>Loading: {{ loading }}</p>
      <p>Error: {{ error }}</p>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ApiHandle",
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapGetters(["loading", "error", "results"])
  },
  methods: {
    handleSearch() {
      if (!this.search) return;

      this.$store.dispatch("apiActions", this.search);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>