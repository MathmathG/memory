# Feedback du prof

## Etape 1 : On installe

### Enoncé

- Création du header en HTML
- Création du plateau (conteneur des cartes) en HTML
- Création des 28 `.carte` avec une boucle
- CSS des cartes en 100 x 100 pixels
- Création de 2 enfants `.cache` et `.image` dans chaque `.carte`

### Notions

- [x] Syntaxe HTML (header et plateau)
- [x] Boucle `for` de création des 28 `.carte`
- [x] Utilisation de `document.createElement()` ou `$('<div>')` pour créer les cartes
- [x] Styliser les `.carte` à l'aide de la classe CSS
- [x] Utilisation de `appendChild` ou `append` pour ajouter les `.cache` et `.image` dans `.carte`

### Commentaires

- Nickel :thumbsup:





## Etape 2 : On retourne

### Enoncé

- Gérer l'évènement du `click` sur une carte
- Afficher `.image` et masquer `.cache`
- Mettre un effet de `hover` sur les cartes

### Notions

- [x] Utiliser `.addEventListener()` ou `.on()` pour gérer le clique sur une carte
- [ ] Gérer l'affichage de `.image` et `.cache` avec les méthodes `.show()` et `.hide()` ou bien en vanilla avec `element.style.display = 'none';` par exemple.
- [ ] Syntaxe CSS pour le `hover`

### Commentaires

- Tu t'en es sorti en changeant les classes sur `.carte`. Tu pouvais créer des éléments enfants `.image` et `.cache` pour t'en sortir.
- Tu pouvais aussi mettre un `hover` directement en CSS pour faire l'effet de survol ;)



## Etape 3 : La face visible

### Enoncé

- Utiliser les fichier `cards.png` pour afficher les images des fruits
- Définir la position de chaque image avec `background-position`
- Mélanger les cartes sur le plateau

### Notions

- [ ] Gérer l'affichage des cartes avec la méthode du _sprite_ en CSS
- [ ] Utilisation du `background-position` pour afficher chaque image sur `.carte`
- [ ] Mélanger les cartes avec un `Math.random()`

### Commentaires

- Pour afficher chaque image, il faut jouer avec leur position (`background-position`) pour aller cibler le bon "carré" de 100 x 100 pixels dans l'image.





## Etape 4 : Une paire ?

### Enoncé

- Gestion des paires
- Interval de 1 seconde après avoir retourné 2 mauvaises cartes

### Notions

- [ ] Enregistrer la première carte retournée et la comparer à la deuxième
- [ ] Masquer les mauvaises paires en interchangeant `.image` et `.cache`
- [ ] Sauvegarder le fait qu'on trouve une paire
- [ ] Gestion du timer qui empêche de retourner d'autres cartes pendant 1 secondes

### Commentaires

- Quand on retourne une carte, on doit savoir si c'est la première ou la deuxième. On enregistre donc ça dans des propriétés de notre objet (`app.card1` et `app.card2` par exemple)
- Pour empêcher de nouveaux clics, le mieux c'est d'avoir un booléen qui nous indique si on peut retourner un carte ou pas (`app.clickEnabled` par exemple). Il nous suffit juste de le gérer comme un interrupteur ensuite :)





## Etape 5 : Veni, Vidi, Vici

### Enoncé

- A chaque paire trouvée, on regarde si on a gagné ou pas
- Afficher un message de félicitations en cas de voctoire

### Notions

- [ ] Garder en mémoire la nombre de paires trouvées (avec un `app.cardMatch = 0` par exemple)
- [ ] Si toutes les paires ont été trouvées (`app.cardMatch === 14`), afficher un message `alert` de victoire

### Commentaires

- Il y a plusieurs façons de savoir si on a gagné ou pas, l'important est de choisir une solution sûre et lisible (en terme de code)






## Etape 6 : Compte à rebours

### Enoncé

- Afficher une barre de progression de 60 secondes
- Chaque seconde, mettre à jour la barre de progression
- Si 60 secondes s'écoulent sans avoir gagné la partie, afficher un message d'échec
- Recharger la page en cas d'échec

### Notions

- [ ] Utiliser une `div` dont le `width` va de 0 à 100%
- [ ] Créer un interval d'une seconde qui met à jour le `width` de la `div` de progression
- [ ] Si 60 secondes d'écoulées, afficher un message d'échec
- [ ] Recharger la page avec un `window.location.reload()` ou une redirection

### Commentaires

- Le compte à rebours peut se gérer séparément du code de ton application. Un timer à 60 secondes qui affiche un message d'échec et recharge la page.






## Général

- Qualité du code
  - [x] Indentation et lisibilité du code
  - [x] Présence de commentaires dans le code

### Commentaires

- Il faut que tu t'entraine aux boucles et à l'algo pour coder plus simplement et proprement. Là tu as répété beaucoup de traitements, c'est dommage.
- Tu peux consulter la correction et essayer de refaire cet exercice pour voir si tu as retenu des choses ;)
