﻿# Bataa.tn
# Site Web d'enchères

Ce projet est une application Web construite en utilisant Laravel pour le backend et Angular pour le frontend. Il sert de plate-forme d'enchères où les utilisateurs peuvent acheter et vendre divers articles via des enchères.

## Caractéristiques

### Rôles des utilisateurs

- **Acheteurs** : utilisateurs intéressés par l'achat d'articles via des enchères.
- **Vendeurs** : utilisateurs qui mettent des articles aux enchères.
- **Administrateurs** : Utilisateurs disposant de privilèges administratifs pour gérer la plateforme.

### Fonctionnalités pour l'acheteur

- Recherche avancée : recherche multicritère incluant les catégories et l'état.
- Recherche simple
- Authentification 
- Inscription : avec compte google.
- Gestion des achats : affichez les achats et faites des enchères.

### Fonctionnalités du vendeur

- Gestion des ventes : créez des annonces avec jusqu'à six photos, le nom de l'article, la description, l'état, le prix, la date d'expiration et les catégories.

#### Catégories et sous-catégories

- Moyen de Transport (moto, voiture)
- Matériel informatique (ordinateur, tablette/téléphone, autre)
- Immobilier (terrain, depot/bureau, maison)

### Fonctionnalités d'administrateur

- Authentification
- Afficher les statistiques : Nombre d'acheteurs, d'offres, de vendeurs et de catégories.
- Gestion des ventes : confirmer ou supprimer des annonces.

## Technologies utilisées

- Laravel : Framework backend pour gérer l'authentification et la gestion des bases de données.
- Angular : framework frontend pour l'interface administrateur et utilisateur (les interactions côté client).
- MySQL : système de gestion de base de données pour stocker les données des utilisateurs, les annonces, les offres, etc.

## Outils

## Outils

- Firebase pour consomer l'api d'authentification avec compte google.
- Cloudinary pour stocker les images.

##Installation

### Back-end (Laravel)

1. Clonez le référentiel.
2. Accédez au répertoire « backend ».
3. Exécutez `composer install` pour installer les dépendances.
4. Ouvrir le fichier « .env » et configurez les paramètres de votre base de données.
5. Exécutez `php artisan migrate` pour migrer la base de données.
6. Exécutez `php artisan serve` pour démarrer le serveur de développement Laravel.

### Frontend (angulaire)

1. Accédez au répertoire « frontend ».
2. Exécutez `npm install` pour installer les dépendances.
3. Ouvrir le fichier « environnements.ts » et configurez les API Secret de cloudinary et firebase.
4. Mettez à jour l'URL de base de l'API dans les fichiers d'environnement si nécessaire.
5. Exécutez `ng serve` pour démarrer le serveur de développement Angular.
# Démo : 

https://github.com/user-attachments/assets/5917c865-cc49-4610-bdf2-5e93e5fbae33
