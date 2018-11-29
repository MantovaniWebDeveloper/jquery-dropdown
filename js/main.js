//mi creo le variabili contententi le parti principali
var buttonMenu = $('#buttonMenu');
var nav = $('nav');
var elemento = $('nav .elemento');

console.log(buttonMenu);
console.log(elemento);

//gestisco il click per il primo menù
buttonMenu.click(function(){
  //alert('ciao');
  nav.toggle();
});

//gestisco l'hover
elemento.mouseover(function(){
  console.log("over");
});
