<template>
  <div class="textarea-group">
    <label v-if="label" :for="textareaId" class="textarea-label">
      {{ label }}
      <span v-if="required" class="required-asterisk">*</span>
    </label>
    <textarea
      :id="textareaId"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :rows="rows"
      :class="textareaClasses"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <span v-if="error" class="textarea-error">{{ error }}</span>
    <span v-if="hint" class="textarea-hint">{{ hint }}</span>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'Textarea',
  props: {
    modelValue: {
      type: String,
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
    rows: {
      type: Number,
      default: 4
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  },
  emits: ['update:modelValue', 'blur', 'focus'],
  setup(props, { emit }) {
    const textareaId = ref(`textarea-${Math.random().toString(36).substr(2, 9)}`)
    const isFocused = ref(false)

    const textareaClasses = computed(() => [
      'textarea',
      `textarea--${props.size}`,
      {
        'textarea--error': props.error,
        'textarea--disabled': props.disabled,
        'textarea--focused': isFocused.value
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
      textareaId,
      textareaClasses,
      handleInput,
      handleBlur,
      handleFocus
    }
  }
}
</script>

<style scoped>
.textarea-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.textarea-label {
  font-weight: 600;
  color: var(--primary-color);
  font-size: 0.9rem;
}

.required-asterisk {
  color: var(--accent-color);
  margin-left: 0.25rem;
}

.textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  background: var(--white);
  resize: vertical;
  min-height: 100px;
}

.textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(44, 90, 160, 0.1);
}

.textarea--error {
  border-color: var(--accent-color);
}

.textarea--error:focus {
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

.textarea--disabled {
  background: #f8f9fa;
  color: #6c757d;
  cursor: not-allowed;
}

.textarea--small {
  padding: 0.5rem 0.8rem;
  font-size: 0.9rem;
  min-height: 80px;
}

.textarea--large {
  padding: 1rem;
  font-size: 1.1rem;
  min-height: 120px;
}

.textarea-error {
  color: var(--accent-color);
  font-size: 0.8rem;
  font-weight: 500;
}

.textarea-hint {
  color: #6c757d;
  font-size: 0.8rem;
}
</style>
