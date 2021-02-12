//Función para crear dinámicamente los selects.
//If => array tiene datos (mayor a cero), suelto la función.
// function crearSelect(idElement, arrayData) { 
//     if (arrayData.length > 0) { 
//        let select = "";
//           for (let i in arrayData) {
//              select += `<option id="${arrayData[i]}" class="coinSelected">${arrayData[i]}</option>`;
//           };
//           $(idElement).html(select);
//     }
//  }

//Función mostrar u ocultar tabla de cálculos
function showTradingTable() {
   tradingTable.toggleClass('d-none');
}

function showHoldingTable() {
  holdingTable.toggleClass('d-none');    
}

//Función carga imagen descripción
// function loadImage(coinChoice, htmlElement){
//    let image = "";
//       let i = coins.find(i => i.coinid == coinChoice)
//       image = i.img
//       $(htmlElement).html(`<img class="imageChoice" src="${image}">`);

// }
function loadImage(){
   let image = "";
      let i = coins.find(i => i.coinid == tradingCoinChoice.val())
      image = i.img
      $(tradingImageChoice).html(`<img class="imageChoice" src="${image}">`);

      loadDescription();
}
//Funciòn carga descripción
function loadDescription(){
   let descrip = ""
      let j = coins.find( j => j.coinid == tradingCoinChoice.val())
      descrip = j.description
      $(tradingDescription).html(`${descrip}`);
}
// //Funciòn carga descripción
// function loadDescription(coinChoice, htmlElement){
//    let descrip = "";
//       let i = coins.find( i => i.coinid == coinChoice)
//       descrip = i.description
//       $(htmlElement).html(`${descrip}`);
// }
//Función borrar datos trade calculado
function fillout() {
   tradingBuyPrice.val('');
   tradingCoinChoice.val('Seleccioná tu moneda');
   tradingSellPrice.val('');
   tradingQuantity.val('');
   loadImage();
}
// Función para guardar datos en local storage
 function saveonLocalStorage() {
   localStorage.setItem('coinSelection', JSON.stringify(userselectedCoins));
   localStorage.setItem('tradeResult', (JSON.stringify(userTraderesult)));
   localStorage.setItem('tradePercentage', JSON.stringify(userTradePercentage))
}