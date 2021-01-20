// Delgetstei ajillah controller
var uiController = (function () {})();
// Sanhuutei ajillah controller
var financeController = (function () {})();
// Programm holbogch controller
var appController = (function (uiController, financeController) {
   var addItem = function(){
    console.log("bibn");
    //oruulah ugugdul delgetsnees avna

    //avsn ugugdluu sanhuugiin controllerd damjuulna

    //olj avsn ugugdluu orlogo zarlagad bairluulna

    //
   }
  document.querySelector(".add__btn").addEventListener("click", function () {
    addItem();
  });
  document.addEventListener("keypress", function(event){
    if(event.keyCode === 13 || event.which === 13) {
      addItem();
    }
  });
})(uiController, financeController);
