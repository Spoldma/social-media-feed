<template>
  <div>
    <main>
      <section class="addPost-page">
        <div class="form-container">
          <form>
            <h3>Add Post</h3>
            <div class="container">
              <div class="column">
                <label for="body">Body</label>
              </div>
              <div class="column">
                <input name="body" placeholder="body" type="text" id="body" required v-model="post.body" />
              </div>
            </div><br>
            <button @click="addPost" class="addPost">Add</button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        date: "",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      var data = {
        date: this.post.date,
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
            this.$router.push('/');
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
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
  padding: 12px 32px;
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
  margin: 8px 0 15px 0;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 30%;
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