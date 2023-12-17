<template>
  <div>
    <main>
      <section class="aPost-page">
        <div class="form-container">
          <form>
            <h3>A Post</h3>
            <div class="container">
              <div class="column">
                <label for="body">Body</label>
              </div>
              <div class="column">
                <input name="body" placeholder="body" type="text" id="body" required v-model="post.body" />
              </div>
            </div><br>
            <button @click="updatePost" class="updatePost">Update Post</button>
            <button @click="deletePost" class="deletePost">Delete Post</button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "APost",
  data() {
    return {
      post: {
        id: "",
        date: "",
        body: "",
      },
    };
  },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/api/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message));
    },
    updatePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
          .then((response) => {
            console.log(response.data);
            window.location.href = '/'
          })
          .catch((e) => {
            console.log(e);
          });
    },
    deletePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
          .then((response) => {
            console.log(response.data);
            window.location.href = '/'
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
  },
};
</script>

<style scoped>
form {
  border-radius: 25px;
  border: 2px solid #2a2cc9;
  background-color: rgb(231, 231, 231);
}

label {
  padding: 12px 30px;
  margin: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 6px 0;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-sizing: border-box;
}

button {
  background-color: #2a2cc9;
  color: white;
  padding: 14px 20px;
  margin: 8px 5px 15px 5px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 40%;
}

p {
  width: 320px;
  padding: 0 15px;
}

button:hover {
  opacity: 0.7;
}

.form-container {
  margin-top: 108px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.container {
  width: 350px;
  padding: 15px 0;
  display: inline-flex;
}
</style>