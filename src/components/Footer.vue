<template>
  <footer class="footer">
    <div class="footer-content">
      <div>
        <h3>CPBO</h3>
        <p>Course à Pied Beauvais Oise</p>
        <p>Club de course à pied basé à Beauvais</p>
      </div>
      <div>
        <h3>Liens utiles</h3>
        <ul style="list-style: none;">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">À propos</router-link></li>
          <li><router-link to="/events">Événements</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <p>📧 contact@cpbo.fr</p>
        <p>📱 06 XX XX XX XX</p>
        <p>📍 Beauvais, Oise</p>
      </div>
      <div>
        <h3>Suivez-nous</h3>
        <p>📘 Facebook</p>
        <p>📷 Instagram</p>
        <p>🐦 Twitter</p>
      </div>
    </div>
    <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.2);">
      <p>&copy; 2024 CPBO - Course à Pied Beauvais Oise. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
