<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="logo">
        🏃‍♂️ CPBO
      </router-link>
      <Navigation />
    </div>
  </header>
</template>

<script>
import Navigation from './layout/Navigation.vue'

export default {
  name: 'Header',
  components: {
    Navigation
  }
}
</script>
