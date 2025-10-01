<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="logo">
        🏃‍♂️ CPBO
      </router-link>
      <nav>
        <ul class="nav">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">À propos</router-link></li>
          <li><router-link to="/events">Événements</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
