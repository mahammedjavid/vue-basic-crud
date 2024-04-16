<template>
  <div>
    <article-setup></article-setup>
  </div>
</template>

<style scoped>
  div{
    min-width: 400px;
    width: 50%;
    margin: auto;
  }
</style>
<script>
import articleSetupVue from "./articleSetup.vue";

export default {
  components: {
    "article-setup": articleSetupVue,
  },
};
</script>
