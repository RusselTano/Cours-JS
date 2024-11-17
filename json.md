<!-- Utilise le racourcis clavier ctrl + Shift + v pour visualiser le fichier .md -->

# Différences entre JSON.parse, JSON.stringify et json()

## 1. JSON.parse
- **Description** : Convertit une chaîne de caractères JSON en un objet JavaScript.
- **Utilisation** : Utilisé pour transformer des données JSON reçues sous forme de chaîne en objet JavaScript.
- **Exemple** :
  ```javascript
  const jsonString = '{"name": "Alice", "age": 25}';
  const obj = JSON.parse(jsonString);
  console.log(obj.name); // Affiche "Alice"
  ```

## 2. JSON.stringify
- **Description** : Convertit un objet JavaScript en une chaîne JSON.
- **Utilisation** : Utile pour envoyer des données à une API ou les stocker sous forme de chaîne JSON.
- **Exemple** :
  ```javascript
  const obj = { name: "Bob", age: 30 };
  const jsonString = JSON.stringify(obj);
  console.log(jsonString); // Affiche '{"name":"Bob","age":30}'
  ```

## 3. json()
- **Description** : Méthode utilisée sur les objets `Response` de `fetch` pour extraire le corps de la réponse et le convertir en objet JavaScript.
- **Utilisation** : Transforme la réponse d'une requête `fetch` en objet JavaScript de manière asynchrone.
- **Exemple** :
  ```javascript
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Affiche l'objet JavaScript reçu
    })
    .catch(error => console.error('Erreur:', error));
  ```

## Résumé des différences :
- **`JSON.parse`** et **`JSON.stringify`** : Méthodes globales pour convertir entre chaînes JSON et objets JavaScript.
- **`.json()`** : Méthode spécifique aux objets `Response` (de `fetch`) pour analyser le corps de la réponse de manière asynchrone.
