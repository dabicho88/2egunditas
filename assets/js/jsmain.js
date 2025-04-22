(function(){

var burger = document.querySelector('.burger');
  burger.addEventListener('click', function(){
    if(document.querySelector('nav.navegadorPrincipal').classList.contains('visibol') === false){
      document.querySelector('nav.navegadorPrincipal').classList.add('visibol');
    }
    else{
      document.querySelector('nav.navegadorPrincipal').classList.remove('visibol');
    }
    if(this.classList.contains('tache') === false){
      this.classList.add('tache');
    }
    else{
      this.classList.remove('tache');
    }
  });
})();


   