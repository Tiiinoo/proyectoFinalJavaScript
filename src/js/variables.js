//Variable instanciar el objeto
let objetctTradeInversion = "";
let obejctHoldInversion = "";
//Variables botones principales
let tradingButton = $('#tradingButton');
let holdingButton = $('#holdingButton');
let defiButton = $('#defiButton');
//Variables opciones tabla de trading
let tradingTable = $('#tradingTable');
let tradingCoinChoice = $('#tradingCoinChoice');
let tradingImageChoice = $('#tradingImageChoice');
let tradingATH = $('#tradingATH');
let tradingBuyPrice = $('#tradingBuyPrice');
let tradingSellPrice = $('#tradingSellPrice');
let tradingQuantity = $('#tradingQuantity');
let tradingCalculateButton = $('#tradingCalculateButton');
//Variables opciones tabla de holding
let holdingTable = $('#holdingTable');
let holdingCoinChoice = $('#holdingCoinChoice');
let holdingImageChoice = $('#holdingImageChoice');
let holdingATH = $('#holdingATH');
let holdingBuyPrice = $('#holdingBuyPrice');
let holdingPrice = $('#holdingPrice');
let holdingQuantity = $('#holdingQuantity');
let holdingCalculateButton = $('#holdingCalculateButton');
//Variables div de resultados
let tradingResultsDiv = $('#tradingResultsDiv');
let holdingResultsDiv = $('#holdingResultsDiv');
let oldTradingResultsDiv = $('#oldTradingResultsDiv');
let oldHoldingResultsDiv = $('#oldHoldingResultsDiv');
let newTradeButton = $('#newTradeButton');
let inversionDiv = "";
let oldTrades = "";
let oldHold = "";
const date = moment.locale(); ;
let day = moment().startOf('minutes').fromNow();
//Arrays para uso de localstorage
let tradingStorage = [];
let holdingStorage = [];
//Arrays api data info
let apiDataJSON = "";
let select = "";

// Llamadas a funciones cargar los selects de monedas automáticamente con la carga de la página.
chargeGeckoData(tradingCoinChoice);
chargeGeckoData(holdingCoinChoice);
//Cargar searchers en selects 
chargeSelect(tradingCoinChoice)
chargeSelect(holdingCoinChoice)
// Recuperar elementos del Local Storage y "pushearlos" a sus respectivos arrays
if(localStorage.getItem('tradingResults')) {
   tradingStorage = JSON.parse(localStorage.getItem('tradingResults'))

   tradingStorage.forEach(trading => {
      oldTrades += `
                     <div id="tradeBox" class="col-lg-3"> 
                        <div class="row justify-content-center">
                           <div id="tradeNumbers">
                              <p>Tu trade en ${trading.coin}, tuvo el siguiente resultado:</p>
                              <p>Diferencia $${trading.retorno}</p>
                              <p>Porcentaje de ${trading.porcentaje}%</p>
                              <p>Total $${trading.total}</p>
                              <a href="#header" id="newTradeButton"><button class="btn-success backButton">Nuevo trade</button></a>
                              <p>Calculado ${day}</p>               
                           </div>
                        </div>
                     </div>`;                  
       oldTradingResultsDiv.html(oldTrades);
   })
}

if(localStorage.getItem('holdingResults')) {
   holdingStorage = JSON.parse(localStorage.getItem('holdingResults'))

   holdingStorage.forEach(holding => {
      oldHold += `
                  <div id="tradeBox" class="col-lg-3"> 
                     <div class="row justify-content-center">
                        <div id="tradeNumbers">
                           <p>Tu hold de ${holding.coin}, tiene el siguiente rendimiento:</p>
                           <p>Diferencia de $${holding.retorno}</p>
                           <p>Porcentaje de ${holding.porcentaje}%</p>
                           <p>Total $${holding.total}</p>
                           <a href="#header" id="newTradeButton"><button class="btn-success backButton">Nuevo hold</button></a>
                           <p>Calculado ${day}</p>               
                        </div>
                     </div>
                  </div>`;  
      oldHoldingResultsDiv.html(oldHold);
   })
}

