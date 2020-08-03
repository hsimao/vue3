import { ref } from "vue";

export default function usePromise(fn) {
  const results = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const createPromise = async (...args) => {
    loading.value = true;
    error.value = null;
    results.value = null;

    try {
      const res = await fn(...args);
      results.value = res;
    } catch (err) {
      results.value = null;
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { results, loading, error, createPromise };
}
