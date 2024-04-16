<template>
  <div>
    <ul v-for="article in allArticleList" :key="article.title">
      <single-article :article="article"></single-article>
    </ul>
  </div>
</template>

<script>
import Article from "./article.vue";

export default {
  inject: ["allArticleList"],
  components: {
    "single-article": Article,
  },
};
</script>