// EVENTOS
//Eventos para mostrar tablas
// tradingButton.click(function () {
//    tradingTable.slideDown(1000);
// });
// tradingButton.click(function () {
//    $('#contacto').removeClass('welcome')
// })
// holdingButton.click(function () {
//    holdingTable.slideDown(1000);
// });
// holdingButton.click(function () {
//    $('#contacto').removeClass('welcome')
// })
// defiButton.onclick = crearDefiTable; A TRABAJAR PRÓXIMAMENTE
//Eventos para carga de imagen y ath de la moneda tradeada.
tradingCoinChoice.change(() => {
   let image = "";
   let imageData = "";
   let i = apiDataJSON.find(i => i.symbol.toUpperCase() == tradingCoinChoice.val())
   imageData = i.image
   image = `<img class="imageChoice" src="${imageData}">`;
   tradingImageChoice.html(image);
   }
);
tradingCoinChoice.change(() => {
   let ath = "";
   let athData = "";
   let i = apiDataJSON.find(i => i.symbol.toUpperCase() == tradingCoinChoice.val())
   athData = i.ath
   ath = `<p>${athData}</p>`;
   tradingATH.html(ath);
   }
);
//Eventos para cargar imagen, ath y current price de la moneda holdeada.
holdingCoinChoice.change(() => {
   let image = "";
   let imageData = "";
   let i = apiDataJSON.find(i => i.symbol.toUpperCase() == holdingCoinChoice.val())
   imageData = i.image
   image = `<img class="imageChoice" width="25" src="${imageData}">`;
   holdingImageChoice.html(image);
   }
);
holdingCoinChoice.change(() => {
   let ath = "";
   let athData = "";
   let i = apiDataJSON.find(i => i.symbol.toUpperCase() == holdingCoinChoice.val())
   athData = i.ath
   ath = `<p>${athData}</p>`;
   holdingATH.html(ath);
   }
);
holdingCoinChoice.change(() => {
   let currentPrice = "";
   let currentPriceData = "";
   let i = apiDataJSON.find(i => i.symbol.toUpperCase() == holdingCoinChoice.val())
   currentPriceData = i.current_price
   currentPrice = `<p id="currentPrice">${currentPriceData}</p>`;
   holdingPrice.html(currentPrice);
   }
);

//Evento del botón calcular trade
tradingCalculateButton.click((e) => {
  e.preventDefault();
  objetctTradeInversion = new tradingInversionCalculate(tradingBuyPrice.val(), tradingSellPrice.val(), tradingQuantity.val());
  inversionDiv = "";
  inversionDiv += `<div id="tradeBox" class="col-lg-3"> 
                       <div class="row justify-content-center">
                          <div id="tradeNumbers">
                             <p>Tu trade en ${tradingCoinChoice.val()}, tuvo el siguiente resultado:</p>
                             <p>Diferencia de $${objetctTradeInversion.retornoInversion()}</p>
                             <p>Porcentaje de ${objetctTradeInversion.percentageInversion()}%</p>
                             <p>Total $${objetctTradeInversion.totalBalance()}</p>
                             <a href="#header" id="newTradeButton"><button class="btn-success backButton">Nuevo trade</button></a>
                             <p>Calculado ${day}</p>               
                          </div>
                       </div>
                    </div>`;                  
  tradingResultsDiv.append(inversionDiv);
  tradingStorage.push({
                        "coin" : tradingCoinChoice.val(),
                        "retorno" : objetctTradeInversion.retornoInversion(),
                        "porcentaje" : objetctTradeInversion.percentageInversion(),
                        "total" : objetctTradeInversion.totalBalance()
                     })
  objetctTradeInversion.saveonLocalStorage();
  objetctTradeInversion.tradingFillout();
  inversionDiv = "";
})

//Evento del botón calcular hold
holdingCalculateButton.click((e) => {
  e.preventDefault();
  obejctHoldInversion = new tradingInversionCalculate(holdingBuyPrice.val(), $('#currentPrice').text(), holdingQuantity.val());
  inversionDiv = "";
  inversionDiv += `<div id="tradeBox" class="col-lg-3"> 
                       <div class="row justify-content-center">
                          <div id="tradeNumbers">
                             <p>Tu hold de ${holdingCoinChoice.val()}, tiene el siguiente rendimiento:</p>
                             <p>Diferencia de $${obejctHoldInversion.retornoInversion()}</p>
                             <p>Porcentaje de ${obejctHoldInversion.percentageInversion()}%</p>
                             <p>Total $${obejctHoldInversion.totalBalance()}</p>
                             <a href="#header" id="newTradeButton"><button class="btn-success backButton">Nuevo hold</button></a>
                             <p>Calculado ${day}</p>               
                          </div>
                       </div>
                    </div>`;                  
  holdingResultsDiv.append(inversionDiv);
  holdingStorage.push({
                        "coin" : holdingCoinChoice.val(),
                        "retorno" : obejctHoldInversion.retornoInversion(),
                        "porcentaje" : obejctHoldInversion.percentageInversion(),
                        "total" : obejctHoldInversion.totalBalance()
                     })
   obejctHoldInversion.saveonLocalStorage();
   obejctHoldInversion.holdingFillout();
   inversionDiv = "";   
})