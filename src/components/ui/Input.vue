<template>
  <div class="input-group">
    <label v-if="label" :for="inputId" class="input-label">
      {{ label }}
      <span v-if="required" class="required-asterisk">*</span>
    </label>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :class="inputClasses"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <span v-if="error" class="input-error">{{ error }}</span>
    <span v-if="hint" class="input-hint">{{ hint }}</span>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'Input',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  },
  emits: ['update:modelValue', 'blur', 'focus'],
  setup(props, { emit }) {
    const inputId = ref(`input-${Math.random().toString(36).substr(2, 9)}`)
    const isFocused = ref(false)

    const inputClasses = computed(() => [
      'input',
      `input--${props.size}`,
      {
        'input--error': props.error,
        'input--disabled': props.disabled,
        'input--focused': isFocused.value
      }
    ])

    const handleInput = (event) => {
      emit('update:modelValue', event.target.value)
    }

    const handleBlur = (event) => {
      isFocused.value = false
      emit('blur', event)
    }

    const handleFocus = (event) => {
      isFocused.value = true
      emit('focus', event)
    }

    return {
      inputId,
      inputClasses,
      handleInput,
      handleBlur,
      handleFocus
    }
  }
}
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  font-weight: 600;
  color: var(--primary-color);
  font-size: 0.9rem;
}

.required-asterisk {
  color: var(--accent-color);
  margin-left: 0.25rem;
}

.input {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  background: var(--white);
}

.input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.1);
}

.input--error {
  border-color: var(--accent-color);
}

.input--error:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

.input--disabled {
  background: #f8f9fa;
  color: #6c757d;
  cursor: not-allowed;
}

.input--small {
  padding: 0.5rem 0.8rem;
  font-size: 0.9rem;
}

.input--large {
  padding: 1rem;
  font-size: 1.1rem;
}

.input-error {
  color: var(--accent-color);
  font-size: 0.8rem;
  font-weight: 500;
}

.input-hint {
  color: #6c757d;
  font-size: 0.8rem;
}
</style>
