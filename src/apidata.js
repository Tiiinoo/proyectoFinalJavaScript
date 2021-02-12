

function cargarGeckoData() {
   $.ajax({
       type: 'GET',
       crossDomain: true,
       url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
       dataType: 'json',
       success: function(data) {
          console.log(JSON.stringify(data))
          apidataJSON = data.markets
          console.log(apidataJSON)
          for (let i in apidataJSON) {
                  select += `<option id="${apidataJSON[i].symbol}" class="coinSelected">${apidataJSON[i].symbol}</option>`;
                  };
                  tradingCoinChoice.html(select);
         },
   })
}
   



        // //      HTMLTabla += `<tbody>
        // //                     <tr class="white">
        // //                        <td><img src="${contenidoJSON[i].picture.large}" class="circle responsive-img"></td>
        // //                        <td>${contenidoJSON[i].name.first} ${contenidoJSON[i].name.last}</td>
        // //                        <td>${contenidoJSON[i].location.city}, ${contenidoJSON[i].location.country}</td>
        // //                        <td>${contenidoJSON[i].dob.age} años</td>
        // //                        <td class="blue-text">${contenidoJSON[i].email}</td>
        // //                     </tr>
        // //                  </tbody>`
        // //      $("#tabladeresultado").html(HTMLTabla)
        // //      $('#contenido').fadeIn("slow", function() {
        // //         $('#cargando').slideUp("slow")
        // //         $('#contenido').slideDown("slow")
        // //      })
        //   };
       