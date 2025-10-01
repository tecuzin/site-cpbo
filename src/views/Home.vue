<template>
  <div class="home">
    <!-- Hero Section -->
    <Hero 
      title="CPBO - Course à Pied Beauvais Oise"
      subtitle="Rejoignez notre club de course à pied à Beauvais ! Entraînements, compétitions et convivialité vous attendent."
      :primary-button="{ text: 'Nous rejoindre', action: 'contact' }"
      @button-click="handleHeroButtonClick"
    />

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
          <div class="card activity-card">
            <div class="activity-icon">🏃‍♂️</div>
            <h3>Entraînements</h3>
            <p>Entraînements réguliers adaptés à tous les niveaux : débutants, intermédiaires et confirmés. Séances en groupe pour progresser ensemble.</p>
          </div>
          <div class="card activity-card">
            <div class="activity-icon">🏆</div>
            <h3>Compétitions</h3>
            <p>Participation aux courses locales et régionales. Accompagnement pour vos objectifs personnels et collectifs.</p>
          </div>
          <div class="card activity-card">
            <div class="activity-icon">🎯</div>
            <h3>Objectifs</h3>
            <p>5km, 10km, semi-marathon, marathon... Nous vous aidons à atteindre vos objectifs avec un suivi personnalisé.</p>
          </div>
        </div>
      </section>

      <!-- Prochains événements -->
      <section>
        <h2 style="text-align: center; margin-bottom: 2rem; color: var(--primary-color);">Prochains événements</h2>
        <div class="grid">
          <EventCard
            title="Entraînement découverte"
            description="Venez découvrir notre club lors d'une séance d'essai gratuite !"
            location="Stade de Beauvais"
            time="18h30"
            date="2024-10-15"
            :tags="['Débutant', 'Gratuit']"
          />
          <EventCard
            title="Course de Beauvais"
            description="Course populaire 5km et 10km ouverte à tous."
            location="Centre-ville de Beauvais"
            time="9h00"
            date="2024-10-22"
            price="15€"
            :tags="['Compétition', '5km', '10km']"
          />
          <EventCard
            title="Semi-marathon de l'Oise"
            description="Participation du club au semi-marathon régional."
            location="Compiègne"
            time="9h00"
            date="2024-11-05"
            price="25€"
            :tags="['Compétition', 'Semi-marathon']"
          />
        </div>
        <div style="text-align: center; margin-top: 2rem;">
          <router-link to="/events" class="btn">Voir tous les événements</router-link>
        </div>
      </section>

      <!-- Témoignages -->
      <section>
        <h2 style="text-align: center; margin-bottom: 2rem; color: var(--primary-color);">Témoignages</h2>
        <div class="grid">
          <div class="card testimonial-card">
            <div class="testimonial-quote">"</div>
            <p>"J'ai rejoint le CPBO il y a 2 ans en tant que débutante. L'ambiance est fantastique et j'ai progressé énormément !"</p>
            <div class="testimonial-author">
              <strong>Marie, 35 ans</strong>
              <span class="testimonial-role">Membre depuis 2022</span>
            </div>
          </div>
          <div class="card testimonial-card">
            <div class="testimonial-quote">"</div>
            <p>"Un club qui allie performance et convivialité. Les membres du bureau sont à l'écoute et les sorties sont toujours un plaisir."</p>
            <div class="testimonial-author">
              <strong>Pierre, 42 ans</strong>
              <span class="testimonial-role">Membre depuis 2021</span>
            </div>
          </div>
          <div class="card testimonial-card">
            <div class="testimonial-quote">"</div>
            <p>"Grâce au CPBO, j'ai couru mon premier marathon ! L'entraide entre membres est incroyable."</p>
            <div class="testimonial-author">
              <strong>Sophie, 28 ans</strong>
              <span class="testimonial-role">Membre depuis 2023</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <!-- Modal de contact -->
    <ContactModal 
      :is-open="showContactModal"
      @close="showContactModal = false"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import Hero from '../components/sections/Hero.vue'
import EventCard from '../components/sections/EventCard.vue'
import ContactModal from '../components/sections/ContactModal.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    EventCard,
    ContactModal
  },
  setup() {
    const showContactModal = ref(false)

    const handleHeroButtonClick = (button) => {
      if (button.action === 'contact') {
        showContactModal.value = true
      }
    }

    return {
      showContactModal,
      handleHeroButtonClick
    }
  }
}
</script>
