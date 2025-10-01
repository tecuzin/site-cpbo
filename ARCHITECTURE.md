# Architecture du Projet CPBO

## Vue d'ensemble

Le projet CPBO (Course à Pied Beauvais Oise) est une application web moderne développée avec Vue.js 3, utilisant la Composition API et une architecture modulaire basée sur les composants.

## Structure du Projet

```
src/
├── components/           # Composants Vue réutilisables
│   ├── ui/              # Composants UI de base
│   │   ├── Button.vue
│   │   ├── Card.vue
│   │   ├── Modal.vue
│   │   ├── ContactForm.vue
│   │   ├── Input.vue
│   │   ├── Textarea.vue
│   │   └── Select.vue
│   ├── sections/        # Composants de sections
│   │   ├── Hero.vue
│   │   ├── EventCard.vue
│   │   └── ContactModal.vue
│   ├── layout/          # Composants de layout
│   │   └── Navigation.vue
│   ├── Header.vue
│   └── Footer.vue
├── views/               # Pages de l'application
│   ├── Home.vue
│   ├── About.vue
│   ├── Events.vue
│   └── Contact.vue
├── router/              # Configuration Vue Router
│   └── index.js
├── utils/               # Utilitaires et helpers
│   ├── validation.js
│   ├── constants.js
│   └── helpers.js
├── assets/              # Ressources statiques
│   └── style.css
├── App.vue              # Composant racine
└── main.js              # Point d'entrée
```

## Principes Architecturaux

### 1. Composition API
- Utilisation exclusive de la Composition API Vue 3
- Logique réutilisable dans `setup()`
- Meilleure séparation des préoccupations
- TypeScript-ready

### 2. Composants Atomiques
- **UI Components** : Composants de base réutilisables
- **Section Components** : Composants de sections métier
- **Layout Components** : Composants de structure

### 3. Props et Events
- Props typées avec validation
- Events déclarés explicitement
- Communication parent-enfant claire

### 4. Gestion d'État
- État local avec `ref()` et `reactive()`
- État calculé avec `computed()`
- Pas de store global (Pinia) pour l'instant

## Composants UI

### Button
```vue
<Button 
  variant="primary" 
  size="medium" 
  :disabled="false"
  @click="handleClick"
>
  Texte du bouton
</Button>
```

**Props :**
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean

### Card
```vue
<Card variant="default" padding="medium">
  Contenu de la carte
</Card>
```

**Props :**
- `variant`: 'default' | 'elevated' | 'outlined'
- `padding`: 'small' | 'medium' | 'large' | 'none'

### Modal
```vue
<Modal 
  :is-open="showModal" 
  title="Titre"
  @close="showModal = false"
>
  Contenu de la modale
</Modal>
```

**Props :**
- `isOpen`: boolean
- `title`: string
- `closeOnOverlay`: boolean

### Input
```vue
<Input
  v-model="value"
  label="Label"
  placeholder="Placeholder"
  :required="true"
  :error="errorMessage"
/>
```

**Props :**
- `modelValue`: string | number
- `type`: string (default: 'text')
- `label`: string
- `placeholder`: string
- `required`: boolean
- `disabled`: boolean
- `error`: string
- `hint`: string
- `size`: 'small' | 'medium' | 'large'

## Composants de Sections

### Hero
```vue
<Hero
  title="Titre principal"
  subtitle="Sous-titre"
  :primary-button="{ text: 'Action', action: 'contact' }"
  @button-click="handleButtonClick"
/>
```

### EventCard
```vue
<EventCard
  title="Titre de l'événement"
  description="Description"
  location="Lieu"
  time="18h30"
  date="2024-10-15"
  price="15€"
  :tags="['Compétition', '5km']"
/>
```

## Utilitaires

### Validation
```javascript
import { validateContactForm, isValidEmail } from '@/utils/validation'

const { isValid, errors } = validateContactForm(formData)
```

