<template>
  <Card class="event-card">
    <div class="event-date">
      <div class="day">{{ day }}</div>
      <div class="month">{{ month }}</div>
    </div>
    <div class="event-content">
      <h3 class="event-title">{{ title }}</h3>
      <p v-if="location" class="event-location">📍 {{ location }}</p>
      <p v-if="time" class="event-time">🕒 {{ time }}</p>
      <p v-if="price" class="event-price">💰 {{ price }}</p>
      <p class="event-description">{{ description }}</p>
      <div v-if="tags && tags.length" class="event-tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from '../ui/Card.vue'

export default {
  name: 'EventCard',
  components: {
    Card
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    date: {
      type: [String, Date],
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    day() {
      if (!this.date) return ''
      const d = new Date(this.date)
      return d.getDate()
    },
    month() {
      if (!this.date) return ''
      const d = new Date(this.date)
      return d.toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase()
    }
  }
}
</script>

<style scoped>
.event-card {
  display: flex;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
}

.event-date {
  background: var(--primary-color);
  color: var(--white);
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.day {
  font-size: 1.5rem;
  line-height: 1;
}

.month {
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

.event-content {
  padding: 1.5rem;
  flex: 1;
}

.event-title {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.event-location,
.event-time,
.event-price {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.event-description {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.event-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: var(--secondary-color);
  color: var(--white);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .event-card {
    flex-direction: column;
  }
  
  .event-date {
    min-width: auto;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
