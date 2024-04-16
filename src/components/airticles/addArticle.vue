<template>
  <div>
    <dialog-box v-if="invalidForm">
      <template #header>
        <h3>Invalid form</h3>
      </template>
      <template #default>
        <p>please check the form and fill all the necessary fields</p>
        <p>check all your values</p>
      </template>
      <template #action>
        <botton
          @click="invalidForm = false"
          mode="flat"
          style="
            background-color: white;
            color: black;
            padding: 10px;
            cursor: pointer;
            margin-left: 200px;
          "
        >
          Okey
        </botton>
      </template>
    </dialog-box>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Add title"
          v-model="form.title"
        />
      </div>
      <div class="form-control">
        <label for="desc">Desc</label>
        <input
          type="text"
          id="desc"
          name="desc"
          placeholder="Add desc"
          v-model="form.desc"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input
          type="text"
          id="link"
          name="link"
          placeholder="Add link"
          v-model="form.link"
        />
      </div>

      <button style="margin-top: 10px">Submit</button>
    </form>
  </div>
</template>

<style scoped>
form {
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.form-control {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}
</style>

<script>
export default {
  inject: ["newArticle"],
  data() {
    return {
      invalidForm: false,
      form: {
        title: "",
        desc: "",
        link: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (
        this.form.link.trim() == "" ||
        this.form.title.trim() == "" ||
        this.form.desc.trim() == ""
      ) {
        this.invalidForm = true;
        return;
      }
      this.newArticle(JSON.parse(JSON.stringify(this.form)));
      this.form.desc = "";
      this.form.link = "";
      this.form.title = "";
    },
  },
};
</script>
