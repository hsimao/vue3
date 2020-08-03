import { ref } from "vue";

// 封裝 toggle 功能
export const useToggle = () => {
  const show = ref(false);

  const toggle = () => {
    show.value = !show.value;
  };

  return { show, toggle };
};
