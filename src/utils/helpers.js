/**
 * Fonctions utilitaires pour l'application CPBO
 */

/**
 * Formate une date en français
 * @param {Date|string} date - La date à formater
 * @param {object} options - Options de formatage
 * @returns {string} - Date formatée
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    locale: 'fr-FR'
  }
  
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString('fr-FR', { ...defaultOptions, ...options })
}

/**
 * Formate une date courte (ex: 15 Oct)
 * @param {Date|string} date - La date à formater
 * @returns {string} - Date formatée courte
 */
export const formatDateShort = (date) => {
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short'
  })
}

/**
 * Formate une heure (ex: 18:30)
 * @param {Date|string} date - La date/heure à formater
 * @returns {string} - Heure formatée
 */
export const formatTime = (date) => {
  const dateObj = new Date(date)
  return dateObj.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

/**
 * Calcule l'âge à partir d'une date de naissance
 * @param {Date|string} birthDate - Date de naissance
 * @returns {number} - Âge en années
 */
export const calculateAge = (birthDate) => {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  
  return age
}

/**
 * Génère un ID unique
 * @param {string} prefix - Préfixe optionnel
 * @returns {string} - ID unique
 */
export const generateId = (prefix = '') => {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substr(2, 5)
  return prefix ? `${prefix}-${timestamp}-${random}` : `${timestamp}-${random}`
}

/**
 * Débounce une fonction
 * @param {Function} func - Fonction à débouncer
 * @param {number} wait - Délai d'attente en ms
 * @returns {Function} - Fonction débouncée
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle une fonction
 * @param {Function} func - Fonction à throttler
 * @param {number} limit - Limite en ms
 * @returns {Function} - Fonction throttlée
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Capitalise la première lettre d'une chaîne
 * @param {string} str - Chaîne à capitaliser
 * @returns {string} - Chaîne capitalisée
 */
export const capitalize = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Capitalise chaque mot d'une chaîne
 * @param {string} str - Chaîne à capitaliser
 * @returns {string} - Chaîne avec chaque mot capitalisé
 */
export const capitalizeWords = (str) => {
  if (!str) return ''
  return str.split(' ').map(word => capitalize(word)).join(' ')
}

/**
 * Formate un numéro de téléphone français
 * @param {string} phone - Numéro de téléphone
 * @returns {string} - Numéro formaté
 */
export const formatPhone = (phone) => {
  if (!phone) return ''
  
  // Supprime tous les espaces et caractères non numériques
  const cleaned = phone.replace(/\D/g, '')
  
  // Format: 06 12 34 56 78
  if (cleaned.length === 10 && cleaned.startsWith('0')) {
    return cleaned.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
  }
  
  // Format: +33 6 12 34 56 78
  if (cleaned.length === 12 && cleaned.startsWith('33')) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9, 11)}`
  }
  
  return phone
}

/**
 * Vérifie si une date est dans le futur
 * @param {Date|string} date - Date à vérifier
 * @returns {boolean} - True si la date est dans le futur
 */
export const isFutureDate = (date) => {
  const dateObj = new Date(date)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return dateObj > today
}

/**
 * Vérifie si une date est dans le passé
 * @param {Date|string} date - Date à vérifier
 * @returns {boolean} - True si la date est dans le passé
 */
export const isPastDate = (date) => {
  const dateObj = new Date(date)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return dateObj < today
}

/**
 * Calcule la différence en jours entre deux dates
 * @param {Date|string} date1 - Première date
 * @param {Date|string} date2 - Deuxième date
 * @returns {number} - Différence en jours
 */
export const daysDifference = (date1, date2) => {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  const diffTime = Math.abs(d2 - d1)
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

/**
 * Formate une durée en minutes en format lisible
 * @param {number} minutes - Durée en minutes
 * @returns {string} - Durée formatée
 */
export const formatDuration = (minutes) => {
  if (minutes < 60) {
    return `${minutes} min`
  }
  
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  
  if (remainingMinutes === 0) {
    return `${hours}h`
  }
  
  return `${hours}h${remainingMinutes}`
}

/**
 * Formate une distance en mètres en format lisible
 * @param {number} meters - Distance en mètres
 * @returns {string} - Distance formatée
 */
export const formatDistance = (meters) => {
  if (meters < 1000) {
    return `${meters} m`
  }
  
  const kilometers = meters / 1000
  return `${kilometers.toFixed(1)} km`
}

/**
 * Vérifie si l'utilisateur est sur mobile
 * @returns {boolean} - True si sur mobile
 */
export const isMobile = () => {
  return window.innerWidth <= 768
}

/**
 * Vérifie si l'utilisateur est sur tablette
 * @returns {boolean} - True si sur tablette
 */
export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024
}

/**
 * Vérifie si l'utilisateur est sur desktop
 * @returns {boolean} - True si sur desktop
 */
export const isDesktop = () => {
  return window.innerWidth > 1024
}
