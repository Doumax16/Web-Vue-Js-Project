<template>
  <div class="Dashboard">
    <h1>Dashboard</h1>
    <nav>
      <button @click="goToProfile" class="nav-button profile-button">Profile</button>
      <button @click="goToShowcase" class="nav-button showcase-button">Showcase</button>
      <button @click="goToContact" class="nav-button contact-button">Contact Me</button>
      <button @click="goToCreative" class="nav-button creative-button">Creative</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  methods: {
    goToProfile() {
      this.$router.push("/profile");
    },
    goToShowcase() {
      this.$router.push("/showcase");
    },
    goToContact() {
      this.$router.push("/contact");
    },
    goToCreative() {
      this.$router.push("/creative");
    }
  }
};
</script>

<style scoped>
.Dashboard {
  background-image: url("@/assets/souls.gif");
  background-size: cover; /* Ensures the background image covers the whole area */
  background-position: center bottom; /* Position the background so the bottom part is visible */
  background-repeat: no-repeat; /* Prevent the background from repeating */
  min-height: 100vh; /* Ensure the background covers the full height */
  padding: 20px;
  text-align: center;
}

h1 {
  font-family: 'BlackChancery', cursive;
  color: #f4d03f;
  font-size: 3rem;
}

nav {
  margin-top: 20px;
}

.nav-button {
  background-color: transparent; /* Ensures the background is transparent */
  border: none;
  color: white;
  font-family: 'BlackChancery', cursive;
  font-size: 1.5rem;
  text-align: center;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  display: inline-block;
  width: 200px; /* Adjust the width to your needs */
  height: 50px; /* Adjust the height to your needs */
  background-size: cover;
  background-position: center;
  transition: background-color 0.3s, transform 0.3s;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
  transform: scale(1.1); /* Slight scale up effect */
}

.profile-button {
  background-image: url('@/assets/medievalbutton.png'); /* Replace with your image path */
}

.showcase-button {
  background-image: url('@/assets/medievalbutton.png'); /* Replace with your image path */
}

.contact-button {
  background-image: url('@/assets/medievalbutton.png'); /* Replace with your image path */
}

.creative-button {
  background-image: url('@/assets/medievalbutton.png'); /* Replace with your image path */
}
</style>
