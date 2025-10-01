<template>
  <div class="events">
    <div class="container">
      <h1>Événements et compétitions</h1>
      
      <section class="card">
        <h2>{{ cards.calendar.title }}</h2>
        <p>{{ cards.calendar.description }}</p>
      </section>

      <!-- Entraînements réguliers -->
      <section>
        <h2 style="color: var(--primary-color); margin-bottom: 2rem;">{{ cards.regularTrainings.title }}</h2>
        <div class="grid">
          <div v-for="training in cards.regularTrainings.cards" :key="training.title" class="card">
            <h3>{{ training.icon }} {{ training.title }}</h3>
            <p><strong>Horaire :</strong> {{ training.schedule }}</p>
            <p><strong>Lieu :</strong> {{ training.location }}</p>
            <p><strong>Niveau :</strong> {{ training.level }}</p>
            <p>{{ training.description }}</p>
          </div>
        </div>
      </section>

      <!-- Compétitions -->
      <section>
        <h2 style="color: var(--primary-color); margin-bottom: 2rem;">{{ cards.competitions.title }}</h2>
        <div class="grid">
          <div v-for="competition in cards.competitions.cards" :key="competition.title" class="event-card">
            <div class="event-date">
              <div>{{ competition.date.split(' ')[0] }}</div>
              <div>{{ competition.date.split(' ')[1] }}</div>
            </div>
            <div class="event-content">
              <h3 class="event-title">{{ competition.title }}</h3>
              <p class="event-location">📍 {{ competition.location }}</p>
              <p><strong>Distances :</strong> {{ competition.distances }}</p>
              <p><strong>Inscription :</strong> {{ competition.price }}</p>
              <p>{{ competition.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Événements spéciaux -->
      <section>
        <h2 style="color: var(--primary-color); margin-bottom: 2rem;">{{ cards.specialEvents.title }}</h2>
        <div class="grid">
          <div v-for="event in cards.specialEvents.cards" :key="event.title" class="card">
            <h3>{{ event.icon }} {{ event.title }}</h3>
            <p><strong>Date :</strong> {{ event.date }}</p>
            <p><strong>Lieu :</strong> {{ event.location }}</p>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </section>

      <!-- Résultats -->
      <section class="card">
        <h2>{{ cards.results.title }}</h2>
        <div class="grid">
          <div v-for="result in cards.results.cards" :key="result.title">
            <h3>{{ result.icon }} {{ result.title }}</h3>
            <p><strong>Meilleur temps :</strong> {{ result.bestTime }}</p>
            <p><strong>Participants :</strong> {{ result.participants }}</p>
            <p><strong>Moyenne :</strong> {{ result.average }}</p>
          </div>
        </div>
      </section>

      <!-- Inscription -->
      <section class="card" style="text-align: center; background: linear-gradient(135deg, var(--primary-color), #1e3a8a); color: white;">
        <h2>{{ cards.participation.title }}</h2>
        <p>{{ cards.participation.description }}</p>
        <div style="margin-top: 2rem;">
          <router-link to="/contact" class="btn" style="background: var(--secondary-color); color: white;">{{ cards.participation.buttonText }}</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import cardsData from '../data/cards.json'

export default {
  name: 'Events',
  setup() {
    const cards = cardsData.events
    return {
      cards
    }
  }
}
</script>
