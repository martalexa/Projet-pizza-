//var elem = document.querySelector('.sidenav');
//var instance = M.Sidenav.init(elem, "right");


let pizza ={};
pizza.modules = {};

let pizzaDrop, ingrdSuivant, flecheNextIngred, garniture, btnOption1, btnOption2, btnOption3;

pizza.modules.actions = (function (){

   function init(){

      // NavBar
      $('.sidenav').sidenav();

      // Les modaux
      $('#modal1').modal();
      $('#modal2').modal();
      $('#modal3').modal();
      $('#modal4').modal();


      // Initialiser les éléments dragables
      document.querySelector('#sauceTomate').draggable = true;
      document.querySelector('#sauceCreme').draggable = true;
      document.querySelector('#chorizo').draggable = true;
      document.querySelector('#merguez').draggable = true;

      let ingredient;


      //Initialise les boutons de la page d'accueil à "Maintenant"
     $('#btnOption1').css("background-color", "#4CAF50");
      $('#btnOption2').css("background-color", "grey");
      $('#btnOption3').css("background-color", "grey");
   }

   function selectionnerMtn(){
      $('#btnOption1').css("background-color", "#4CAF50");
      $('#btnOption2').css("background-color", "grey");
      $('#btnOption3').css("background-color", "grey");
   }

   function selectionnerPlusTard(){
      $('#btnOption1').css("background-color", "grey");
      $('#btnOption2').css("background-color", "#4CAF50");
      $('#btnOption3').css("background-color", "grey");
   }

   function selectionnerHeure(){
      $('#btnOption1').css("background-color", "grey");
      $('#btnOption2').css("background-color", "grey");
      $('#btnOption3').css("background-color", "#4CAF50");
   }

   function debutDrag(e){

      // La base
      if(e.srcElement.id === "sauceTomate"){
         // Initialiser les photos du dragage
         let dragImgTomate = new Image();
         dragImgTomate.src = '../medias/sauceTomate.png';
         e.dataTransfer.setData('text/plain', "Base sauce tomate"); // Text transmis à la réception
         e.dataTransfer.setDragImage(dragImgTomate, 58, 130); // Image pendant le drop
      }

      if(e.srcElement.id === "sauceCreme"){
         // Initialiser les photos du dragage
         let dragImgCreme = new Image();
         dragImgCreme.src = '../medias/sauceCreme.png';
         e.dataTransfer.setData('text/plain', "Base creme"); // Text transmis à la réception
         e.dataTransfer.setDragImage(dragImgCreme, 58, 130); // Image pendant le drop
         console.log("sqd")
      }

      // La charcuterie
      if(e.srcElement.id === "chorizo"){
         // Initialiser les photos du dragage
         let dragImgChorizo = new Image();
         dragImgChorizo.src = '../medias/chorizoCoupe.png';
         e.dataTransfer.setData('text/plain', "Chorizo"); // Text transmis à la réception
         e.dataTransfer.setDragImage(dragImgChorizo, 58, 130); // Image pendant le drop
      }

      if(e.srcElement.id === "merguez"){
         // Initialiser les photos du dragage
         let dragImgMerguez = new Image();
         dragImgMerguez.src = '../medias/merguezCoupe.png';
         e.dataTransfer.setData('text/plain', "Merguez"); // Text transmis à la réception
         e.dataTransfer.setDragImage(dragImgMerguez, 58, 130); // Image pendant le drop
      }
   }

   function finDrag (e){
      //Recupere le texte du dragstart
      ingredient=e.dataTransfer.getData('text/plain');

      // Changement du style en fonction de la couleur
      if(ingredient=== "Base sauce tomate"){
         pizzaDrop.style.backgroundImage = "url('../medias/baseTomate.png')";
         pizzaDrop.style.backgroundColor = '#ffffff'
         flecheNextIngred.removeClass("disabled");
      }
      if(ingredient=== "Base creme"){
         pizzaDrop.style.backgroundImage = "url('../medias/baseCreme.png')";
         pizzaDrop.style.backgroundColor = '#ffffff'
         flecheNextIngred.removeClass("disabled");
      }
      if(ingredient=== "Chorizo"){
         $("#chorizo1").removeClass("displayNone");
         $("#chorizo2").removeClass("displayNone");
         $("#chorizo3").removeClass("displayNone");
         pizzaDrop.style.backgroundColor = '#ffffff'
         flecheNextIngred.removeClass("disabled");
      }
      if(ingredient=== "Merguez"){
         $("#merguez1").removeClass("displayNone");
         $("#merguez2").removeClass("displayNone");
         $("#merguez3").removeClass("displayNone");
         pizzaDrop.style.backgroundColor = '#ffffff'
         flecheNextIngred.removeClass("disabled");
      }
      else{
         pizzaDrop.style.backgroundColor = '#ffffff';
      }

   }

   function nextIngredient() {
      $("#conteneurBase").hide();
      $("#conteneurChacuterie").show();
      flecheNextIngred.addClass("disabled");
   }

   // selectionnerMtn, selectionnerPlusTard, selectionnerHeure, selectionIngredient};
   return {init, debutDrag, finDrag, nextIngredient};
})();

