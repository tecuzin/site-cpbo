<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const buttonClasses = computed(() => [
      'btn',
      `btn-${props.variant}`,
      `btn-${props.size}`,
      { 'btn-disabled': props.disabled }
    ])

    const handleClick = (event) => {
      if (!props.disabled) {
        emit('click', event)
      }
    }

    return {
      buttonClasses,
      handleClick
    }
  }
}
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.btn-primary {
  background: var(--primary-color);
  color: var(--white);
}

.btn-primary:hover:not(.btn-disabled) {
  background: #1e3a8a;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.btn-secondary {
  background: var(--secondary-color);
  color: var(--white);
}

.btn-secondary:hover:not(.btn-disabled) {
  background: #e67e22;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.btn-outline {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-outline:hover:not(.btn-disabled) {
  background: var(--primary-color);
  color: var(--white);
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.btn-large {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}
</style>
