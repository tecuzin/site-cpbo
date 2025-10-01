<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <h1>CPBO - Course à Pied Beauvais Oise</h1>
      <p>Rejoignez notre club de course à pied à Beauvais ! Entraînements, compétitions et convivialité vous attendent.</p>
      <router-link to="/contact" class="btn">Nous rejoindre</router-link>
    </section>

    <div class="container">
      <!-- À propos rapide -->
      <section class="card fade-in-up">
        <h2>Bienvenue au CPBO</h2>
        <p>Le Club de Course à Pied de Beauvais Oise (CPBO) est une association sportive qui rassemble des coureurs de tous niveaux. Que vous soyez débutant ou expérimenté, nous vous accueillons dans une ambiance conviviale et bienveillante.</p>
        <router-link to="/about" class="btn btn-primary">En savoir plus</router-link>
      </section>

      <!-- Activités -->
      <section>
        <h2 style="text-align: center; margin-bottom: 2rem; color: var(--primary-color);">Nos activités</h2>
        <div class="grid">
          <div class="card">
            <h3>🏃‍♂️ Entraînements</h3>
            <p>Entraînements réguliers adaptés à tous les niveaux : débutants, intermédiaires et confirmés. Séances en groupe pour progresser ensemble.</p>
          </div>
          <div class="card">
            <h3>🏆 Compétitions</h3>
            <p>Participation aux courses locales et régionales. Accompagnement pour vos objectifs personnels et collectifs.</p>
          </div>
          <div class="card">
            <h3>🎯 Objectifs</h3>
            <p>5km, 10km, semi-marathon, marathon... Nous vous aidons à atteindre vos objectifs avec un suivi personnalisé.</p>
          </div>
        </div>
      </section>

      <!-- Prochains événements -->
      <section>
        <h2 style="text-align: center; margin-bottom: 2rem; color: var(--primary-color);">Prochains événements</h2>
        <div class="grid">
          <div class="event-card">
            <div class="event-date">
              <div>15</div>
              <div>OCT</div>
            </div>
            <div class="event-content">
              <h3 class="event-title">Entraînement découverte</h3>
              <p class="event-location">📍 Stade de Beauvais</p>
              <p>Venez découvrir notre club lors d'une séance d'essai gratuite !</p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-date">
              <div>22</div>
              <div>OCT</div>
            </div>
            <div class="event-content">
              <h3 class="event-title">Course de Beauvais</h3>
              <p class="event-location">📍 Centre-ville de Beauvais</p>
              <p>Course populaire 5km et 10km ouverte à tous.</p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-date">
              <div>05</div>
              <div>NOV</div>
            </div>
            <div class="event-content">
              <h3 class="event-title">Semi-marathon de l'Oise</h3>
              <p class="event-location">📍 Compiègne</p>
              <p>Participation du club au semi-marathon régional.</p>
            </div>
          </div>
        </div>
        <div style="text-align: center; margin-top: 2rem;">
          <router-link to="/events" class="btn">Voir tous les événements</router-link>
        </div>
      </section>

      <!-- Témoignages -->
      <section>
        <h2 style="text-align: center; margin-bottom: 2rem; color: var(--primary-color);">Témoignages</h2>
        <div class="grid">
          <div class="card">
            <p>"J'ai rejoint le CPBO il y a 2 ans en tant que débutante. L'ambiance est fantastique et j'ai progressé énormément !"</p>
            <strong>- Marie, 35 ans</strong>
          </div>
          <div class="card">
            <p>"Un club qui allie performance et convivialité. Les entraîneurs sont à l'écoute et les sorties sont toujours un plaisir."</p>
            <strong>- Pierre, 42 ans</strong>
          </div>
          <div class="card">
            <p>"Grâce au CPBO, j'ai couru mon premier marathon ! L'entraide entre membres est incroyable."</p>
            <strong>- Sophie, 28 ans</strong>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
