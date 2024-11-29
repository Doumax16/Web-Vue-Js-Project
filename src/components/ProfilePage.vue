<template>
  <div class="profile-page">
    <div class="profile">
      <img src="@/assets/profile.jpg" alt="Profile Picture" class="profile-image" />
      <h2>Zinitchi Nurieko Mora</h2>
      <p>Bio: A passionate web developer who loves creating interactive and user-friendly applications.</p>
      <p>4th Year BSCPE Student From Technological Institute of the Philippines</p>
      <p>Age: 21</p>
      <p>BirthDate: February 23, 2003</p>
      <div>
        <h3>Social Media Links</h3>
        <a href="https://linkedin.com/in/johndoe" target="_blank">LinkedIn</a> |
        <a href="https://github.com/johndoe" target="_blank">GitHub</a> |
        <a href="https://twitter.com/johndoe" target="_blank">Twitter</a>
      </div>
    </div>
    <button @click="goToDashboard" class="nav-button return-button">Return to Dashboard</button>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  methods: {
    goToDashboard() {
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style scoped>
.profile-page {
  background-image: url('@/assets/souls2.gif'); /* Reuse background image */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  text-align: center;
  padding: 50px;
  min-height: 100vh;
}

.profile img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
}

h2, p, h3 {
  font-family: 'BlackChancery', cursive;
  color: #f4d03f;
}

a {
  font-family: 'BlackChancery', cursive;
  color: #00bcd4;
  text-decoration: none;
  margin: 0 10px;
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
  width: auto; /* Let the width adjust automatically */
  height: 60px; /* Slightly increased height for better alignment */
  background-size: cover;
  background-position: center;
  transition: background-color 0.3s, transform 0.3s;
  vertical-align: middle; /* Center text vertically */
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
  transform: scale(1.1); /* Slight scale-up effect */
}

.return-button {
  background-image: url('@/assets/medievalbutton.png'); /* Background image for button */
  text-transform: uppercase; /* Make text uppercase for a better look with the button style */
}
</style>
