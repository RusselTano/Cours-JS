# Explication de la Sélection et de la Transformation de Checkbox en JavaScript

## Objectif du Code

Ce code sert à récupérer uniquement les valeurs des cases à cocher sélectionnées parmi toutes les cases présentes dans la page.

### Code Explicite avec `filter` et `map`

```javascript
const selectedOptions = Array.from(checkboxes)
  .filter(function (checkbox) {
    return checkbox.checked; // Garde seulement les cases cochées
  })
  .map(function (checkbox) {
    return checkbox.value; // Récupère la valeur des cases cochées
  });
```

### Explication du Code

1. **Filter avec fonction complète :**

   ```javascript
   .filter(function(checkbox) {
       return checkbox.checked;
   })
   ```

   - La méthode `filter` prend en paramètre une fonction de rappel (`callback`) qui retourne un booléen (`true` ou `false`).
   - Ici, la fonction anonyme (`function(checkbox) { return checkbox.checked; }`) vérifie la propriété `checked` de chaque élément `checkbox`.
   - Si `checkbox.checked` est `true`, `filter` conserve cet élément dans le tableau retourné.

2. **Map avec fonction complète :**
   ```javascript
   .map(function(checkbox) {
       return checkbox.value;
   })
   ```
   - La méthode `map` prend également une fonction de rappel en paramètre.
   - Cette fonction retourne une transformation pour chaque élément du tableau initial. Ici, `function(checkbox) { return checkbox.value; }` retourne la valeur (`value`) de chaque case cochée.

### Version fléchée pour comparaison

La version concise avec des fonctions fléchées est :

```javascript
const selectedOptions = Array.from(checkboxes)
  .filter((checkbox) => checkbox.checked)
  .map((checkbox) => checkbox.value);
```

Dans cette version, les fonctions fléchées n'ont pas besoin de `return` explicite car elles retournent automatiquement la valeur si le corps est une expression unique.

### Exemple de fonctionnement

Si nous avons trois cases à cocher comme suit :

- `<input type="checkbox" value="Option 1" checked>`<br/><br/>
- `<input type="checkbox" value="Option 2">`<br/><br/>
- `<input type="checkbox" value="Option 3" checked>`<br/><br/>

Quand ce code est exécuté :

Étape 1 : `Array.from(checkboxes)` convertit les cases en un tableau JavaScript.

```javascript
[
  { type: "checkbox", value: "Option 1", checked: true },
  { type: "checkbox", value: "Option 2", checked: false },
  { type: "checkbox", value: "Option 3", checked: true },
];
```

Étape 2 : `.filter(checkbox => checkbox.checked)` garde uniquement les éléments avec `checked: true`.

```javascript
[
  { type: "checkbox", value: "Option 1", checked: true },
  { type: "checkbox", value: "Option 3", checked: true },
];
```

Étape 3 : `.map(checkbox => checkbox.value)` extrait la valeur de chaque case cochée.

```javascript
["Option 1", "Option 3"];
```

Résultat final
Le tableau `selectedOptions` contiendra uniquement les valeurs des cases cochées :

```javascript
["Option 1", "Option 3"];
```

<h2>Utilité</h2>
<h4>Cette méthode est particulièrement utile pour des formulaires ou des interfaces où l’utilisateur peut sélectionner plusieurs options. Elle permet de rassembler rapidement toutes les valeurs sélectionnées et de les utiliser (par exemple, pour les afficher, les envoyer à un serveur, etc.).</h4>

Le code ci-dessus va créer un tableau contenant seulement les valeurs des cases cochées : `["Option 1", "Option 3"]`.
