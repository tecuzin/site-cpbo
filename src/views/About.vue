<template>
  <div class="about">
    <div class="container">
      <h1>À propos du CPBO</h1>
      
      <section class="card">
        <h2>{{ cards.history.title }}</h2>
        <p>{{ cards.history.description }}</p>
        <p>{{ cards.history.additionalInfo }}</p>
      </section>

      <section class="card">
        <h2>{{ cards.values.title }}</h2>
        <div class="grid">
          <div v-for="value in cards.values.cards" :key="value.title">
            <h3>{{ value.icon }} {{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>{{ cards.bureau.title }}</h2>
        <div class="grid">
          <div v-for="member in cards.bureau.members" :key="member.name">
            <h3>{{ member.name }}</h3>
            <p><strong>{{ member.role }}</strong></p>
            <p>{{ member.description }}</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>{{ cards.facilities.title }}</h2>
        <div class="grid">
          <div v-for="facility in cards.facilities.cards" :key="facility.title">
            <h3>{{ facility.icon }} {{ facility.title }}</h3>
            <p>{{ facility.description }}</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>{{ cards.statistics.title }}</h2>
        <div class="grid">
          <div v-for="stat in cards.statistics.stats" :key="stat.label" style="text-align: center;">
            <h3 style="color: var(--primary-color); font-size: 2rem;">{{ stat.value }}</h3>
            <p>{{ stat.label }}</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>{{ cards.join.title }}</h2>
        <p>{{ cards.join.description }}</p>
        <ol style="margin: 1rem 0; padding-left: 2rem;">
          <li v-for="step in cards.join.steps" :key="step">{{ step }}</li>
        </ol>
        <div style="text-align: center; margin-top: 2rem;">
          <router-link to="/contact" class="btn btn-primary">{{ cards.join.buttonText }}</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import cardsData from '../data/cards.json'

export default {
  name: 'About',
  setup() {
    const cards = cardsData.about
    return {
      cards
    }
  }
}
</script>
