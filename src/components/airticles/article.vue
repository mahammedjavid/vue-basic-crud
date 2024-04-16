<template>
  <div>
    <base-card>
      <section style="display: flex;justify-content: space-between;">
        <p style="margin: 10px 0;word-break: break-all;">{{ article.title }}</p>
        <button @click="deleteArticle(article.title)">delete</button>
  </section>
      <p style="margin: 10px 0;word-break: break-all;">{{ article.desc }}</p>
      <a :href="article.link" target="_blank">Learn more</a>
    </base-card>
  </div>
</template>

<script>
export default {
  props: ["article"],
  inject : ['deleteArticle']
};
</script>
