# Installation et exécution

Ce fichier explique comment installer et lancer l'application contenue dans le dossier `reactlab` sur une autre machine.

## Prérequis

- Node.js (version recommandée >= 14). Utilisez `nvm` si nécessaire pour gérer les versions.
- npm (fourni avec Node.js) ou yarn si vous préférez.
- Git (pour cloner le dépôt).

## Installation et exécution en développement

1. Cloner le dépôt (ou copier le projet) :

```bash
git clone <repository-url>
cd <repository-folder>/reactlab
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le serveur de développement :

```bash
npm start
```

Le site sera disponible par défaut sur `http://localhost:3000`.

## Build pour la production

1. Générer le build optimisé :

```bash
npm run build
```

2. Servir le dossier `build` avec un serveur statique (ex. `serve`) :

```bash
npx serve -s build
```

## Tests

Si le projet contient des tests, lancez :

```bash
npm test
```

## Variables d'environnement

Ce projet ignore les fichiers `.env.*` par défaut (voir `.gitignore`). Si vous avez besoin de variables d'environnement, créez un fichier `.env.local` à la racine du dossier `reactlab` et ajoutez-y les variables nécessaires.

## Dépannage rapide

- Si vous obtenez des erreurs liées aux dépendances, supprimez `node_modules` et `package-lock.json` puis réexécutez `npm install`.
- Vérifiez la version de Node.js ; si elle est incompatible, utilisez `nvm` pour installer une version recommandée.

## Remarques

- Les images et assets sont référencés dans le code et sont gérés par le bundler (Webpack / CRA). Aucun réglage supplémentaire n'est généralement nécessaire.
- Le projet utilise Chakra UI et Formik (déjà listés dans `package.json`).

Si vous voulez, je peux :

- ajouter des commandes de déploiement spécifiques (Netlify / Vercel / GitHub Pages),
- créer un script `start:prod` pour servir le build,
- ou ajouter des badges dans ce README (build / license). Dites-moi ce que vous préférez.