### Helpers
```javascript
import { formatDate, formatPhone, debounce } from '@/utils/helpers'

const formattedDate = formatDate(new Date())
const formattedPhone = formatPhone('0612345678')
const debouncedSearch = debounce(searchFunction, 300)
```

### Constants
```javascript
import { COLORS, CONTACT_SUBJECTS, ERROR_MESSAGES } from '@/utils/constants'
```

## Styles et CSS

### Variables CSS
```css
:root {
  --primary-color: #2c5aa0;
  --secondary-color: #f39c12;
  --accent-color: #e74c3c;
  --text-color: #333;
  --light-bg: #f8f9fa;
  --white: #ffffff;
  --shadow: 0 2px 10px rgba(0,0,0,0.1);
  --border-radius: 8px;
}
```

### Classes Utilitaires
- `.btn` : Bouton de base
- `.card` : Carte de base
- `.grid` : Grille responsive
- `.container` : Conteneur centré

### Responsive Design
- Mobile-first approach
- Breakpoints : 768px, 1024px, 1200px
- Flexbox et Grid CSS

## Tests

### Structure des Tests
```
tests/
├── unit/                # Tests unitaires
│   ├── Button.test.js
│   ├── ContactForm.test.js
│   └── EventCard.test.js
└── e2e/                 # Tests end-to-end
    └── contact.spec.js
```

### Tests Unitaires (Vitest)
- Tests de composants avec Vue Test Utils
- Mocking des dépendances
- Couverture de code > 80%

### Tests E2E (Playwright)
- Tests de parcours utilisateur
- Mocking des APIs
- Tests cross-browser

## Configuration

### Vite
```javascript
// vite.config.js
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    host: true,
    open: false
  }
})
```

### Vitest
```javascript
// vitest.config.js
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true
  }
})
```

### Playwright
```javascript
// playwright.config.js
export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://localhost:3000'
  }
})
```

## Bonnes Pratiques

### 1. Nommage
- **Composants** : PascalCase (ex: `ContactForm.vue`)
- **Fichiers** : kebab-case (ex: `contact-form.vue`)
- **Variables** : camelCase (ex: `isSubmitting`)
- **Constantes** : UPPER_SNAKE_CASE (ex: `API_BASE_URL`)

### 2. Structure des Composants
```vue
<template>
  <!-- Template avec structure claire -->
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import OtherComponent from './OtherComponent.vue'

export default {
  name: 'ComponentName',
  components: {
    OtherComponent
  },
  props: {
    // Props avec validation
  },
  emits: ['event-name'],
  setup(props, { emit }) {
    // Logique du composant
    return {
      // Exposer les données et méthodes
    }
  }
}
</script>

<style scoped>
/* Styles avec variables CSS */
</style>
```

### 3. Gestion des Erreurs
- Validation côté client
- Messages d'erreur utilisateur
- Gestion des erreurs réseau
- Fallbacks appropriés

### 4. Performance
- Lazy loading des composants
- Optimisation des re-renders
- Images optimisées
- Code splitting

### 5. Accessibilité
- Attributs ARIA
- Navigation clavier
- Contraste approprié
- Labels pour les formulaires

## Évolutions Futures

### Court terme
- [ ] Ajout de TypeScript
- [ ] Store Pinia pour l'état global
- [ ] Tests de composants avec Storybook
- [ ] Optimisation des performances

### Moyen terme
- [ ] PWA (Progressive Web App)
- [ ] Système d'authentification
- [ ] Espace membres
- [ ] Notifications push

### Long terme
- [ ] Application mobile (React Native/Flutter)
- [ ] Système de paiement
- [ ] Intégration réseaux sociaux
- [ ] Analytics avancées

## Déploiement

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host"]
```

### Scripts NPM
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test"
  }
}
```

## Maintenance

### Mise à jour des dépendances
```bash
npm audit
npm update
```

### Tests de régression
```bash
npm run test
npm run test:e2e
```

### Linting et formatage
```bash
npm run lint
npm run format
```

---

*Cette architecture suit les meilleures pratiques Vue.js 3 et les standards modernes de développement web.*
