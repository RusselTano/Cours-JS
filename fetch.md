
# Utilisation de `fetch` en JavaScript

## 1. Qu'est-ce que `fetch` ?
`fetch` est une API JavaScript native pour effectuer des requêtes HTTP de manière asynchrone. Elle permet de récupérer des ressources distantes (fichiers, données d'API, etc.) et utilise des promesses pour gérer les opérations asynchrones.

## 2. Exemple de base

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Affiche l'objet JavaScript reçu
  })
  .catch(error => console.error('Erreur:', error));
```

### Étapes :
1. **Requête avec `fetch`** : Envoie une requête HTTP GET vers l'URL spécifiée.
2. **Traitement de la réponse** : `response.json()` convertit le corps de la réponse en JSON.
3. **Utilisation des données** : Les données sont accessibles dans le deuxième `.then()`.
4. **Gestion des erreurs** : Le `.catch()` capture les erreurs réseau ou de traitement.

## 3. Vérification du statut HTTP

`fetch` ne rejette pas automatiquement une promesse en cas de réponse avec un statut d'erreur (ex. : 404). Vous devez vérifier le statut manuellement :

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Erreur:', error));
```

- **`response.ok`** : Vérifie si le statut HTTP est compris entre 200 et 299.
- **`response.status`** : Retourne le code de statut HTTP (ex. : 404, 500).

## 4. Options avancées

Pour envoyer des requêtes POST ou ajouter des en-têtes, utilisez une configuration supplémentaire :

```javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <token>'
  },
  body: JSON.stringify({ key: 'value' })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erreur:', error));
```

### Options :
- **`method`** : Définit la méthode HTTP (`GET`, `POST`, etc.).
- **`headers`** : Ajoute des en-têtes HTTP personnalisés.
- **`body`** : Définit le corps de la requête (utilisez `JSON.stringify()` pour JSON).

## 5. Exemple avec une API publique

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Données reçues:', data);
  })
  .catch(error => console.error('Erreur:', error));
```

### Résultat attendu :
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit..."
}
```

## 6. Résumé
- **`fetch()`** est simple et puissant pour interagir avec des ressources HTTP.
- Vérifiez toujours le statut avec `response.ok`.
- Gérez les erreurs avec `.catch()` pour plus de fiabilité.

Voici un exemple de l'utilisation de `fetch` dans une fonction asynchrone :

## Exemple avec une fonction asynchrone

```javascript
async function fetchData() {
  try {
    // Effectuer la requête avec fetch
    const response = await fetch('https://api.example.com/data');

    // Vérifier si la réponse est correcte
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convertir la réponse en JSON
    const data = await response.json();

    // Afficher les données reçues
    console.log('Données reçues:', data);
  } catch (error) {
    // Gérer les erreurs
    console.error('Erreur:', error.message);
  }
}

// Appeler la fonction
fetchData();
```

---

### Explication des étapes

1. **`async function`** :  
   - Ajoute un mot-clé `async` devant la fonction pour indiquer qu'elle retourne une promesse.  

2. **`await fetch()`** :  
   - Attend que la promesse retournée par `fetch` soit résolue.  
   - Vous récupérez un objet `Response`.  

3. **Vérification du statut** :  
   - Utilisez `response.ok` pour vérifier si la requête a réussi (code HTTP 2xx).  

4. **Conversion des données** :  
   - `await response.json()` convertit le corps de la réponse en objet JSON.  

5. **Gestion des erreurs** :  
   - Le bloc `try...catch` attrape les erreurs liées à la requête ou au traitement des données.

---

### Pourquoi utiliser une fonction asynchrone ?

- Plus lisible qu'une chaîne de promesses `.then()`.
- Simplifie la gestion des erreurs avec `try...catch`.
- Convient pour des flux de travail plus complexes.

