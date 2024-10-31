## Concepts de base en JavaScript

### Types de données primitifs
* **Number:** Représente des nombres, entiers ou décimaux.
  * `isNaN()`: Vérifie si une valeur est NaN (Not-a-Number).
* **String:** Représente une chaîne de caractères.
  * `concat()`: Concatène deux chaînes de caractères.
* **Boolean:** Représente une valeur booléenne, `true` ou `false`.
* **null:** Représente l'absence intentionnelle de valeur.
* **undefined:** Représente une variable qui n'a pas encore été initialisée.
* **Symbol:** Représente un identifiant unique et immuable.
* **BigInt:** Représente des entiers arbitrairement grands.

### Tableaux (Arrays)
* **Tableaux:** Collections ordonnées de valeurs.
  * **Boucle `for`:** Parcourt chaque élément d'un tableau.
  * **`length`:** Propriété qui donne le nombre d'éléments dans un tableau.
  * **`sort()`:** Trie les éléments d'un tableau.
  * **`push()`:** Ajoute un ou plusieurs éléments à la fin d'un tableau.
  * **`pop()`:** Retire le dernier élément d'un tableau.

### Objet Mathématique (Math)
* **`Math.PI`:** Constante représentant le nombre Pi.
* **`Math.max()`:** Retourne le plus grand nombre parmi un ensemble de nombres.
* **Autres méthodes statiques:** `Math.min()`, `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.random()`, etc.

### Console et Alertes
* **`console.log()`:** Affiche des messages dans la console du navigateur.
* **`alert()`:** Affiche une boîte de dialogue modale avec un message.
* **`prompt()`:** Demande à l'utilisateur d'entrer une valeur et retourne cette valeur.

### Manipulation du DOM (Document Object Model)
* **`document.title`:** Accède ou modifie le titre du document.
* **`document.write()`:** Écrit du contenu HTML directement dans le document.
* **`document.getElementById()`:** Récupère un élément par son ID.
* **`document.querySelector()`:** Récupère le premier élément correspondant à un sélecteur CSS.
* **`document.querySelectorAll()`:** Récupère une liste d'éléments correspondant à un sélecteur CSS.

### Sélecteurs CSS
* **`#id`:** Sélectionne un élément par son ID.
* **`.class`:** Sélectionne des éléments avec une classe spécifique.
* **`p`:** Sélectionne tous les éléments de paragraphe.
* **`input[type=checkbox]`:** Sélectionne les éléments d'entrée de type case à cocher.
* **`input[name=txtNom]`:** Sélectionne les éléments d'entrée avec l'attribut `name` égal à "txtNom".

### Propriétés et Méthodes du DOM
* **`innerHTML`:** Obtient ou définit le contenu HTML d'un élément.
* **`value`:** Obtient ou définit la valeur d'un élément de formulaire (input, select, textarea).

### Élément `select`
* **`options`:** Collection d'options dans un élément `select`.
* **`selectedIndex`:** Index de l'option actuellement sélectionnée.
* **`value`:** Valeur de l'option sélectionnée.

### Cases à cocher et boutons radio
* **`value`:** Valeur associée à l'élément.
* **`checked`:** Propriété booléenne indiquant si l'élément est coché.
