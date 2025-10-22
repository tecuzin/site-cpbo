<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="logo">
        <img src="/images/logo-cpbo.webp" alt="Logo CPBO" class="logo-image" />
        <span><a id="logo" href="/">CPBO</a></span>
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
