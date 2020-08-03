import Vuex from "vuex";
import { getResult } from "@/utils/api";

function usePromiseVuex(apiFn) {
  return async (commit, ...args) => {
    try {
      commit("setLoading", true);
      commit("setError", false);
      return await apiFn(...args);
    } catch (err) {
      commit("setError", true);
      return err;
    } finally {
      commit("setLoading", false);
    }
  };
}

export default Vuex.createStore({
  state: {
    loading: false,
    error: false,
    results: null
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setResults(state, payload) {
      state.results = payload;
    }
  },
  actions: {
    async apiActions({ commit }, payload) {
      const res = await usePromiseVuex(data => getResult(data))(
        commit,
        payload
      );
      commit("setResults", res);
    }
  },
  getters: {
    loading: state => state.loading,
    error: state => state.error,
    results: state => state.results
  },
  modules: {}
});
