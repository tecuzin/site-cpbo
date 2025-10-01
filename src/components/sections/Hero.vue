<template>
  <section class="hero">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
    <div v-if="showButton" class="hero-actions">
      <Button 
        v-if="primaryButton" 
        :variant="primaryButton.variant || 'secondary'"
        @click="handleButtonClick(primaryButton)"
      >
        {{ primaryButton.text }}
      </Button>
      <Button 
        v-if="secondaryButton" 
        variant="outline"
        @click="handleButtonClick(secondaryButton)"
      >
        {{ secondaryButton.text }}
      </Button>
    </div>
  </section>
</template>

<script>
import Button from '../ui/Button.vue'

export default {
  name: 'Hero',
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    primaryButton: {
      type: Object,
      default: null
    },
    secondaryButton: {
      type: Object,
      default: null
    }
  },
  emits: ['button-click'],
  computed: {
    showButton() {
      return this.primaryButton || this.secondaryButton
    }
  },
  methods: {
    handleButtonClick(button) {
      this.$emit('button-click', button)
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(44, 90, 160, 0.8), rgba(44, 90, 160, 0.8)), 
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23f8f9fa" width="1200" height="600"/><circle fill="%23e9ecef" cx="200" cy="150" r="80"/><circle fill="%23dee2e6" cx="800" cy="300" r="120"/><circle fill="%23e9ecef" cx="1000" cy="100" r="60"/></svg>');
  background-size: cover;
  background-position: center;
  color: var(--white);
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
