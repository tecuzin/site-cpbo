<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <div class="form-group">
      <label for="name">Nom complet *</label>
      <input 
        type="text" 
        id="name" 
        v-model="form.name" 
        required
        placeholder="Votre nom et prénom"
        :class="{ 'error': errors.name }"
      >
      <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
    </div>
    
    <div class="form-group">
      <label for="email">Email *</label>
      <input 
        type="email" 
        id="email" 
        v-model="form.email" 
        required
        placeholder="votre@email.com"
        :class="{ 'error': errors.email }"
      >
      <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
    </div>
    
    <div class="form-group">
      <label for="phone">Téléphone</label>
      <input 
        type="tel" 
        id="phone" 
        v-model="form.phone"
        placeholder="06 XX XX XX XX"
        :class="{ 'error': errors.phone }"
      >
      <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
    </div>
    
    <div class="form-group">
      <label for="subject">Sujet *</label>
      <select 
        id="subject" 
        v-model="form.subject" 
        required
        :class="{ 'error': errors.subject }"
      >
        <option value="">Sélectionnez un sujet</option>
        <option value="inscription">Inscription au club</option>
        <option value="entrainement">Informations sur les entraînements</option>
        <option value="competition">Participation aux compétitions</option>
        <option value="autre">Autre</option>
      </select>
      <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
    </div>
    
    <div class="form-group">
      <label for="message">Message *</label>
      <textarea 
        id="message" 
        v-model="form.message" 
        required
        rows="5"
        placeholder="Votre message..."
        :class="{ 'error': errors.message }"
      ></textarea>
      <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
    </div>
    
    <div class="form-actions">
      <Button 
        type="button" 
        variant="outline" 
        @click="handleCancel"
        :disabled="isSubmitting"
      >
        Annuler
      </Button>
      <Button 
        type="submit" 
        variant="primary"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
      </Button>
    </div>
    
    <div v-if="submitStatus" class="submit-message" :class="submitStatus.type">
      {{ submitStatus.message }}
    </div>
  </form>
</template>

<script>
import { ref, reactive } from 'vue'
import Button from './Button.vue'

export default {
  name: 'ContactForm',
  components: {
    Button
  },
  props: {
    onSubmit: {
      type: Function,
      default: null
    }
  },
  emits: ['submit', 'cancel', 'success', 'error'],
  setup(props, { emit }) {
    const form = reactive({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    const errors = ref({})
    const isSubmitting = ref(false)
    const submitStatus = ref(null)

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
    
    const isValidPhone = (phone) => {
      const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
      return phoneRegex.test(phone.replace(/\s/g, ''))
    }

    const validateForm = () => {
      errors.value = {}
      
      if (!form.name.trim()) {
        errors.value.name = 'Le nom est requis'
      }
      
      if (!form.email.trim()) {
        errors.value.email = 'L\'email est requis'
      } else if (!isValidEmail(form.email)) {
        errors.value.email = 'L\'email n\'est pas valide'
      }
      
      if (form.phone && !isValidPhone(form.phone)) {
        errors.value.phone = 'Le numéro de téléphone n\'est pas valide'
      }
      
      if (!form.subject) {
        errors.value.subject = 'Le sujet est requis'
      }
      
      if (!form.message.trim()) {
        errors.value.message = 'Le message est requis'
      }
      
      return Object.keys(errors.value).length === 0
    }

    const simulateSubmit = () => {
      // Simulation d'un appel API
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simuler un échec aléatoire pour les tests
          if (Math.random() < 0.1) {
            reject(new Error('Erreur de connexion'))
          } else {
            resolve()
          }
        }, 2000)
      })
    }

    const resetForm = () => {
      Object.assign(form, {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      errors.value = {}
      submitStatus.value = null
    }
    
    const handleSubmit = async () => {
      if (!validateForm()) {
        return
      }
      
      isSubmitting.value = true
      submitStatus.value = null
      
      try {
        if (props.onSubmit) {
          await props.onSubmit(form)
        } else {
          // Simulation d'envoi par défaut
          await simulateSubmit()
        }
        
        submitStatus.value = {
          type: 'success',
          message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
        }
        
        emit('success', form)
        
        // Reset du formulaire après succès
        setTimeout(() => {
          resetForm()
        }, 2000)
        
      } catch (error) {
        submitStatus.value = {
          type: 'error',
          message: error.message || 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.'
        }
        
        emit('error', error)
      } finally {
        isSubmitting.value = false
      }
    }

    const handleCancel = () => {
      emit('cancel')
    }

    return {
      form,
      errors,
      isSubmitting,
      submitStatus,
      handleSubmit,
      handleCancel
    }
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 100%;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--primary-color);
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-group input.error,
.form-group textarea.error,
.form-group select.error {
  border-color: var(--accent-color);
}

.error-message {
  color: var(--accent-color);
  font-size: 0.9rem;
  margin-top: 0.25rem;
  display: block;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

@media (max-width: 768px) {
  .form-actions {
    flex-direction: column;
  }
}
</style>
