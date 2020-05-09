import { ref, computed } from "@vue/composition-api";

const state = ref({ post: {} });

function setPost(post) {
  state.value.post = post;
}

async function loadPost(id) {
  const post = await fetchPost(id);
  setPost(post);
}

const getPost = computed(() => state.value.post);

export { loadPost, getPost };
