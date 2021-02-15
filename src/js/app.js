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
               $(htmlElement).append(select);
         },
   })
}
//Función para cargar buscador en selects
function chargeSelect(htmlElement) {
   $(htmlElement).select2();
};
//Función borrar datos trade calculado
function tradingFillout() {
   tradingBuyPrice.val('');
   tradingSellPrice.val('');
   tradingQuantity.val('');
}
//Función borrar datos hold calculado
function holdingFillout() {
   holdingBuyPrice.val('');
   holdingQuantity.val('');
}
// Función para guardar datos en local storage
 function saveonLocalStorage() {
   localStorage.setItem('tradingCoinSelection', JSON.stringify(tradingUserSelectedCoins))
   localStorage.setItem('tradingResult', (JSON.stringify(tradingUserResults)))
   localStorage.setItem('tradingPercentage', JSON.stringify(tradingUserPercentages))
   localStorage.setItem('holdingCoinSelection', JSON.stringify(holdingUserSelectedCoins))
   localStorage.setItem('holdingResult', (JSON.stringify(holdingUserResults)))
   localStorage.setItem('holdingPercentage', JSON.stringify(holdingUserPercentages))
}