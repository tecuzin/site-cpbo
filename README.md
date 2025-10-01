# CPBO - Course à Pied Beauvais Oise

Site web du Club de Course à Pied de Beauvais Oise développé avec Vue.js 3.

## 🏃‍♂️ À propos

Le CPBO est un club de course à pied basé à Beauvais dans l'Oise. Ce site présente les activités du club, les entraînements, les compétitions et permet aux visiteurs de prendre contact.

## 🚀 Fonctionnalités

- **Page d'accueil** : Présentation du club et des activités
- **À propos** : Histoire, valeurs et équipe du club
- **Événements** : Calendrier des entraînements et compétitions
- **Contact** : Formulaire de contact et informations pratiques
- **Design responsive** : Adapté aux mobiles et tablettes
- **Navigation fluide** : Single Page Application avec Vue Router

## 🛠️ Technologies utilisées

- **Vue.js 3** : Framework JavaScript
- **Vue Router** : Gestion de la navigation
- **Vite** : Outil de build et serveur de développement
- **CSS3** : Styles personnalisés avec variables CSS
- **Docker** : Conteneurisation pour le développement

## 📦 Installation et lancement

### Prérequis
- Docker et Docker Compose installés

### Lancement avec Docker

1. Cloner le projet :
```bash
git clone <repository-url>
cd site-cpbo
```

2. Construire l'image Docker :
```bash
docker build -t cpbo-site .
```

3. Lancer le conteneur :
```bash
docker run -d -p 3000:3000 -v $(pwd):/app -v /app/node_modules cpbo-site
```

4. Accéder au site :
Ouvrir http://localhost:3000 dans votre navigateur

### Lancement local (avec Node.js 20+)

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Accéder au site :
Ouvrir http://localhost:3000 dans votre navigateur

## 📁 Structure du projet

```
site-cpbo/
├── src/
│   ├── components/          # Composants Vue réutilisables
│   │   ├── Header.vue
│   │   └── Footer.vue
│   ├── views/              # Pages de l'application
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Events.vue
│   │   └── Contact.vue
│   ├── router/             # Configuration Vue Router
│   │   └── index.js
│   ├── assets/             # Ressources statiques
│   │   └── style.css
│   ├── App.vue             # Composant racine
│   └── main.js             # Point d'entrée
├── public/                 # Fichiers publics
├── index.html              # Template HTML
├── package.json            # Dépendances et scripts
├── vite.config.js          # Configuration Vite
├── Dockerfile              # Configuration Docker
└── docker-compose.yml      # Configuration Docker Compose
```

## 🎨 Design

Le site utilise un design moderne avec :
- **Couleurs** : Bleu (#2c5aa0) et orange (#f39c12) comme couleurs principales
- **Typographie** : Segoe UI pour une lecture optimale
- **Layout** : Grid et Flexbox pour un design responsive
- **Animations** : Transitions CSS fluides
- **Accessibilité** : Contraste et navigation clavier

## 📱 Responsive

Le site est entièrement responsive et s'adapte à :
- **Desktop** : Layout en grille avec sidebar
- **Tablette** : Adaptation des colonnes
- **Mobile** : Navigation empilée et contenu optimisé

## 🔧 Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Construit la version de production
- `npm run preview` : Prévisualise la version de production

## 📞 Contact

Pour toute question sur le site ou le club :
- **Email** : contact@cpbo.fr
- **Téléphone** : 06 XX XX XX XX
- **Adresse** : Stade de Beauvais, 60000 Beauvais

## 📄 Licence

Ce projet est développé pour le CPBO - Course à Pied Beauvais Oise.

---

*Développé avec ❤️ pour la communauté running de Beauvais*
