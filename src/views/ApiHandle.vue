<template>
  <div>
    <h1>API Handle</h1>
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
import { ref, watch } from "@vue/composition-api";
import { getResult } from "@/utils/api";
import usePromise from "@/cmp-functions/usePromise.js";

export default {
  name: "ApiHandle",
  setup() {
    const search = ref("");

    // 將 api 方法傳進 usePromise 內, 並解構出需使用的參數
    const { results, loading, error, createPromise } = usePromise(data =>
      getResult(data)
    );

    const handleSearch = () => {
      search.value && createPromise(search.value);
    };

    return { search, handleSearch, results, loading, error };
  }
};
</script>

<style lang="scss" scoped>
</style>