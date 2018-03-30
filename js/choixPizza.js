let pizza ={};
pizza.modules = {};

pizza.modules.actions = (function (){

   function init(){
      // NavBar
      $('.sidenav').sidenav();
   }


   function ajouterCartSimple(e){
      $(e.target).toggleClass("dejaAjouterPanier");
      // Quand ajoute au panier, le bouton ajouter au panier du même pop up change aussi de couleur
      $(e.path[2].nextSibling.nextSibling.children[1].children[1]).toggleClass("dejaAjouterPanier");
   }

   function ajouterCartPopUp(e){
      $(e.target).toggleClass("dejaAjouterPanier");
      // Quand ajoute au panier depuis le popup, le bouton ajouter au panier du même card
      $(e.path[3].children[1].children[0].children[1]).toggleClass("dejaAjouterPanier");
   }

   function coDeco(e){
      $('#navDeco').toggleClass("pasDansLeMenu");
      $('#navCo').toggleClass("pasDansLeMenu");
   }



   return {init, ajouterCartSimple, ajouterCartPopUp, coDeco};
})();

pizza.modules.app = (function (){

   let btnAjoutPanier = ('#ajoutPanier')
   let btnAjoutPanierPopUp = ('#ajoutPanierPopUp')
   let btnAjoutPanier2 = ('#ajoutPanier2')
   let btnAjoutPanierPopUp2 = ('#ajoutPanierPopUp2')
   let btnAjoutPanier3 = ('#ajoutPanier3')
   let btnAjoutPanierPopUp3 = ('#ajoutPanierPopUp3')
   let btnAjoutPanier4 = ('#ajoutPanier4')
   let btnAjoutPanierPopUp4 = ('#ajoutPanierPopUp4')
   let btnAjoutPanier5 = ('#ajoutPanier5')
   let btnAjoutPanierPopUp5 = ('#ajoutPanierPopUp5')

   let nvCo = ('#navCo')
   let nvDCo = ('#navDeco')


   // Initialisation des parametres
   $(document).ready(function(){
      pizza.modules.actions.init();
   });

   // Ajouter au panier depuis le card
   ajoutPanier.onclick = (e) =>{
      pizza.modules.actions.ajouterCartSimple(e);
   };
   ajoutPanier2.onclick = (e) =>{
      pizza.modules.actions.ajouterCartSimple(e);
   };
   ajoutPanier3.onclick = (e) =>{
      pizza.modules.actions.ajouterCartSimple(e);
   };
   ajoutPanier4.onclick = (e) =>{
      pizza.modules.actions.ajouterCartSimple(e);
   };
   ajoutPanier5.onclick = (e) =>{
      pizza.modules.actions.ajouterCartSimple(e);
   };
   // Ajouter au panier depuis le popUp
   ajoutPanierPopUp.onclick = (e) =>{
      pizza.modules.actions.ajouterCartPopUp(e);
   };
   ajoutPanierPopUp2.onclick = (e) =>{
      pizza.modules.actions.ajouterCartPopUp(e);
   };
   ajoutPanierPopUp3.onclick = (e) =>{
      pizza.modules.actions.ajouterCartPopUp(e);
   };
   ajoutPanierPopUp4.onclick = (e) =>{
      pizza.modules.actions.ajouterCartPopUp(e);
   };
   ajoutPanierPopUp5.onclick = (e) =>{
      pizza.modules.actions.ajouterCartPopUp(e);
   };

   // Ajouter au panier depuis le card
   navCo.onclick = () =>{
      pizza.modules.actions.coDeco();
   };
   navDeco.onclick = () =>{
      pizza.modules.actions.coDeco();
   };

})();
