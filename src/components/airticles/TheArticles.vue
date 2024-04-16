<template>
  <div>
    <button
      :class="allArticleClass"
      mode="flat"
      @click="toggleMenu('all-article')"
    >
      All Articles
    </button>
    <button
      :class="addArticleClass"
      mode="flat"
      @click="toggleMenu('add-article')"
    >
      Add new Article
    </button>

    <div>
      <keep-alive>
        <component :is="selectedcomponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<style scoped>
.active {
  background: darkblue;
  color: white;
}
button {
  padding: 7px;
  border-radius: 7px;
  min-width: 100px;
  border: 1px solid lightgray;
  cursor: pointer;
}
</style>

<script>
import AddArticle from "./addArticle.vue";
import allArticleVue from "./allArticle.vue";

export default {
  components: {
    "all-article": allArticleVue,
    "add-article": AddArticle,
  },
  computed: {
    allArticleClass() {
      return { active: this.selectedcomponent === "all-article" };
    },
    addArticleClass() {
      return { active: this.selectedcomponent === "add-article" };
    },
  },
  data() {
    return {
      selectedcomponent: "all-article",
      articleList: [
        {
          title: "Article One",
          link: "http://google.com",
          desc: "kasshkdjahdkjaskdhjaksdhjhasdjhkasdhksd",
        },
        {
          title: "Article Two",
          link: "http://google.com",
          desc: "kasshkdjahdkjaskdhjaksdhjhasdjhkasdhksd",
        },
      ],
    };
  },
  methods: {
    toggleMenu(tab) {
      this.selectedcomponent = tab;
    },
    addnewArticle(form) {
      this.articleList.unshift(form);
      this.selectedcomponent = "all-article";
    },
    deleteArticleById(id) {
      const index = this.articleList.findIndex(
        (article) => article.title === id
      );
      if (index < 0) {
        return;
      }
      this.articleList.splice(index, 1);
    },
  },
  provide() {
    return {
      allArticleList: this.articleList,
      newArticle: this.addnewArticle,
      deleteArticle: this.deleteArticleById,
    };
  },
};
</script>
<style scoped>
button {
  margin-right: 10px;
}
</style>
