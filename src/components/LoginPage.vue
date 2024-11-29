<template>
  <div class="login">
    <h1>Login Traveler!!!</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit" class="nav-button login-btn">Start</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    handleLogin() {
      if (this.username === "mora" && this.password === "mora") {
        this.$router.push("/dashboard");
      } else {
        this.error = "Invalid credentials";
      }
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'BlackChancery';
  src: url('@/assets/fonts/BlackChancery.ttf') format('truetype');
}

.login {
  text-align: center;
  padding: 50px;
  background-image: url("@/assets/start.gif");
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  min-height: 100vh;
}

h1 {
  font-family: 'BlackChancery', cursive;
  font-size: 2.5rem;
  color: #f4d03f;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin: 10px;
  padding: 10px;
  width: 80%;
  max-width: 300px;
  font-family: 'BlackChancery', cursive;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 5px;
}

.login-btn {
  background-image: url("@/assets/medievalbutton.png");
  background-size: cover;
  background-position: center;
  color: white;
  font-family: 'BlackChancery', cursive;
  font-size: 18px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 70px;
  text-align: center;
}

.login-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
