<template>
  <body>
  <div class="container">
    <button   @click="Logout" class="center">Logout</button>
  </div>
  <div class="post-container">
    <post v-for="post in posts" :key="post.id" :post="post"></post>
  </div>
  </body>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  components: {Post},
  data(){
    return {
      posts: [],
    }
  },
  methods: {
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
          .then((response) => response.json())
          .then((data) => (this.posts = data))
          .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  }
}
</script>

<style scoped>
body {
  padding-top: 50px;
  padding-bottom: 50px;
}
.post-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.reset-likes {
  position: sticky;
  bottom: 55px;
}
</style>