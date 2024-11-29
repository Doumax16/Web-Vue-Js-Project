<template>
  <div class="ContactPage">
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm">
      <input v-model="name" type="text" placeholder="Your Name" required />
      <input v-model="email" type="email" placeholder="Your Email" required />
      <textarea v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit" class="nav-button submit-btn">Send</button>
    </form>
    <button @click="goToDashboard" class="nav-button return-btn">Return to Dashboard</button>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      alert(`Message sent by ${this.name}`);
    },
    goToDashboard() {
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style scoped>
.ContactPage {
  background-image: url('@/assets/sandbox.gif'); /* Consistent background image */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 100vh;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

h2 {
  font-family: 'BlackChancery', cursive;
  color: #f4d03f;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input, textarea {
  margin: 10px;
  padding: 10px;
  width: 80%;
  max-width: 300px;
  font-family: 'BlackChancery', cursive;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 5px;
}

textarea {
  height: 150px;
}

.nav-button {
  background-color: transparent; /* Transparent background */
  border: none;
  color: white;
  font-family: 'BlackChancery', cursive;
  font-size: 1.2rem; /* Adjusted for better fit */
  text-align: center;
  padding: 12px 20px; /* Adjust padding for better fit */
  margin: 10px;
  cursor: pointer;
  display: inline-block;
  width: auto;
  height: 50px;
  background-size: cover;
  background-position: center;
  transition: background-color 0.3s, transform 0.3s;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
  transform: scale(1.1); /* Slight scale-up effect */
}

.submit-btn {
  background-image: url('@/assets/medievalbutton.png'); /* Button background for submit */
}

.return-btn {
  background-image: url('@/assets/medievalbutton.png'); /* Button background for return */
}
</style>
