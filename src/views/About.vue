<template>
  <div class="about">
    <div class="container">
      <h1>À propos du CPBO</h1>
      
      <section class="card">
        <h2>Notre histoire</h2>
        <p>Le Club de Course à Pied de Beauvais Oise (CPBO) a été créé en 2010 par un groupe de passionnés de course à pied souhaitant partager leur passion dans une ambiance conviviale. Depuis, notre club n'a cessé de grandir et compte aujourd'hui plus de 150 membres de tous âges et de tous niveaux.</p>
        <p>Basé à Beauvais, nous organisons des entraînements réguliers et participons activement à la vie sportive de la région des Hauts-de-France.</p>
      </section>

      <section class="card">
        <h2>Nos valeurs</h2>
        <div class="grid">
          <div>
            <h3>🤝 Convivialité</h3>
            <p>Un esprit d'équipe et d'entraide qui fait la force de notre club.</p>
          </div>
          <div>
            <h3>📈 Progression</h3>
            <p>Accompagnement personnalisé pour atteindre vos objectifs.</p>
          </div>
          <div>
            <h3>🏃‍♂️ Passion</h3>
            <p>Partage de notre passion pour la course à pied.</p>
          </div>
          <div>
            <h3>🌱 Accessibilité</h3>
            <p>Ouvert à tous, quel que soit votre niveau.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Nos entraîneurs</h2>
        <div class="grid">
          <div>
            <h3>Jean Dupont</h3>
            <p><strong>Entraîneur principal</strong></p>
            <p>Diplômé d'État, 15 ans d'expérience. Spécialisé dans l'entraînement des coureurs de fond.</p>
          </div>
          <div>
            <h3>Marie Martin</h3>
            <p><strong>Entraîneure adjointe</strong></p>
            <p>Ancienne athlète de haut niveau, spécialisée dans l'entraînement des débutants.</p>
          </div>
          <div>
            <h3>Pierre Durand</h3>
            <p><strong>Coach trail</strong></p>
            <p>Spécialiste du trail et de la course nature. Organise les sorties en forêt.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Nos installations</h2>
        <div class="grid">
          <div>
            <h3>🏟️ Stade de Beauvais</h3>
            <p>Notre base d'entraînement principale avec piste d'athlétisme et vestiaires.</p>
          </div>
          <div>
            <h3>🌲 Parc Marcel Dassault</h3>
            <p>Parcours nature pour les entraînements en extérieur et les sorties longues.</p>
          </div>
          <div>
            <h3>🏃‍♀️ Centre-ville</h3>
            <p>Parcours urbains variés pour découvrir Beauvais en courant.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Statistiques du club</h2>
        <div class="grid">
          <div style="text-align: center;">
            <h3 style="color: var(--primary-color); font-size: 2rem;">150+</h3>
            <p>Membres actifs</p>
          </div>
          <div style="text-align: center;">
            <h3 style="color: var(--primary-color); font-size: 2rem;">3</h3>
            <p>Entraînements par semaine</p>
          </div>
          <div style="text-align: center;">
            <h3 style="color: var(--primary-color); font-size: 2rem;">15+</h3>
            <p>Compétitions par an</p>
          </div>
          <div style="text-align: center;">
            <h3 style="color: var(--primary-color); font-size: 2rem;">14</h3>
            <p>Années d'existence</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Rejoindre le CPBO</h2>
        <p>Vous souhaitez nous rejoindre ? C'est simple !</p>
        <ol style="margin: 1rem 0; padding-left: 2rem;">
          <li>Participez à une séance d'essai gratuite</li>
          <li>Remplissez le formulaire d'inscription</li>
          <li>Payez la cotisation annuelle (30€)</li>
          <li>Commencez à courir avec nous !</li>
        </ol>
        <div style="text-align: center; margin-top: 2rem;">
          <router-link to="/contact" class="btn btn-primary">Nous contacter</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>
