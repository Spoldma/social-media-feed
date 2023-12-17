<template>
  <body>
  <div class="container">
    <button @click="Logout" class="center">Logout</button>
  </div>
  <div class="post-container">
    <post v-for="post in posts" :href="'/api/apost/' + post.id" :post="post"></post>
  </div>
  <div class="delete-all">
    <button @click="deleteAll" class="center">Delete all</button>
  </div>
  <div class="add post">
    <button @click="goToAddPost" class="center">Add post</button>
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
    deleteAll()  {
      fetch('http://localhost:3000/api/posts', { method: 'DELETE',credentials: 'include',  })
          .then(() => this.status = 'Delete successful');
      window.location.reload();
    },
    goToAddPost() {
      this.$router.push('/addpost');
    },
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

<style scoped>
body {
  padding-top: 50px;
  padding-bottom: 50px;
}

button {
  background-color: #2a2cc9;
  color: white;
  padding: 14px 20px;
  margin: 50px 0 0;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 150px;
}

.post-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.delete-all {
  margin-bottom: 100px;
}
</style>