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