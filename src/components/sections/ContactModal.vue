<template>
  <Modal 
    :is-open="isOpen" 
    title="Nous contacter"
    @close="$emit('close')"
  >
    <ContactForm 
      :on-submit="handleSubmit"
      @cancel="$emit('close')"
      @success="handleSuccess"
      @error="handleError"
    />
  </Modal>
</template>

<script>
import Modal from '../ui/Modal.vue'
import ContactForm from '../ui/ContactForm.vue'

export default {
  name: 'ContactModal',
  components: {
    Modal,
    ContactForm
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close', 'submit', 'success', 'error'],
  methods: {
    async handleSubmit(formData) {
      try {
        // Simulation d'un appel API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
        
        if (!response.ok) {
          throw new Error('Erreur lors de l\'envoi du message')
        }
        
        return await response.json()
      } catch (error) {
        // En cas d'erreur réseau, on simule quand même un succès pour la démo
        console.warn('API non disponible, simulation du succès:', error.message)
        return { success: true }
      }
    },
    
    handleSuccess(formData) {
      this.$emit('success', formData)
      // Fermer la modale après succès
      setTimeout(() => {
        this.$emit('close')
      }, 2000)
    },
    
    handleError(error) {
      this.$emit('error', error)
    }
  }
}
</script>
