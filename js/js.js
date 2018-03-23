
  var elem = document.querySelector('.modal');
  var instance = M.Modal.init(elem);

  // Or with jQuery
  $(document).ready(function(){
    $('#modal1').modal();
  });

  $(document).ready(function(){
    $('#modal2').modal();
  });

  $(document).ready(function(){
    $('#modal3').modal();
  });

  $(document).ready(function(){
    $('#modal4').modal();
  });




/* Les sauces dragables	*/

// Initialiser les éléments dragables
/*document.querySelector('#sauceTomate').draggable = true;
document.querySelector('#sauceCreme').draggable = true;

// Initialiser les photos du dragage
let dragImgTomate = new Image();
dragImgTomate.src = '../medias/sauceTomate.png';
let dragImgCreme = new Image();
dragImgCreme.src = '../medias/sauceCreme.png';
let ingredient;




// Proprietes de deplacement
document.querySelector('#sauceTomate').addEventListener('dragstart', function(e) {
   e.dataTransfer.setData('text/plain', "Base sauce tomate"); // Text transmis à la réception
   e.dataTransfer.setDragImage(dragImgTomate, 58, 130); // Image pendant le drop
});
document.querySelector('#sauceCreme').addEventListener('dragstart', function(e) {
   e.dataTransfer.setData('text/plain', "Base creme"); // Text transmis à la réception
   e.dataTransfer.setDragImage(dragImgCreme, 58, 130); // Image pendant le drop
});

*/

/* La pizza qui accepte le drop */
/*
let pizza = document.querySelector('#pizza');

// Indique la une zone du drop
pizza.addEventListener('dragover', function(e) {
   e.preventDefault();
});

//	Style lorsqu'entre dans la zone de drop
pizza.addEventListener('dragenter', function() {
   pizza.style.backgroundColor = '#F9F988';
});

// Style lorsque sort de la zone de drop
pizza.addEventListener('dragleave', function() {
   pizza.style.backgroundColor = '#DDDD55';

});

// Ce qu'il se passe quand le drop est fait
pizza.addEventListener('drop', function(e) {
   //Recupere le texte du dragstart
   ingredient=e.dataTransfer.getData('text/plain');

   // Changement du style en fonction de la couleur
   if(ingredient=== "Base sauce tomate"){
      pizza.style.backgroundColor = 'red';
   }
   if(ingredient=== "Base creme"){
      pizza.style.backgroundColor = '#EEEEAA';
   }
});
*/
