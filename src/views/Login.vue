<template>
  <div>
    <main>
      <section class="login-page">
        <div class="form-container">
          <form>
            <h3>Login</h3>
            <div class="container">
              <div class="column">
                <label for="email">Email</label>
                <label for="password">Password</label>
              </div>
              <div class="column">
                <input type="email" placeholder="Email" name="email"  required v-model="email">
                <input type="password" placeholder="Password" name="password" required v-model="password">
              </div>
            </div><br>
            <button @click="LogIn"  class="center">Login</button>
            <button @click='this.$router.push("/signup")' class="center">Signup</button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Login",
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
        window.location.href = '/';
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
