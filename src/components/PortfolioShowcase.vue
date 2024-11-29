<template>
  <div class="portfolio-showcase">
    <h2>Portfolio Showcase</h2>
    <div class="projects">
      <!-- Loop through the projects array to display project cards -->
      <div class="project-card" v-for="(project, index) in projects" :key="index">
        <!-- Correcting image source binding -->
        <img :src="require(`@/assets/${project.image}`)" alt="Project Image" />
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
    <!-- Return to Dashboard button -->
    <button @click="goToDashboard" class="nav-button return-button">Return to Dashboard</button>
  </div>
</template>

<script>
export default {
  name: "PortfolioShowcase",
  data() {
    return {
      projects: [
        { title: "Project 1", description: "Qr code ticketing system for Philippine National Railway (PNR)", image: "project1.jpg" },
        { title: "Project 2", description: "Final Project in Emmerging technologies", image: "project2.jpg" },
      ],
    };
  },
  methods: {
    // Navigate back to the dashboard
    goToDashboard() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
/* Ensure the correct font is used */
@font-face {
  font-family: 'BlackChancery';
  src: url('@/assets/fonts/BlackChancery.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.portfolio-showcase {
  background-image: url('@/assets/medival.gif'); /* Your background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  text-align: center;
  padding: 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-family: 'BlackChancery', cursive;
  color: #f4d03f;
  margin-bottom: 30px;
  font-size: 3rem;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.project-card {
  background: rgba(0, 0, 0, 0.7); /* Dark background for better contrast */
  padding: 20px;
  border-radius: 10px;
  width: 250px; /* Set fixed width */
  height: auto;
  text-align: center;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: scale(1.05); /* Slight zoom on hover */
}

.project-card img {
  width: 100%;
  height: 150px; /* Set fixed height for images */
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
}

.project-card h3, .project-card p {
  font-family: 'BlackChancery', cursive;
  color: #f4d03f;
}

.nav-button {
  background-color: transparent;
  border: none;
  color: white;
  font-family: 'BlackChancery', cursive;
  font-size: 1.5rem;
  padding: 12px 24px;
  margin: 10px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: background-color 0.3s, transform 0.3s;
  width: 200px;
  height: 50px;
  background-size: cover;
  background-position: center;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
  transform: scale(1.1); /* Slight scale-up effect */
}

.return-button {
  background-image: url('@/assets/medievalbutton.png'); /* Background for the button */
  text-transform: uppercase;
}
</style>
