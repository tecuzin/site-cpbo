<template>
  <div class="events">
    <div class="container">
      <h1>Événements et compétitions</h1>
      
      <section class="card">
        <h2>Calendrier des événements 2024</h2>
        <p>Découvrez tous nos événements, entraînements et compétitions pour cette année.</p>
      </section>

      <!-- Entraînements réguliers -->
      <section>
        <h2 style="color: var(--primary-color); margin-bottom: 2rem;">Entraînements réguliers</h2>
        <div class="grid">
          <div class="card">
            <h3>🏃‍♂️ Mardi - Entraînement débutants</h3>
            <p><strong>Horaire :</strong> 18h30 - 19h30</p>
            <p><strong>Lieu :</strong> Stade de Beauvais</p>
            <p><strong>Niveau :</strong> Débutants et intermédiaires</p>
            <p>Entraînement adapté aux coureurs débutants avec échauffement, exercices techniques et course en groupe.</p>
          </div>
          <div class="card">
            <h3>🏃‍♀️ Jeudi - Entraînement confirmés</h3>
            <p><strong>Horaire :</strong> 18h30 - 20h00</p>
            <p><strong>Lieu :</strong> Stade de Beauvais</p>
            <p><strong>Niveau :</strong> Confirmés</p>
            <p>Entraînement intensif avec fractionnés, côtes et travail de vitesse pour les coureurs expérimentés.</p>
          </div>
          <div class="card">
            <h3>🌲 Dimanche - Sortie longue</h3>
            <p><strong>Horaire :</strong> 9h00 - 11h00</p>
            <p><strong>Lieu :</strong> Parc Marcel Dassault</p>
            <p><strong>Niveau :</strong> Tous niveaux</p>
            <p>Sortie longue en nature pour préparer les compétitions et découvrir les environs de Beauvais.</p>
          </div>
        </div>
      </section>

      <!-- Compétitions -->
      <section>
        <h2 style="color: var(--primary-color); margin-bottom: 2rem;">Compétitions 2024</h2>
        <div class="grid">
          <div class="event-card">
            <div class="event-date">
              <div>15</div>
              <div>OCT</div>
            </div>
            <div class="event-content">
              <h3 class="event-title">Course de Beauvais</h3>
              <p class="event-location">📍 Centre-ville de Beauvais</p>
              <p><strong>Distances :</strong> 5km, 10km</p>
              <p><strong>Inscription :</strong> 15€</p>
              <p>Course populaire dans les rues de Beauvais avec départ et arrivée place de la mairie.</p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-date">
              <div>05</div>
              <div>NOV</div>
            </div>
            <div class="event-content">
              <h3 class="event-title">Semi-marathon de l'Oise</h3>
              <p class="event-location">📍 Compiègne</p>
              <p><strong>Distance :</strong> 21,1km</p>
              <p><strong>Inscription :</strong> 25€</p>
              <p>Compétition régionale sur un parcours vallonné à travers la forêt de Compiègne.</p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-date">
              <div>17</div>
              <div>NOV</div>
            </div>
            <div class="event-content">
              <h3 class="event-title">Trail de l'Aisne</h3>
              <p class="event-location">📍 Laon</p>
              <p><strong>Distances :</strong> 15km, 30km</p>
              <p><strong>Inscription :</strong> 20€ / 30€</p>
              <p>Trail nature avec dénivelé positif et passages techniques.</p>
            </div>
          </div>
          <div class="event-card">
            <div class="event-date">
              <div>08</div>
              <div>DÉC</div>
            </div>
            <div class="event-content">
              <h3 class="event-title">Cross de Noël</h3>
              <p class="event-location">📍 Parc Marcel Dassault</p>
              <p><strong>Distance :</strong> 5km</p>
              <p><strong>Inscription :</strong> 10€</p>
              <p>Course festive avec remise de prix et goûter de Noël après la course.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Événements spéciaux -->
      <section>
        <h2 style="color: var(--primary-color); margin-bottom: 2rem;">Événements spéciaux</h2>
        <div class="grid">
          <div class="card">
            <h3>🎉 Fête du club</h3>
            <p><strong>Date :</strong> 15 décembre 2024</p>
            <p><strong>Lieu :</strong> Salle des fêtes de Beauvais</p>
            <p>Réunion annuelle avec remise des prix, projection des photos de l'année et repas convivial.</p>
          </div>
          <div class="card">
            <h3>🏃‍♂️ Stage d'été</h3>
            <p><strong>Date :</strong> 20-22 juillet 2024</p>
            <p><strong>Lieu :</strong> Station de sports d'hiver (été)</p>
            <p>Stage de 3 jours avec entraînements en altitude, cours théoriques et activités de groupe.</p>
          </div>
          <div class="card">
            <h3>👨‍👩‍👧‍👦 Course familiale</h3>
            <p><strong>Date :</strong> 2 juin 2024</p>
            <p><strong>Lieu :</strong> Parc Marcel Dassault</p>
            <p>Course ouverte aux familles avec distances adaptées aux enfants (1km, 3km, 5km).</p>
          </div>
        </div>
      </section>

      <!-- Résultats -->
      <section class="card">
        <h2>Résultats récents</h2>
        <div class="grid">
          <div>
            <h3>🏆 Marathon de Paris 2024</h3>
            <p><strong>Meilleur temps :</strong> 3h15 (Pierre Durand)</p>
            <p><strong>Participants :</strong> 12 coureurs du club</p>
            <p><strong>Moyenne :</strong> 3h45</p>
          </div>
          <div>
            <h3>🥇 Semi-marathon de Lille</h3>
            <p><strong>1ère place :</strong> Marie Martin (1h28)</p>
            <p><strong>Participants :</strong> 8 coureurs du club</p>
            <p><strong>Podium :</strong> 3 coureurs du CPBO</p>
          </div>
          <div>
            <h3>🏃‍♂️ 10km de Beauvais</h3>
            <p><strong>Vainqueur :</strong> Jean Dupont (35min)</p>
            <p><strong>Participants :</strong> 25 coureurs du club</p>
            <p><strong>Classement :</strong> 1ère équipe</p>
          </div>
        </div>
      </section>

      <!-- Inscription -->
      <section class="card" style="text-align: center; background: linear-gradient(135deg, var(--primary-color), #1e3a8a); color: white;">
        <h2>Participez à nos événements !</h2>
        <p>Que vous soyez débutant ou expérimenté, il y a toujours un événement pour vous au CPBO.</p>
        <div style="margin-top: 2rem;">
          <router-link to="/contact" class="btn" style="background: var(--secondary-color); color: white;">Nous contacter</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events'
}
</script>
