<template>
  <div class="form-container">
    <h3>SignUp</h3>
    <label for="email">Email</label>
    <input type="email" name="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <div v-if="errMsg">{{errMsg}} </div>
    <button @click="SignUp" class="SignUp">SignUp</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data: function() {
    return {
      email: '',
      password: '',
      errMsg: '',
    }
  },
  watch: {
    password(value) {
      this.password = value;
      this.validatePassword(value);
    }
  },
  methods: {
    validatePassword(value) {
      if (value.length < 8 || value.length >= 16 || !/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
        this.errMsg = "Password must be at least 8 characters  and less than 16 characters, it must include a capital letter and at least one number"
      }else{
        this.errMsg = ''
      }
    },
    SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/signup", {
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
            this.$router.push("/");
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
  