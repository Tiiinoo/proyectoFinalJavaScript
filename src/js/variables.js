//Variables para simular una single page
let goHome = $('#goHome');
let goToHistorical = $('#goToHistorical');
let goTo100Top = $('#goTo100Top');
let home = $('#home');
let historical = $('#historical');
let top100 = $('#top100');

//Variable instanciar el objeto
let objetctTradeInversion = "";
let obejctHoldInversion = "";
let singlePage = $('#singlePage');
//Variables opciones tabla de trading
let tradingTable = $('#tradingTable');
let tradingCoinChoice = $('#tradingCoinChoice');
let tradingImageChoice = $('#tradingImageChoice');
let tradingATH = $('#tradingATH');
let tradingBuyPrice = $('#tradingBuyPrice');
let tradingSellPrice = $('#tradingSellPrice');
let tradingQuantity = $('#tradingQuantity');
let tradingCalculateButton = $('#tradingCalculateButton');
let divTradeResult = $('#divTradeResult');
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
let divHoldResult = $('#divHoldResult');
let oldTrades = "";
let oldHolds = "";
let clearAllTrades = $('#clearAllTrades');
let clearAllHolds = $('#clearAllHolds');
let top100Table = $('#top100Table');
let tokenTop100 = $('#tokenTop100')
const date = moment.locale(); ;
let day = moment().startOf('minutes').fromNow();
//Arrays para uso de localstorage
let tradingStorage = [];
let holdingStorage = [];
//Arrays api data info
let apiDataJSON = "";
let select = "";
let table = "";
// Llamadas a funciones cargar los selects de monedas automáticamente con la carga de la página.
chargeGeckoData(tradingCoinChoice);
chargeGeckoData(holdingCoinChoice);
//Cargar searchers en selects 
chargeSelect(tradingCoinChoice)
chargeSelect(holdingCoinChoice)
//Cargar search en tabla top 100 cryptos

// Recuperar trades del Local Storage y crear historial
if(localStorage.getItem('tradingResults')) {
   tradingStorage = JSON.parse(localStorage.getItem('tradingResults'))
   tradingStorage.forEach(trading => {
      oldTrades += `
                     <div class="col-lg-3 col-md-5 col-10 oldTradeBox"> 
                        <div class="row justify-content-center">
                           <div id="tradeNumbers">
                              <p>Rendimiento de tu trade:</p>
                              <p>Compraste ${trading.quantity} ${trading.coin} por ${trading.buy}</p>
                              <p>Con una diferencia de $${trading.retorno}</p>
                              <p>Un porcentaje de ${trading.porcentaje}%</p>
                              <p>Y tu nuevo total es $${trading.total}</p>
                              <a href="#header" id="newTradeButton"><button class="btn-success backButton">Nuevo trade</button></a>
                              <a href="#header" id="clearOldTrade"><button class="btn-success backButton">Borrar trade</button></a>
                              <p>Calculado ${day}</p>               
                           </div>
                        </div>
                     </div>`;                  
       oldTradingResultsDiv.html(oldTrades);
       deleteDiv(tradeDescription);
   })
}
//Evento borrar trades históricos
clearAllTrades.click(() => deleteLocalStorage('tradingResults'))
clearAllTrades.click(() => deleteDiv($('.oldTradeBox')))
clearAllTrades.click(() => showDiv($('#tradeDescription')));

//Funcion recuperar Holds desde el Local Storage
if(localStorage.getItem('holdingResults')) {
   holdingStorage = JSON.parse(localStorage.getItem('holdingResults'))

   holdingStorage.forEach(holding => {
      oldHolds += `
                  <div class="col-lg-3 col-md-5 col-10 oldHoldBox"> 
                     <div class="row justify-content-center">
                        <div id="tradeNumbers">
                           <p>Rendimiento de tu hold:</p>
                           <p>Compraste ${holding.quantity} ${holding.coin} por ${holding.buy}</p>
                           <p>Con una diferencia de $${holding.retorno}</p>
                           <p>Un porcentaje de ${holding.porcentaje}%</p>
                           <p>Y tu nuevo total es $${holding.total}</p>
                           <a href="#header" id="newTradeButton"><button class="btn-success backButton">Nuevo hold</button></a>
                           <a href="#header" id="clearOldHold"><button class="btn-success backButton">Borrar hold</button></a>
                           <p>Calculado ${day}</p>               
                        </div>
                     </div>
                  </div>`;  
      oldHoldingResultsDiv.html(oldHolds);
      deleteDiv($('#holdDescription'));
   })
}
//Evento borrar holds históricos
clearAllHolds.click(() => deleteLocalStorage('holdingResults'))
clearAllHolds.click(() => deleteDiv($('.oldHoldBox'))) 
clearAllHolds.click(() => showDiv($('#holdDescription')));
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
   ath = `<p class="choiceP">${athData}</p>`;
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
   ath = `<p class="choiceP">${athData}</p>`;
   holdingATH.html(ath);
   }
);
holdingCoinChoice.change(() => {
   let currentPrice = "";
   let currentPriceData = "";
   let i = apiDataJSON.find(i => i.symbol.toUpperCase() == holdingCoinChoice.val())
   currentPriceData = i.current_price
   currentPrice = `<p id="currentPrice" class="choiceP">${currentPriceData}</p>`;
   holdingPrice.html(currentPrice);
   }
);

