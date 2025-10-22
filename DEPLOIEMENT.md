# 🚀 Guide de Déploiement GitHub Pages

## Configuration requise

Votre site est maintenant prêt pour GitHub Pages ! Voici les étapes à suivre :

## 📝 Étapes de déploiement

### 1. Activer GitHub Pages dans votre repository

1. Allez sur votre repository GitHub : `https://github.com/<votre-username>/site-cpbo`
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Dans la section **Source** :
   - Sélectionnez **GitHub Actions** (au lieu de "Deploy from a branch")

### 2. Pousser les modifications

```bash
# Ajouter tous les fichiers modifiés
git add .

# Créer un commit
git commit -m "Configuration pour GitHub Pages"

# Pousser sur GitHub
git push origin main
```

### 3. Vérifier le déploiement

1. Allez dans l'onglet **Actions** de votre repository
2. Vous verrez le workflow "Déploiement GitHub Pages" en cours d'exécution
3. Attendez que le workflow soit terminé (quelques minutes)
4. Une fois terminé, votre site sera accessible à :
   - `https://<votre-username>.github.io/site-cpbo/`

## ✅ Vérification

Pour vérifier que tout fonctionne :

1. Accédez à votre URL GitHub Pages
2. Testez la navigation entre les pages (Accueil, À propos, Événements, Contact)
3. Vérifiez que les images et styles se chargent correctement
4. Testez le formulaire de contact

## 🔧 Modifications apportées

Les fichiers suivants ont été configurés pour GitHub Pages :

- ✅ `vite.config.js` - Configuration du base path et build
- ✅ `src/router/index.js` - Configuration du router avec base URL
- ✅ `index.html` - Script de gestion des redirections SPA
- ✅ `public/404.html` - Page 404 pour les routes SPA
- ✅ `public/.nojekyll` - Désactivation de Jekyll
- ✅ `.github/workflows/deploy.yml` - Workflow de déploiement automatique
- ✅ `.gitignore` - Fichiers à ignorer dans Git

## 🔄 Déploiements futurs

Après la configuration initiale, chaque fois que vous pushez sur la branche `main`, le site sera automatiquement redéployé sur GitHub Pages.

```bash
# Faire vos modifications...
git add .
git commit -m "Description de vos modifications"
git push origin main

# Le déploiement se fera automatiquement !
```

## 🐛 Dépannage

### Le site ne se charge pas

- Vérifiez que GitHub Pages est activé dans Settings > Pages
- Vérifiez que le workflow dans Actions s'est terminé avec succès
- Attendez quelques minutes, le déploiement peut prendre du temps

### Les routes ne fonctionnent pas (erreur 404)

- Le fichier `public/404.html` doit être présent
- Le script de redirection dans `index.html` doit être présent
- Videz le cache de votre navigateur (Ctrl+Shift+R)

### Les images ne s'affichent pas

- Vérifiez que les chemins des images sont corrects
- Vérifiez que le `base` dans `vite.config.js` est correct (`/site-cpbo/`)

### Le workflow échoue

- Vérifiez que vous avez activé "GitHub Actions" dans Settings > Pages
- Vérifiez les logs du workflow dans l'onglet Actions
- Vérifiez que le fichier `package.json` contient bien le script `build`

## 📞 URL importante

Après le déploiement, votre site sera accessible à :
**`https://<votre-username>.github.io/site-cpbo/`**

Remplacez `<votre-username>` par votre nom d'utilisateur GitHub.

---

Si votre repository a un nom différent de `site-cpbo`, vous devrez modifier :
1. La valeur de `base` dans `vite.config.js`
2. L'URL de redirection dans `public/404.html`

```javascript
// vite.config.js
base: process.env.NODE_ENV === 'production' ? '/votre-nom-repo/' : '/',
```

```html
<!-- public/404.html -->
<meta http-equiv="refresh" content="0;URL='/votre-nom-repo/'">
```

