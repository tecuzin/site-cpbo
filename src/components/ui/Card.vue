<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'elevated', 'outlined'].includes(value)
    },
    padding: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large', 'none'].includes(value)
    }
  },
  computed: {
    cardClasses() {
      return [
        'card',
        `card-${this.variant}`,
        `card-padding-${this.padding}`
      ]
    }
  }
}
</script>

<style scoped>
.card {
  background: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-elevated {
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.card-outlined {
  box-shadow: none;
  border: 2px solid #e9ecef;
}

.card-padding-small {
  padding: 1rem;
}

.card-padding-medium {
  padding: 2rem;
}

.card-padding-large {
  padding: 3rem;
}

.card-padding-none {
  padding: 0;
}
</style>
