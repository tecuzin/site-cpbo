/**
 * Utilitaires de validation pour les formulaires
 */

/**
 * Valide une adresse email
 * @param {string} email - L'adresse email à valider
 * @returns {boolean} - True si l'email est valide
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valide un numéro de téléphone français
 * @param {string} phone - Le numéro de téléphone à valider
 * @returns {boolean} - True si le numéro est valide
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

/**
 * Valide qu'une chaîne n'est pas vide
 * @param {string} value - La valeur à valider
 * @returns {boolean} - True si la valeur n'est pas vide
 */
export const isNotEmpty = (value) => {
  return value && value.trim().length > 0
}

/**
 * Valide la longueur minimale d'une chaîne
 * @param {string} value - La valeur à valider
 * @param {number} minLength - Longueur minimale
 * @returns {boolean} - True si la longueur est suffisante
 */
export const hasMinLength = (value, minLength) => {
  return value && value.length >= minLength
}

/**
 * Valide la longueur maximale d'une chaîne
 * @param {string} value - La valeur à valider
 * @param {number} maxLength - Longueur maximale
 * @returns {boolean} - True si la longueur est acceptable
 */
export const hasMaxLength = (value, maxLength) => {
  return !value || value.length <= maxLength
}

/**
 * Valide un mot de passe
 * @param {string} password - Le mot de passe à valider
 * @returns {object} - Objet avec isValid et errors
 */
export const validatePassword = (password) => {
  const errors = []
  
  if (!hasMinLength(password, 8)) {
    errors.push('Le mot de passe doit contenir au moins 8 caractères')
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins une majuscule')
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins une minuscule')
  }
  
  if (!/\d/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins un chiffre')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Valide un formulaire de contact
 * @param {object} formData - Les données du formulaire
 * @returns {object} - Objet avec isValid et errors
 */
export const validateContactForm = (formData) => {
  const errors = {}
  
  // Validation du nom
  if (!isNotEmpty(formData.name)) {
    errors.name = 'Le nom est requis'
  }
  
  // Validation de l'email
  if (!isNotEmpty(formData.email)) {
    errors.email = 'L\'email est requis'
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'L\'email n\'est pas valide'
  }
  
  // Validation du téléphone (optionnel)
  if (formData.phone && !isValidPhone(formData.phone)) {
    errors.phone = 'Le numéro de téléphone n\'est pas valide'
  }
  
  // Validation du sujet
  if (!isNotEmpty(formData.subject)) {
    errors.subject = 'Le sujet est requis'
  }
  
  // Validation du message
  if (!isNotEmpty(formData.message)) {
    errors.message = 'Le message est requis'
  } else if (!hasMinLength(formData.message, 10)) {
    errors.message = 'Le message doit contenir au moins 10 caractères'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

/**
 * Valide un formulaire d'inscription
 * @param {object} formData - Les données du formulaire
 * @returns {object} - Objet avec isValid et errors
 */
export const validateRegistrationForm = (formData) => {
  const errors = {}
  
  // Validation du nom
  if (!isNotEmpty(formData.name)) {
    errors.name = 'Le nom est requis'
  }
  
  // Validation de l'email
  if (!isNotEmpty(formData.email)) {
    errors.email = 'L\'email est requis'
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'L\'email n\'est pas valide'
  }
  
  // Validation du téléphone
  if (!isNotEmpty(formData.phone)) {
    errors.phone = 'Le téléphone est requis'
  } else if (!isValidPhone(formData.phone)) {
    errors.phone = 'Le numéro de téléphone n\'est pas valide'
  }
  
  // Validation du mot de passe
  if (!isNotEmpty(formData.password)) {
    errors.password = 'Le mot de passe est requis'
  } else {
    const passwordValidation = validatePassword(formData.password)
    if (!passwordValidation.isValid) {
      errors.password = passwordValidation.errors[0]
    }
  }
  
  // Validation de la confirmation du mot de passe
  if (!isNotEmpty(formData.confirmPassword)) {
    errors.confirmPassword = 'La confirmation du mot de passe est requise'
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Les mots de passe ne correspondent pas'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
