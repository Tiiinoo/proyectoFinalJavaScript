//Variable instanciar el objeto
let objetCalcularInversion = "";
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
let resultsDiv = $('#resultsDiv');
let newTradeButton = $('#newTradeButton');
let inversionDiv = "";
const date = moment.locale(); ;
let day = moment().startOf('minutes').fromNow();
//Arrays para uso de localstorage
let tradingUserSelectedCoins = [];
let tradingUserResults = [];
let tradingUserPercentages = [];
let holdingUserSelectedCoins = [];
let holdingUserResults = [];
let holdingUserPercentages = [];
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
if(localStorage.getItem('tradingCoinSelection')) {
   tradingUserSelectedCoins = JSON.parse(localStorage.getItem('tradingCoinSelection'));
    //De aquí construiré automáticamente los resultados antiguos
}
if(localStorage.getItem('tradingResult')) {
   tradingUserResults = JSON.parse(localStorage.getItem('tradingResult'));
   //De aquí construiré automáticamente los resultados antiguos
}
if(localStorage.getItem('tradingPercentage')) {
   tradingUserPercentages = JSON.parse(localStorage.getItem('tradingPercentage'));
   //De aquí construiré automáticamente los resultados antiguos
}
if(localStorage.getItem('holdingCoinSelection')) {
   holdingUserSelectedCoins = JSON.parse(localStorage.getItem('holdingCoinSelection'));
   //De aquí construiré automáticamente los resultados antiguos
}
if(localStorage.getItem('holdingResult')) {
   holdingUserResults = JSON.parse(localStorage.getItem('holdingResult'));
   //De aquí construiré automáticamente los resultados antiguos
}
if(localStorage.getItem('holdingPercentage')) {
   holdingUserPercentages = JSON.parse(localStorage.getItem('holdingPercentage'));
   //De aquí construiré automáticamente los resultados antiguos
}
// EVENTOS
//Eventos para mostrar tablas
tradingButton.click(function () {
   tradingTable.slideDown(1000);
});
tradingButton.click(function () {
   $('#contacto').removeClass('welcome')
})
holdingButton.click(function () {
   holdingTable.slideDown(1000);
});
holdingButton.click(function () {
   $('#contacto').removeClass('welcome')
})
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
   image = `<img class="imageChoice" src="${imageData}">`;
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
  objetCalcularInversion = new tradingInversionCalculate(tradingBuyPrice.val(), tradingSellPrice.val(), tradingQuantity.val());
  inversionDiv += `<div id="tradeBox" class="col-lg-2"> 
                       <div class="row justify-content-center">
                          <div id="tradeNumbers">
                             <p>Tu trade en ${tradingCoinChoice.val()}, tuvo el siguiente resultado:</p>
                             <p>$ ${objetCalcularInversion.retornoInversion()}</p>
                             <p>${objetCalcularInversion.percentageInversion()}%</p>
                             <a href="#header" id="newTradeButton"><button class="btn-success backButton">Nuevo trade</button></a>
                             <p>Calculado ${day}</p>               
                          </div>
                       </div>
                    </div>`;                  
  resultsDiv.html(inversionDiv);
  tradingUserSelectedCoins.push(tradingCoinChoice.val());
  tradingUserResults.push(objetCalcularInversion.retornoInversion());
  tradingUserPercentages.push(objetCalcularInversion.percentageInversion())
  saveonLocalStorage();
  tradingFillout();
})
//Evento del botón calcular hold
holdingCalculateButton.click((e) => {
  e.preventDefault();
  objetCalcularInversion = new tradingInversionCalculate(holdingBuyPrice.val(), $('#currentPrice').text(), holdingQuantity.val());
  inversionDiv += `<div id="tradeBox" class="col-lg-2"> 
                       <div class="row justify-content-center">
                          <div id="tradeNumbers">
                             <p>Tu hold de ${holdingCoinChoice.val()}, tiene el siguiente rendimiento:</p>
                             <p>$ ${objetCalcularInversion.retornoInversion()}</p>
                             <p>${objetCalcularInversion.percentageInversion()}%</p>
                             <a href="#header" id="newTradeButton"><button class="btn-success backButton">Nuevo trade</button></a>
                             <p>Calculado ${day}</p>               
                          </div>
                       </div>
                    </div>`;                  
  resultsDiv.html(inversionDiv);
  holdingUserSelectedCoins.push(tradingCoinChoice.val());
  holdingUserResults.push(objetCalcularInversion.retornoInversion());
  holdingUserPercentages.push(objetCalcularInversion.percentageInversion())
  saveonLocalStorage();
  holdingFillout();
})