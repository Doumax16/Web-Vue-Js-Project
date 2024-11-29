import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginPage.vue';
import Dashboard from '../components/DashboardView.vue';
import Profile from '../components/ProfilePage.vue';
import PortfolioShowcase from '../components/PortfolioShowcase.vue';
import Contact from '../components/ContactPage.vue';
import CreativePage from '../components/CreativePage.vue';

// Define routes for each page
const routes = [
  { path: '/', component: Login, name: 'Login' }, // Default route
  { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
  { path: '/profile', component: Profile, name: 'Profile' },
  { path: '/showcase', component: PortfolioShowcase, name: 'PortfolioShowcase' },
  { path: '/contact', component: Contact, name: 'Contact' },
  { path: '/creative', component: CreativePage, name: 'CreativePage' },
  { path: '/:catchAll(.*)', redirect: '/' }, // Fallback route
];

// Create the router with history mode
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
