//Función para crear dinámicamente los selects.
function cargarGeckoData(htmlElement) {
   $.ajax({
       type: 'GET',
       crossDomain: true,
       url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
       dataType: 'json',
       success: function(data) {
          console.log(JSON.stringify(data))
          apidataJSON = data
          console.log(apidataJSON)
          for (let i in apidataJSON) {
                  select += `<option id="${apidataJSON[i].symbol.toUpperCase()}" class="coinSelected">${apidataJSON[i].symbol.toUpperCase()}</option>`;
                  };

                  $(htmlElement).html(select);
                  
         },
   })
}

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
// function loadImage(){
//    let image = "";
//       let i = coins.find(i => i.coinid == tradingCoinChoice.val())
//       image = i.img
//       $(tradingImageChoice).html(`<img class="imageChoice" src="${image}">`);

//       loadDescription();
// }
// //Funciòn carga descripción
// function loadDescription(){
//    let descrip = ""
//       let j = coins.find( j => j.coinid == tradingCoinChoice.val())
//       descrip = j.description
//       $(tradingDescription).html(`${descrip}`);
// }
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