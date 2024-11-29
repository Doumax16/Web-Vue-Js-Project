<template>
  <div class="creative-page">
    <h2>My Hobbies</h2>
    <ul>
      <li>Gaming</li>
      <li>Programming</li>
      <li>Reading</li>
      <li>Traveling</li>
    </ul>
    <button @click="goToDashboard" class="nav-button return-btn">Return to Dashboard</button>
  </div>
</template>

<script>
export default {
  name: 'CreativePage',
  methods: {
    goToDashboard() {
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style scoped>
.creative-page {
  background-image: url('@/assets/Lost.gif'); /* Background image */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 30px;
  text-align: center;
}

h2 {
  font-family: 'BlackChancery', cursive;
  color: #f4d03f;
  margin-bottom: 20px;
  font-size: 3rem;
}

ul {
  margin-top: 20px;
  list-style: none;
  padding: 0;
  font-family: 'BlackChancery', cursive;
  font-size: 1.5rem;
}

li {
  margin: 10px 0;
  color: #f4d03f; /* Apply similar color to the list items */
}

.nav-button {
  background-color: transparent; /* Transparent background */
  border: none;
  color: white;
  font-family: 'BlackChancery', cursive;
  font-size: 1.2rem; /* Adjust font size */
  text-align: center;
  padding: 12px 20px;
  margin: 20px 0;
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
  transform: scale(1.1); /* Slight zoom effect on hover */
}

.return-btn {
  background-image: url('@/assets/medievalbutton.png'); /* Button background */
}
</style>
