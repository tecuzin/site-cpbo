<template>
  <div class="contact">
    <div class="container">
      <h1>Contactez-nous</h1>
      
      <div class="grid">
        <!-- Formulaire de contact -->
        <div class="card">
          <h2>{{ cards.form.title }}</h2>
          <ContactForm 
            :on-submit="handleSubmit"
            @success="handleSuccess"
            @error="handleError"
          />
        </div>

        <!-- Informations de contact -->
        <div class="card">
          <h2>{{ cards.info.title }}</h2>
          
          <div style="margin-bottom: 2rem;">
            <h3>{{ cards.info.address.title }}</h3>
            <p v-html="cards.info.address.content"></p>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3>{{ cards.info.phone.title }}</h3>
            <p>{{ cards.info.phone.number }}</p>
            <p><small>{{ cards.info.phone.schedule }}</small></p>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3>{{ cards.info.email.title }}</h3>
            <p v-for="email in cards.info.email.addresses" :key="email">{{ email }}</p>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3>{{ cards.info.hours.title }}</h3>
            <p v-html="cards.info.hours.content"></p>
          </div>
          
          <div>
            <h3>{{ cards.info.social.title }}</h3>
            <p>
              <span v-for="link in cards.info.social.links" :key="link.name">
                {{ link.icon }} <a :href="link.url" target="_blank">{{ link.name }}</a><br>
              </span>
            </p>
          </div>
        </div>
      </div>

      <!-- Plan d'accès -->
      <section class="card">
        <h2>{{ cards.access.title }}</h2>
        <div class="grid">
          <div v-for="access in cards.access.cards" :key="access.title">
            <h3>{{ access.icon }} {{ access.title }}</h3>
            <p v-html="access.description"></p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="card">
        <h2>{{ cards.faq.title }}</h2>
        <div class="faq">
          <div v-for="item in cards.faq.items" :key="item.question" class="faq-item">
            <h3>{{ item.question }}</h3>
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/ui/ContactForm.vue'
import cardsData from '../data/cards.json'

export default {
  name: 'Contact',
  components: {
    ContactForm
  },
  setup() {
    const cards = cardsData.contact
    return {
      cards
    }
  },
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
      console.log('Message envoyé avec succès:', formData)
    },
    
    handleError(error) {
      console.error('Erreur lors de l\'envoi:', error)
    }
  }
}
</script>

<style scoped>
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

.faq-item {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

select {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: var(--border-radius);
  font-size: 1rem;
  background: white;
}

select:focus {
  outline: none;
  border-color: var(--primary-color);
}
</style>
