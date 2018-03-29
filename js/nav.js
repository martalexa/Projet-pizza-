
pizza.modules.actions = (function (){

   function init(){
      // NavBar
      $('.sidenav').sidenav();
   }

   function coDeco(e){
      $('#navDeco').toggleClass("pasDansLeMenu");
      $('#navCo').toggleClass("pasDansLeMenu");
   }

   return {init, coDeco};
})();

pizza.modules.app = (function (){

   let nvCo = ('#navCo')
   let nvDCo = ('#navDeco')

   // Initialisation des parametres
   $(document).ready(function(){
      pizza.modules.actions.init();
   });

   // Ajouter au panier depuis le card
   navCo.onclick = () =>{
      pizza.modules.actions.coDeco();
   };
   navDeco.onclick = () =>{
      pizza.modules.actions.coDeco();
   };

})();
