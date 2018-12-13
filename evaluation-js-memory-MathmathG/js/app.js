var app = {

  //indique si je peux retourner une carte ou pas
  //Ca me servira pour gérer les détails entre mes clics
  clickEnable:true,

  // Compteur qui m'indique combien de paires j'ai trouvé
  cardMatch: 0,

  // 2 petites propriétés qui me serviront à stocker
  // les 2 cartes qui vont être retournées
  card1: null,
  card2: null,

  init : function(){
    console.log('init');
    app.startGame();

  },
  startGame:function(){

    app.generateCards();
    $('.progressBar').animate({width:"100%"},130 * 1000,
  function(){
    window.alert("bouuuuuuh, you lose !!!");
    window.location.reload();
  });
},

  generateCards: function(){
    //On a 14 paires de cartes
    //Comme ça ira de 0 à 13, il y aura bien 14 valeurs
    var max = 13;

    //Je génére mon tableau JS, qui va de 0 à 13
    //Ca va me donner zeroToMax = [0,1,2,3,4....13]
    var zeroToMax = app.generateArray(max);

    // Comme il y a 2 cartes de chaque, je vais me refaire
    // un autre tableau avec les même valeurs !
    var zeroToMax2 = app.generateArray( max );
        // Maintenant que j'ai mes 2 tableaux de cartes,
    // je vais assembler ces 2 tableaux, j'aurais donc
    // un seul grand tableau avec les chiffres de 0 à max
    // et j'aurais tous les chiffres en double dedans !
    // Comme ça j'aurais un tableau qui va représenter
    // toutes mes paires de cartes !
    // Ca va me donner allCardsNumber = [0, 1, 2, ..., 13, 0, 1, 2, 3, ..., 13];
    var allCardsNumber = zeroToMax.concat(zeroToMax2);

    // Maintenant je vais mélanger ce tableau !
    // On peut commenter cette ligne pour trouver
    // facilement les pairs une ligne sur 2 ;)
    allCardsNumber = app.shuffle(allCardsNumber);

        for (var i = 0; i < allCardsNumber.length; i++) {
  /*Je vais crée les cartes avec une face cache et une face image j'ai donc besoins de trois div*/
  var carte = $('<div class="carte">');
  var cache = $('<div class="cache">');
  var image = $('<div class="image">');

  // Sur la div contenant l'image du fruit, je vais
  // positionner le background correctement. Je vais
  // me baser sur le chiffre de notre tableau "allCardsNumber"
  // pour positioner le background (chaque image fait 100px de haut)
  image.css('background-position', '0 -' + allCardsNumber[ i ] + '00px');
  // Ca me donnera background-position: '0 -000px'
  // Ca me donnera background-position: '0 -100px'
  // Ca me donnera background-position: '0 -200px'
  // ... etc

  //J'ajoute la div cache et la div image dans leur div parent cartes
  carte.append(cache);
  carte.append(image);

  // Je vais tout de suite indiquer ce qu'il se passe
  // quand on ira cliquer sur cette carte là. Comme
  // ma variable "carte" est un objet jQuery (cf plus
  // haut), je peux directement utiliser la méthode
  // "on('click')" dessus
carte.on('click', app.cardClick);

  $('#container').append(carte);
}
},

  generateArray: function(max){
    //Je crée un tableau vide
    var tab = [];

    for (var nb = 0; nb<= max; nb++){
      //J'ajoute le nb dans mon tableau
      tab.push(nb);
    }
    return tab;
  },

  //Gèrer l'affichage d'une carte au click

  cardClick: function(evt){
    // Je regarde si je peux cliquer sur une carte ou pas
    // Ca permet de gérer le délais quand j'ai retourné
    // 2 cartes
      if (app.clickEnable){
      if ($(evt.target).hasClass('image')) return;
      //Je récupère la div parent pour mes traitements
      var carte = $(evt.target).parent();
      //Je récupère la div image de la carte
      var image = carte.children(".image");

      // On doit retourner la carte, je lance un petit
      // effet de rotation en ajoutant une classe sur
      // la carte et avec CSS, je gère la transition
      carte.addClass('flipped');
      // Je masque le carré gris
      carte.children(".cache").hide();
      // j'affiche l'image
      carte.children(".image").show();


      // Je regarde quelle carte je suis en train de retourner
      // Si je n'ai rien dans "app.card1", c'est que je suis en
      // train de retourner la première, sinon c'est la deuxième
      if (app.card1 == null) {

        // On retourne la première carte, je me contente
        // d'enregistrer la div "image" de la carte
        app.card1 = image;

      }
      else {
        //c'est la deuxieme carte donc on va faire les tests pour voir si les deux cartes correspondent
        //je commence par enregistré la deuxieme cartes
        app.card2 = image;

        //j'indique qu'on ne peux plus cliquer sur la cartes
        app.clickEnable = false;

        // Je regarde si les 2 cartes sont identiques. Pour ça,
        // plusieurs solutions... Celle que j'utilise c'est de
        // comparer la propriété "background-position" des 2 images
        if (app.card2.css('background-position') != app.card1.css('background-position')) {
          // Les deux cartes ne sont pas les mêmes, je vais
          // les masquer dans 1 seconde
          setTimeout(function() {
            // Je retourne la première carte face cachée
            app.card1.hide();
            app.card1.prev().show();
            app.card1.parent().removeClass('flipped');

            app.card2.hide();
            app.card2.prev().show();
            app.card2.parent().removeClass('flipped');


            // J'indique seulement à ce moment qu'on peut
            // de nouveau cliquer sur les images
            app.clickEnable = true;

              // Je pense bien à supprimer ce que j'ai dans
            // mes variables, sinon ça va tout casser :p
            app.card1 = null;
            app.card2 = null;
        },
        // On fait bien tout ça dans 1 seconde
          800);

        } else {

          // Les deux cartes sont les mêmes !
          // J'indique qu'on peut tout de suite retourner
          // une nouvelle carte
          app.clickEnable = true;

          // Je pense bien à supprimer ce que j'ai dans
          // mes variables, sinon ça va tout casser :p
          app.card1 = null;
          app.card2 = null;
          // J'indique qu'on a trouvé une paire de plus !
          app.cardMatch += 1;

          //La derniere chose est de regarder si on a gagné
          app.isWin();


      }
    }
  }

  },
  isWin:function(){
    if (app.cardMatch == 14){
      window.alert("Yeaaaaah you win !! PERFECT !!");
      window.location.reload();
    }
  },

  shuffle: function(list) {

    for (let i = list.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }

    return list;
  }
}
$(app.init);
