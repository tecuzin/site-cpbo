<template>
  <div class="select-group">
    <label v-if="label" :for="selectId" class="select-label">
      {{ label }}
      <span v-if="required" class="required-asterisk">*</span>
    </label>
    <select
      :id="selectId"
      :value="modelValue"
      :required="required"
      :disabled="disabled"
      :class="selectClasses"
      @change="handleChange"
      @blur="handleBlur"
      @focus="handleFocus"
    >
      <option v-if="placeholder" value="" disabled>
        {{ placeholder }}
      </option>
      <option 
        v-for="option in options" 
        :key="option.value" 
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <span v-if="error" class="select-error">{{ error }}</span>
    <span v-if="hint" class="select-hint">{{ hint }}</span>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'Select',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
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
    options: {
      type: Array,
      required: true,
      validator: (options) => {
        return options.every(option => 
          typeof option === 'object' && 
          'value' in option && 
          'label' in option
        )
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  },
  emits: ['update:modelValue', 'blur', 'focus'],
  setup(props, { emit }) {
    const selectId = ref(`select-${Math.random().toString(36).substr(2, 9)}`)
    const isFocused = ref(false)

    const selectClasses = computed(() => [
      'select',
      `select--${props.size}`,
      {
        'select--error': props.error,
        'select--disabled': props.disabled,
        'select--focused': isFocused.value
      }
    ])

    const handleChange = (event) => {
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
      selectId,
      selectClasses,
      handleChange,
      handleBlur,
      handleFocus
    }
  }
}
</script>

<style scoped>
.select-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.select-label {
  font-weight: 600;
  color: var(--primary-color);
  font-size: 0.9rem;
}

.required-asterisk {
  color: var(--accent-color);
  margin-left: 0.25rem;
}

.select {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  background: var(--white);
  cursor: pointer;
}

.select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.1);
}

.select--error {
  border-color: var(--accent-color);
}

.select--error:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

.select--disabled {
  background: #f8f9fa;
  color: #6c757d;
  cursor: not-allowed;
}

.select--small {
  padding: 0.5rem 0.8rem;
  font-size: 0.9rem;
}

.select--large {
  padding: 1rem;
  font-size: 1.1rem;
}

.select-error {
  color: var(--accent-color);
  font-size: 0.8rem;
  font-weight: 500;
}

.select-hint {
  color: #6c757d;
  font-size: 0.8rem;
}
</style>
