<template>
  <div class="form-container">
    <h3>LogIn</h3>
    <label for="email">Email</label>
    <input type="email" name="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <div class="container">
      <button @click="LogIn"  class="center">LogIn</button>
      <button @click='this.$router.push("/signup")' class="center">Signup</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data: function() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
}
</script>

<style scoped>
form {
  border-radius: 25px;
  border: 2px solid #2a2cc9;
  background-color: rgb(231, 231, 231);
}

label {
  padding: 12px 15px;
  margin: -1px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

input {
  width: 100%;
  padding: 12px 20px;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-sizing: border-box;
}

button {
  background-color: #2a2cc9;
  color: white;
  padding: 14px 20px;
  margin: 8px 0px 15px 0px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 30%;
}

p {
  width: 320px;
  padding: 0px 15px;
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
  padding: 15px 0px;
  display: inline-flex;
}
</style>
