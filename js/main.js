//mi creo le variabili contententi le parti principali
var buttonMenu = $('#buttonMenu');
var nav = $('nav');
var elemento = $('nav .elemento');
var dropMenu = $('.dropDownMenu');
var elementoDropMenu = $('.dropDownMenu .dropDownItem');

console.log(buttonMenu);
console.log(elemento);

//gestisco il click per il primo menù
buttonMenu.click(function(){
  //alert('ciao');
  nav.toggle();
});

//gestisco mouse over
elemento.mouseover(function(){
  console.log("over");
  $(this).children(dropMenu).show();
});
// gestisco mouse out
nav.mouseout(function(){
  console.log("drop");
  $(dropMenu).hide();
});
