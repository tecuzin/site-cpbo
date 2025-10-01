<template>
  <nav class="navigation">
    <ul class="nav-list">
      <li v-for="item in navItems" :key="item.path" class="nav-item">
        <router-link 
          :to="item.path" 
          class="nav-link"
          :class="{ 'nav-link--active': $route.path === item.path }"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Navigation',
  setup() {
    const route = useRoute()
    
    const navItems = computed(() => [
      { path: '/', label: 'Accueil' },
      { path: '/about', label: 'À propos' },
      { path: '/events', label: 'Événements' },
      { path: '/contact', label: 'Contact' }
    ])

    return {
      navItems
    }
  }
}
</script>

<style scoped>
.navigation {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0;
}

.nav-link {
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link:hover,
.nav-link--active {
  color: var(--secondary-color);
}

.nav-link--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--secondary-color);
}

@media (max-width: 768px) {
  .nav-list {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
