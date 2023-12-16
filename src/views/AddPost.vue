<template>
  <div class="form">
    <h3>Add a Post</h3>
    <label for="body">Body: </label>
    <input name="body" type="text" id="body" required v-model="post.body" />
    <button @click="addPost" class="addPost">Add Post</button>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        title: "",
        body: "",
        urllink: "",
      },
    };
  },
  methods: {
    addPost() {
      var data = {
        body: this.post.body
      };
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
};
</script>

<style>
.form {
  margin-top: 200px;
}
</style>