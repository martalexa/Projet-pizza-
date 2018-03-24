var elem = document.querySelector('.sidenav');
 var instance = M.Sidenav.init(elem, "right");

'use strict'

let pizza ={};
pizza.modules = {};

pizza.modules.actions = (function (){

   function init(){

      // NavBar
      //$('.sidenav').sidenav();

      // Les modaux
      $('#modal1').modal();
      $('#modal2').modal();
      $('#modal3').modal();
      $('#modal4').modal();

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

   function selectionIngredient(ingred){
      $(ingred).toggleClass("ingredientSelect");

      // Sauce Tomate
      if(ingred.id=== "SelectSauceTomate"){
         $("#SelectSauceCreme").removeClass("ingredientSelect");
         $("#pizza").css("background-image", "url('../medias/baseTomate.png')");
         $("#ingredSuivant").removeClass("disabled");

      }
      if(ingred.id=== "SelectSauceCreme"){
         $("#SelectSauceTomate").removeClass("ingredientSelect");
         $("#pizza").css("background-image", "url('../medias/baseCreme.png')");
         $("#ingredSuivant").removeClass("disabled");
      }
   }
   return {init, selectionnerMtn, selectionnerPlusTard, selectionnerHeure, selectionIngredient};
})();

pizza.modules.app = (function (){

   let btnOption1 = ('#btnOption1');
   let btnOption2 = ('#btnOption2');
   let btnOption3 = ('#btnOption3');
   let SelecSauceTomate = ('#SelectSauceTomate');
   let SelecSauceCreme = ('#SelectSauceCreme');

   // Initialisation des parametres
   $(document).ready(function(){
      pizza.modules.actions.init();
   });


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

   // Selectionner les ingrédients de la pizza
   SelectSauceTomate.onclick = (e) =>{
      pizza.modules.actions.selectionIngredient(e.target);
   };
   SelectSauceCreme.onclick = (e) =>{
      pizza.modules.actions.selectionIngredient(e.target);
   };

})();
