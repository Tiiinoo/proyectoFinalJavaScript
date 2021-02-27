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

function chargeTop100() {
   for (let i in apiDataJSON) {
         table += `<tr class="trTop">
                     <th scope="row" class="marketRank tdTop">${apiDataJSON[i].market_cap_rank}</th>
                     <td class="symbol tdTop">${apiDataJSON[i].symbol.toUpperCase()}</td>
                     <td class="image tdTop"><img class="imageTop" src="${apiDataJSON[i].image}"></td>
                     <td class="price tdTop">${apiDataJSON[i].current_price}</td>
                     <td class="ath tdTop data-toggle="tooltip"
                     data-placement="top" title="Máximo precio histórico">${apiDataJSON[i].ath}</td>
                     <td class="athDate tdTop">${apiDataJSON[i].ath_date.slice(0,10)}</td>
                     <td class="max24 tdTop">${apiDataJSON[i].high_24h}</td>
                     <td class="min24 tdTop">${apiDataJSON[i].low_24h}</td>
                     <td class="24h tdTop">${apiDataJSON[i].price_change_percentage_24h.toFixed(2)}%</td>
                  </tr>`;
      };
      top100Table.append(table);
      return table;     
}

//Función mostrar trades actuales
function showDiv(divElement) {
   $(divElement).removeClass('d-none');
}
//Función para cargar buscador en selects
function chargeSelect(htmlElement) {
   $(htmlElement).select2()
};
//Función bootstrap tooltips
$(function(){
   $('[data-toggle="tooltip"]').tooltip();
 });
 //Function delete locate storage
 function deleteLocalStorage(localKey) {
   localStorage.removeItem(localKey)
}
function deleteDiv(divElement) {
   $(divElement).addClass('d-none')
}
//Función de notificación de cálculo realizado
function caculateDone(message, time) {
   if (time === undefined) time = 4000;
   $("body").append(`<div class="calculateReady"></div>`);
   $(".calculateReady").text(message);
   $(".calculateReady").animate({
      opacity: 1 
   }, 500, function () { 
         $(".calculateReady").animate({ 
            opacity: 0 
         }, time, function () {
               $(this).remove();
            })
   })
}