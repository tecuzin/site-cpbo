<template>
  <div class="contact">
    <div class="container">
      <h1>Contactez-nous</h1>
      
      <div class="grid">
        <!-- Formulaire de contact -->
        <div class="card">
          <h2>Nous écrire</h2>
          <ContactForm 
            :on-submit="handleSubmit"
            @success="handleSuccess"
            @error="handleError"
          />
        </div>

        <!-- Informations de contact -->
        <div class="card">
          <h2>Informations de contact</h2>
          
          <div style="margin-bottom: 2rem;">
            <h3>📍 Adresse</h3>
            <p>
              CPBO - Course à Pied Beauvais Oise<br>
              Stade de Beauvais<br>
              60000 Beauvais<br>
              France
            </p>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3>📞 Téléphone</h3>
            <p>06 XX XX XX XX</p>
            <p><small>Disponible du lundi au vendredi de 18h à 20h</small></p>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3>📧 Email</h3>
            <p>contact@cpbo.fr</p>
            <p>president@cpbo.fr</p>
          </div>
          
          <div style="margin-bottom: 2rem;">
            <h3>🕒 Horaires d'ouverture</h3>
            <p>
              <strong>Bureau :</strong><br>
              Mardi : 18h30 - 20h00<br>
              Jeudi : 18h30 - 20h00<br>
              Dimanche : 9h00 - 11h00
            </p>
          </div>
          
          <div>
            <h3>🌐 Réseaux sociaux</h3>
            <p>
              📘 <a href="#" target="_blank">Facebook</a><br>
              📷 <a href="#" target="_blank">Instagram</a><br>
              🐦 <a href="#" target="_blank">Twitter</a>
            </p>
          </div>
        </div>
      </div>

      <!-- Plan d'accès -->
      <section class="card">
        <h2>Plan d'accès</h2>
        <div class="grid">
          <div>
            <h3>🚗 En voiture</h3>
            <p>
              Depuis Paris : A16 direction Amiens, sortie Beauvais Centre<br>
              Depuis Amiens : A16 direction Paris, sortie Beauvais Centre<br>
              Parking gratuit disponible au stade
            </p>
          </div>
          <div>
            <h3>🚌 En transport en commun</h3>
            <p>
              Bus ligne 1 : Arrêt "Stade"<br>
              Bus ligne 3 : Arrêt "Parc Marcel Dassault"<br>
              Gare SNCF : 15 minutes à pied
            </p>
          </div>
          <div>
            <h3>🚴‍♂️ À vélo</h3>
            <p>
              Piste cyclable depuis le centre-ville<br>
              Arceaux vélos disponibles au stade<br>
              Parcours sécurisé
            </p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="card">
        <h2>Questions fréquentes</h2>
        <div class="faq">
          <div class="faq-item">
            <h3>Comment s'inscrire au club ?</h3>
            <p>Il suffit de participer à une séance d'essai gratuite, puis de remplir le formulaire d'inscription. La cotisation annuelle est de 30€.</p>
          </div>
          <div class="faq-item">
            <h3>Quel niveau faut-il avoir ?</h3>
            <p>Aucun niveau minimum n'est requis ! Nous accueillons les débutants comme les coureurs expérimentés. Chacun progresse à son rythme.</p>
          </div>
          <div class="faq-item">
            <h3>Quel équipement faut-il ?</h3>
            <p>Une paire de chaussures de course adaptée suffit pour commencer. Nous vous conseillerons sur l'équipement selon vos objectifs.</p>
          </div>
          <div class="faq-item">
            <h3>Y a-t-il des entraînements pour les enfants ?</h3>
            <p>Oui, nous organisons des séances spéciales pour les jeunes de 8 à 16 ans le mercredi après-midi.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/ui/ContactForm.vue'

export default {
  name: 'Contact',
  components: {
    ContactForm
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
