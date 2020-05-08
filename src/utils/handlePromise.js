// 在 vuex index 內調用的 api
export const handlePromise = apiFn => {
  return async (commit, params, showLoading = true) => {
    try {
      if (showLoading) commit("setLoading", true);
      commit("setError", false);

      return await apiFn(params);
    } catch (err) {
      commit("setError", true);

      return err;
    } finally {
      commit("setLoading", false);
    }
  };
};

// 在 vuex module 調用的 api
export const handlePromiseModule = apiFn => {
  return async (commit, params, showLoading = true) => {
    try {
      if (showLoading) commit("setLoading", true, { root: true });
      commit("setError", false, { root: true });

      return await apiFn(params);
    } catch (err) {
      commit("setError", true, { root: true });

      return err;
    } finally {
      commit("setLoading", false, { root: true });
    }
  };
};
