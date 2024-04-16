<script >
import TheArticles from "./components/airticles/TheArticles.vue";
import Theheader from "./components/layouts/Theheader.vue";

export default {
  components: {
    "TheArticle":TheArticles,
    "TheHeader":Theheader
  },
};
</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <TheArticle></TheArticle>
  </div>
</template>

<style>
</style>
