# Application de liste de tâches

## Présentation
Il s'agit d'une application de liste de tâches simple, développée avec React. Elle permet aux utilisateurs de :
- Ajouter de nouvelles tâches
- Modifier des tâches existantes
- Supprimer des tâches
- Marquer des tâches comme terminées

## Fonctionnalités
- Formulaire de tâche avec validation
- Activer/désactiver la fin des tâches
- Persistance du stockage local

## Exécution de l'application

### Prérequis
- Node.js installé (https://nodejs.org/)

### Étapes
1. Cloner le dépôt :
bash
git clone <repository_url>
Installer les dépendances :

bash

npm install
Démarrer le serveur de développement :

bash

npm start
L'application sera disponible à l'adresse http://localhost:3000.

## Considérations supplémentaires
Les tâches sont stockées dans le stockage local du navigateur, ce qui signifie qu'elles persistent même si la page est actualisée ou le navigateur fermé.

Les tâches peuvent être marquées comme terminées et l'interface utilisateur sera mise à jour en conséquence.

yaml

---

### Conclusion
Vous devriez obtenir ainsi une application de liste de tâches entièrement fonctionnelle et stylée. Vous pouvez l'améliorer en ajoutant des fonctionnalités telles que le filtrage des tâches ou l'ajout de dates d'échéance.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

