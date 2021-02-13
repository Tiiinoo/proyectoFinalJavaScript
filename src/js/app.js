//Función para crear dinámicamente los selects.
function chargeGeckoData(htmlElement) {
   $.ajax({
       type: 'GET',
       crossDomain: true,
       url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
       dataType: 'json',
       success: function(data) {
         apiDataJSON = data
          for (let i in apiDataJSON) {
                  select += `<option class="coinSelected">${apiDataJSON[i].symbol.toUpperCase()}</option>`;
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
//Función borrar datos trade calculado
function tradingFillout() {
   tradingBuyPrice.val('');
   tradingSellPrice.val('');
   tradingQuantity.val('');
}
function holdingFillout() {
   holdingBuyPrice.val('');
   holdingQuantity.val('');
}
// Función para guardar datos en local storage
 function saveonLocalStorage() {
   localStorage.setItem('coinSelection', JSON.stringify(userselectedCoins));
   localStorage.setItem('tradeResult', (JSON.stringify(userTraderesult)));
   localStorage.setItem('tradePercentage', JSON.stringify(userTradePercentage))
}