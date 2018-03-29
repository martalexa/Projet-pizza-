let pizza ={};
pizza.modules = {};

pizza.modules.actions = (function (){

   function init(){

      // NavBar
      $('.sidenav').sidenav();

      // Les modaux
      $('#modal1').modal();
      $('#modal2').modal();
      $('#modal3').modal();
      $('#modal4').modal();


      //Initialise les boutons de la page d'accueil à "Maintenant"
      $('#btnOption1').css("background-color", "#4CAF50");
      $('#btnOption2').css("background-color", "#81c784");
      $('#btnOption3').css("background-color", "#81c784");
   }

   function selectionnerMtn(){
      $('#btnOption1').css("background-color", "#4CAF50");
      $('#btnOption2').css("background-color", "#81c784");
      $('#btnOption3').css("background-color", "#81c784");
   }

   function selectionnerPlusTard(){
      $('#btnOption1').css("background-color", "#81c784");
      $('#btnOption2').css("background-color", "#4CAF50");
      $('#btnOption3').css("background-color", "#81c784");
   }

   function selectionnerHeure(){
      $('#btnOption1').css("background-color", "#81c784");
      $('#btnOption2').css("background-color", "#81c784");
      $('#btnOption3').css("background-color", "#4CAF50");
   }

   return {init, selectionnerMtn, selectionnerPlusTard, selectionnerHeure, ajouterCart};
})();

pizza.modules.app = (function (){

   let btnOpt1 = ('#btnOption1');
   let btnOpt2 = ('#btnOption2');
   let btnOpt3 = ('#btnOption3');

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

})();
