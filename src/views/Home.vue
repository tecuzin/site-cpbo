<template>
  <div class="home">
    <!-- Hero Section -->
    <Hero 
      :title="cards.hero.title"
      :subtitle="cards.hero.subtitle"
      :primary-button="cards.hero.primaryButton"
      @button-click="handleHeroButtonClick"
    />

    <div class="container">
      <!-- À propos rapide -->
      <section class="card fade-in-up">
        <h2>{{ cards.welcome.title }}</h2>
        <p>{{ cards.welcome.description }}</p>
        <router-link to="/about" class="btn btn-primary">{{ cards.welcome.buttonText }}</router-link>
      </section>

      <!-- Activités -->
      <section>
        <h2 style="text-align: center; margin-bottom: 2rem; color: var(--primary-color);">{{ cards.activities.title }}</h2>
        <div class="grid">
          <div v-for="activity in cards.activities.cards" :key="activity.title" class="card activity-card">
            <div class="activity-icon">{{ activity.icon }}</div>
            <h3>{{ activity.title }}</h3>
            <p>{{ activity.description }}</p>
          </div>
        </div>
      </section>

      <!-- Prochains événements -->
      <section>
        <h2 style="text-align: center; margin-bottom: 2rem; color: var(--primary-color);">{{ cards.events.title }}</h2>
        <div class="grid">
          <EventCard
            v-for="event in cards.events.cards"
            :key="event.title"
            :title="event.title"
            :description="event.description"
            :location="event.location"
            :time="event.time"
            :date="event.date"
            :price="event.price"
            :tags="event.tags"
          />
        </div>
        <div style="text-align: center; margin-top: 2rem;">
          <router-link to="/events" class="btn">{{ cards.events.buttonText }}</router-link>
        </div>
      </section>

      <!-- Témoignages -->
      <section>
        <h2 style="text-align: center; margin-bottom: 2rem; color: var(--primary-color);">{{ cards.testimonials.title }}</h2>
        <div class="grid">
          <div v-for="testimonial in cards.testimonials.cards" :key="testimonial.author" class="card testimonial-card">
            <div class="testimonial-quote">"</div>
            <p>"{{ testimonial.quote }}"</p>
            <div class="testimonial-author">
              <strong>{{ testimonial.author }}</strong>
              <span class="testimonial-role">{{ testimonial.role }}</span>
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
import cardsData from '../data/cards.json'

export default {
  name: 'Home',
  components: {
    Hero,
    EventCard,
    ContactModal
  },
  setup() {
    const showContactModal = ref(false)
    const cards = cardsData.home

    const handleHeroButtonClick = (button) => {
      if (button.action === 'contact') {
        showContactModal.value = true
      }
    }

    return {
      showContactModal,
      handleHeroButtonClick,
      cards
    }
  }
}
</script>
