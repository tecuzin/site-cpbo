/**
 * Constantes de l'application CPBO
 */

// Couleurs du thème
export const COLORS = {
  PRIMARY: '#2c5aa0',
  SECONDARY: '#f39c12',
  ACCENT: '#e74c3c',
  SUCCESS: '#28a745',
  WARNING: '#ffc107',
  INFO: '#17a2b8',
  LIGHT: '#f8f9fa',
  DARK: '#343a40',
  WHITE: '#ffffff'
}

// Tailles de composants
export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

// Variants de composants
export const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
}

// Sujets de contact
export const CONTACT_SUBJECTS = [
  { value: 'inscription', label: 'Inscription au club' },
  { value: 'entrainement', label: 'Informations sur les entraînements' },
  { value: 'competition', label: 'Participation aux compétitions' },
  { value: 'autre', label: 'Autre' }
]

// Types d'événements
export const EVENT_TYPES = [
  { value: 'entrainement', label: 'Entraînement' },
  { value: 'competition', label: 'Compétition' },
  { value: 'sortie', label: 'Sortie' },
  { value: 'evenement', label: 'Événement spécial' }
]

// Niveaux de course
export const RUNNING_LEVELS = [
  { value: 'debutant', label: 'Débutant' },
  { value: 'intermediaire', label: 'Intermédiaire' },
  { value: 'confirme', label: 'Confirmé' },
  { value: 'expert', label: 'Expert' }
]

// Distances de course
export const RUNNING_DISTANCES = [
  { value: '5km', label: '5 km' },
  { value: '10km', label: '10 km' },
  { value: 'semi-marathon', label: 'Semi-marathon (21,1 km)' },
  { value: 'marathon', label: 'Marathon (42,2 km)' },
  { value: 'trail', label: 'Trail' }
]

// Messages d'erreur
export const ERROR_MESSAGES = {
  REQUIRED: 'Ce champ est requis',
  INVALID_EMAIL: 'L\'email n\'est pas valide',
  INVALID_PHONE: 'Le numéro de téléphone n\'est pas valide',
  MIN_LENGTH: 'Ce champ doit contenir au moins {min} caractères',
  MAX_LENGTH: 'Ce champ ne peut pas dépasser {max} caractères',
  NETWORK_ERROR: 'Erreur de connexion. Veuillez réessayer.',
  SERVER_ERROR: 'Erreur du serveur. Veuillez contacter l\'administrateur.'
}

// Messages de succès
export const SUCCESS_MESSAGES = {
  CONTACT_SENT: 'Votre message a été envoyé avec succès !',
  REGISTRATION_SUCCESS: 'Votre inscription a été enregistrée !',
  PROFILE_UPDATED: 'Votre profil a été mis à jour !',
  EVENT_REGISTERED: 'Vous êtes inscrit à l\'événement !'
}

// Configuration de l'API
export const API_CONFIG = {
  BASE_URL: process.env.VUE_APP_API_URL || 'http://localhost:3000/api',
  TIMEOUT: 10000,
  ENDPOINTS: {
    CONTACT: '/contact',
    EVENTS: '/events',
    MEMBERS: '/members',
    AUTH: '/auth'
  }
}

// Configuration des tests
export const TEST_CONFIG = {
  DEFAULT_TIMEOUT: 5000,
  RETRY_ATTEMPTS: 3,
  SCREENSHOT_PATH: './tests/screenshots'
}

// Configuration responsive
export const BREAKPOINTS = {
  MOBILE: '768px',
  TABLET: '1024px',
  DESKTOP: '1200px'
}

// Configuration des animations
export const ANIMATIONS = {
  DURATION: {
    FAST: '0.2s',
    NORMAL: '0.3s',
    SLOW: '0.5s'
  },
  EASING: {
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out'
  }
}