//Evento del botón calcular trade
tradingCalculateButton.click((e) => {
  e.preventDefault();
  objetctTradeInversion = new tradingInversionCalculate(tradingBuyPrice.val(), tradingSellPrice.val(), tradingQuantity.val());
  inversionDiv = "";
  inversionDiv += `<div class="col-lg-3 col-md-5 col-10 tradeBox"> 
                       <div class="row justify-content-center">
                          <div id="tradeNumbers">
                             <p>El resultado de tu trade fue:</p>
                             <p>Compraste ${tradingQuantity.val()} ${tradingCoinChoice.val()} por $${objetctTradeInversion.compraInicial()}</p>
                             <p>Con una diferencia de $${objetctTradeInversion.retornoInversion()}</p>
                             <p>Un porcentaje de ${objetctTradeInversion.percentageInversion()}%</p>
                             <p>Y tu nuevo total es $${objetctTradeInversion.totalBalance()}</p>
                             <a href="#header" id="newTradeButton"><button class="btn-success backButton">Nuevo trade</button></a>
                             <a href="#header" id="clearTrade"><button class="btn-success backButton">Borrar trade</button></a>
                             <p>Calculado ${day}</p>               
                          </div>
                       </div>
                    </div>`;                  
  tradingResultsDiv.append(inversionDiv);
  tradingStorage.push({
                        "coin" : tradingCoinChoice.val(),
                        "quantity" : tradingQuantity.val(),
                        "buy" : objetctTradeInversion.compraInicial(),
                        "retorno" : objetctTradeInversion.retornoInversion(),
                        "porcentaje" : objetctTradeInversion.percentageInversion(),
                        "total" : objetctTradeInversion.totalBalance()
                     })
  objetctTradeInversion.saveonLocalStorage();
  objetctTradeInversion.tradingFillout();
  showDiv(divTradeResult)
  showDiv($('.oldTradeBox'))
  inversionDiv = "";
})

//Evento del botón calcular hold
holdingCalculateButton.click((e) => {
  e.preventDefault();
  obejctHoldInversion = new tradingInversionCalculate(holdingBuyPrice.val(), $('#currentPrice').text(), holdingQuantity.val());
  inversionDiv = "";
  inversionDiv += `<div class="col-lg-3 col-md-5 col-10 holdBox"> 
                       <div class="row justify-content-center">
                          <div id="tradeNumbers">
                           <p>El resultado de tu hold fue:</p>
                           <p>Compraste ${holdingQuantity.val()} ${holdingCoinChoice.val()} por $${obejctHoldInversion.compraInicial()}</p>
                           <p>Con una diferencia de $${obejctHoldInversion.retornoInversion()}</p>
                           <p>Un porcentaje de ${obejctHoldInversion.percentageInversion()}%</p>
                           <p>Y tu nuevo total es $${obejctHoldInversion.totalBalance()}</p>
                           <a href="#header" id="newTradeButton"><button class="btn-success backButton">Nuevo hold</button></a>
                           <a href="#header" id="clearHold"><button class="btn-success backButton">Borrar hold</button></a>
                           <p>Calculado ${day}</p>               
                          </div>
                       </div>
                    </div>`;                  
  holdingResultsDiv.append(inversionDiv);
  holdingStorage.push({
                        "coin" : holdingCoinChoice.val(),
                        "quantity" : holdingQuantity.val(),
                        "buy" : obejctHoldInversion.compraInicial(),
                        "retorno" : obejctHoldInversion.retornoInversion(),
                        "porcentaje" : obejctHoldInversion.percentageInversion(),
                        "total" : obejctHoldInversion.totalBalance()
                     })
   obejctHoldInversion.saveonLocalStorage();
   obejctHoldInversion.holdingFillout();
   showDiv(divHoldResult)
   showDiv($('.oldHoldBox'))
   inversionDiv = "";   
})