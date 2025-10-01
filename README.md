# CPBO - Course à Pied Beauvais Oise

Site web du Club de Course à Pied de Beauvais Oise développé avec Vue.js 3.

## 🏃‍♂️ À propos

Le CPBO est un club de course à pied basé à Beauvais dans l'Oise. Ce site présente les activités du club, les entraînements, les compétitions et permet aux visiteurs de prendre contact.

## 🚀 Fonctionnalités

- **Page d'accueil** : Présentation du club et des activités
- **À propos** : Histoire, valeurs et équipe du club
- **Événements** : Calendrier des entraînements et compétitions
- **Contact** : Formulaire de contact en modale et informations pratiques
- **Design responsive** : Adapté aux mobiles et tablettes
- **Navigation fluide** : Single Page Application avec Vue Router
- **Composants réutilisables** : Architecture modulaire pour faciliter les tests
- **Tests complets** : Tests unitaires (Vitest) et E2E (Playwright)

## 🛠️ Technologies utilisées

- **Vue.js 3** : Framework JavaScript
- **Vue Router** : Gestion de la navigation
- **Vite** : Outil de build et serveur de développement
- **CSS3** : Styles personnalisés avec variables CSS
- **Docker** : Conteneurisation pour le développement
- **Vitest** : Tests unitaires
- **Playwright** : Tests end-to-end
- **Vue Test Utils** : Utilitaires de test pour Vue

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

## 🧪 Tests

### Tests unitaires (Vitest)

```bash
# Lancer tous les tests
npm run test

# Lancer les tests avec interface graphique
npm run test:ui

# Lancer les tests en mode watch
npm run test -- --watch
```

### Tests end-to-end (Playwright)

```bash
# Lancer les tests E2E
npm run test:e2e

# Lancer les tests E2E en mode UI
npx playwright test --ui

# Lancer les tests E2E en mode debug
npx playwright test --debug
```

### Couverture de tests

Les tests couvrent :
- **Composants UI** : Button, Card, Modal, ContactForm
- **Composants sections** : Hero, EventCard, ContactModal
- **Fonctionnalités** : Validation de formulaire, gestion d'état, événements
- **Scénarios E2E** : Navigation, formulaire de contact, gestion d'erreurs

## 📁 Structure du projet

```
site-cpbo/
├── src/
│   ├── components/
│   │   ├── ui/                 # Composants UI réutilisables
│   │   │   ├── Button.vue
│   │   │   ├── Card.vue
│   │   │   ├── Modal.vue
│   │   │   └── ContactForm.vue
│   │   ├── sections/           # Composants de sections
│   │   │   ├── Hero.vue
│   │   │   ├── EventCard.vue
│   │   │   └── ContactModal.vue
│   │   ├── Header.vue
│   │   └── Footer.vue
│   ├── views/                  # Pages de l'application
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Events.vue
│   │   └── Contact.vue
│   ├── router/                 # Configuration Vue Router
│   │   └── index.js
│   ├── assets/                 # Ressources statiques
│   │   └── style.css
│   ├── App.vue                 # Composant racine
│   └── main.js                 # Point d'entrée
├── tests/
│   ├── unit/                   # Tests unitaires
│   │   ├── Button.test.js
│   │   ├── EventCard.test.js
│   │   └── ContactForm.test.js
│   └── e2e/                    # Tests end-to-end
│       └── contact.spec.js
├── public/                     # Fichiers publics
├── index.html                  # Template HTML
├── package.json                # Dépendances et scripts
├── vite.config.js              # Configuration Vite
├── vitest.config.js            # Configuration Vitest
├── playwright.config.js        # Configuration Playwright
├── Dockerfile                  # Configuration Docker
└── docker-compose.yml          # Configuration Docker Compose
```

## 🎨 Design

Le site utilise un design moderne avec :
- **Couleurs** : Bleu (#2c5aa0) et orange (#f39c12) comme couleurs principales
- **Typographie** : Segoe UI pour une lecture optimale
- **Layout** : Grid et Flexbox pour un design responsive
- **Animations** : Transitions CSS fluides
- **Accessibilité** : Contraste et navigation clavier
- **Composants** : Architecture modulaire et réutilisable

## 📱 Responsive

Le site est entièrement responsive et s'adapte à :
- **Desktop** : Layout en grille avec sidebar
- **Tablette** : Adaptation des colonnes
- **Mobile** : Navigation empilée et contenu optimisé

## 🔧 Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Construit la version de production
- `npm run preview` : Prévisualise la version de production
- `npm run test` : Lance les tests unitaires
- `npm run test:ui` : Lance les tests avec interface graphique
- `npm run test:e2e` : Lance les tests end-to-end

## 🏗️ Architecture des composants

### Composants UI
- **Button** : Bouton réutilisable avec variants (primary, secondary, outline)
- **Card** : Conteneur avec différentes variantes (default, elevated, outlined)
- **Modal** : Modale avec overlay et gestion des événements
- **ContactForm** : Formulaire de contact avec validation

### Composants Sections
- **Hero** : Section hero avec titre, sous-titre et boutons d'action
- **EventCard** : Carte d'événement avec date, lieu, prix et tags
- **ContactModal** : Modale de contact utilisant ContactForm

### Gestion d'état
- État local dans les composants
- Événements personnalisés pour la communication parent-enfant
- Props pour la configuration des composants

## 📞 Contact

Pour toute question sur le site ou le club :
- **Email** : contact@cpbo.fr
- **Téléphone** : 06 XX XX XX XX
- **Adresse** : Stade de Beauvais, 60000 Beauvais

## 📄 Licence

Ce projet est développé pour le CPBO - Course à Pied Beauvais Oise.

---

*Développé avec ❤️ pour la communauté running de Beauvais*