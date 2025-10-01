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
import { computed } from 'vue'
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
  setup(props, { emit }) {
    const showButton = computed(() => {
      return props.primaryButton || props.secondaryButton
    })

    const handleButtonClick = (button) => {
      emit('button-click', button)
    }

    return {
      showButton,
      handleButtonClick
    }
  }
}
</script>

<style scoped>
.hero {
  background: var(--gradient-hero), 
              url('/images/running-hero.jpg');
  background-size: cover;
  background-position: center;
  color: var(--white);
  text-align: center;
  padding: 6rem 2rem;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  position: relative;
  z-index: 2;
  background: linear-gradient(45deg, #ffffff, #f8fafc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  opacity: 0.95;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
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
