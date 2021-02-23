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
         table += `<tr>
                     <th scope="row" class="marketRank">${apiDataJSON[i].market_cap_rank}</th>
                     <td class="symbol">${apiDataJSON[i].symbol.toUpperCase()}</td>
                     <td class="image"><img class="imageChoice" src="${apiDataJSON[i].image}"></td>
                     <td class="price">${apiDataJSON[i].current_price}</td>
                     <td class="ath">${apiDataJSON[i].ath}</td>
                     <td class="athDate">${apiDataJSON[i].ath_date}</td>
                     <td class="max24">${apiDataJSON[i].high_24h}</td>
                     <td class="min24">${apiDataJSON[i].low_24h}</td>
                     <td class="24h">${apiDataJSON[i].price_change_24h}</td>
                  </tr>`;
      };
      top100.append(table);
      return table;     
}

//Función para cargar buscador en selects
function chargeSelect(htmlElement) {
   $(htmlElement).select2();
};