pizza.modules.app = (function (){

   btnOption1 = ('#btnOption1');
   btnOption2 = ('#btnOption2');
   btnOption3 = ('#btnOption3');
   ingrdSuivant = ("ingredSuivant");
   flecheNextIngred = $("#ingredSuivant");
   garniture = document.querySelector('#garniturePizza');

   // Initialisation des parametres
   $(document).ready(function(){
      pizza.modules.actions.init();
   });

   /* Drap And Drop */

   // Initialiser l'élément dropable
   pizzaDrop = document.querySelector('#pizza');

   pizzaDrop.addEventListener('dragover', function(e) {
      e.preventDefault();
   });

   /* Les ingredients */
   // Quand commence le drop
   document.querySelector('#sauceTomate').addEventListener('dragstart', function(e) {
      pizzaDrop.style.backgroundColor = '#c5e1a5';
      pizza.modules.actions.debutDrag(e);
   });
   document.querySelector('#sauceCreme').addEventListener('dragstart', function(e) {
      pizzaDrop.style.backgroundColor = '#c5e1a5';
      pizza.modules.actions.debutDrag(e);
   });
   document.querySelector('#chorizo').addEventListener('dragstart', function(e) {
      pizzaDrop.style.backgroundColor = '#c5e1a5';
      pizza.modules.actions.debutDrag(e);
   });
   document.querySelector('#merguez').addEventListener('dragstart', function(e) {
      pizzaDrop.style.backgroundColor = '#c5e1a5';
      pizza.modules.actions.debutDrag(e);
   });


   //	Style lorsqu'entre dans la zone de drop
   pizzaDrop.addEventListener('dragenter', function() {
      pizzaDrop.style.backgroundColor = '#dcedc8';
   });

   // Style lorsque sort de la zone de drop
   pizzaDrop.addEventListener('dragleave', function() {
      pizzaDrop.style.backgroundColor = '#c5e1a5'
   });


   // Ce qu'il se passe quand le drop est fait
   pizzaDrop.addEventListener('drop', function(e) {
      pizza.modules.actions.finDrag(e);
   });

   ingredSuivant.onclick =()=>{
      console.log('dssdf');
      pizza.modules.actions.nextIngredient();
   };

   btnOption1.onclick = () =>{
         pizza.modules.actions.selectionnerMtn();
      };



   // Boutons de la page d'accueil (Maintenant, plus tard, 19h)
  btnOption1.onclick = () =>{
      pizza.modules.actions.selectionnerMtn();
   };
   btnOption2.onclick = () =>{
      pizza.modules.actions.selectionnerPlusTard();
   };
   btnOption3.onclick = () =>{
      pizza.modules.actions.selectionnerHeure();
   };

})();
