let objetCalcularInversion = "";

let tradingButton = $('#tradingButton');
let holdingButton = $('#holdingButton');
let defiButton = $('#defiButton');

let tradingTable = $('#tradingTable');
let tradingCoinChoice = $('#tradingCoinChoice');
let tradingImageChoice = $('#tradingImageChoice');
let tradingATH = $('#tradingATH');
let tradingBuyPrice = $('#tradingBuyPrice');
let tradingSellPrice = $('#tradingSellPrice');
let tradingQuantity = $('#tradingQuantity');
let tradingCalculateButton = $('#tradingCalculateButton');


let holdingTable = $('#holdingTable');
let holdingCoinChoice = $('#holdingCoinChoice');
let holdingImageChoice = $('#holdingImageChoice');
let holdingATH = $('#holdingATH');
let holdingBuyPrice = $('#holdingBuyPrice');
let holdingPrice = $('#holdingPrice');
let holdingQuantity = $('#holdingQuantity');
let holdingCalculateButton = $('#holdingCalculateButton');

let resultsDiv = $('#resultsDiv');
let newTradeButton = $('#newTradeButton');

const date = moment.locale(); ;
let day = moment().startOf('minutes').fromNow();

let tradingUserselectedCoins = [];
let tradingUserTraderesult = [];
let tradingUserTradePercentage = [];
let holdingUserselectedCoins = [];
let holdingUserTraderesult = [];
let holdingUserTradePercentage = [];

let apiDataJSON = "";
let select = "";

function chargeSelect(htmlElement) {
   $(htmlElement).select2();
};

let inversionDiv = "";

// Cargar los combos de monedas automáticamente con la carga de la página.
chargeGeckoData(tradingCoinChoice);
chargeGeckoData(holdingCoinChoice);
chargeSelect(tradingCoinChoice)
chargeSelect(holdingCoinChoice)
// cargarGeckoData(holdingCoinChoice);
// Recuperar elementos del Local Storage y "pushearlos" a sus respectivos arrays
// Recuperar datos del Local Storage y "pushearlos" a los arrays correspondientes
if(localStorage.getItem('coinSelection')) {
    userselectedCoins = JSON.parse(localStorage.getItem('coinSelection'));
    //De aquí construiré automáticamente los resultados antiguos
}
  if(localStorage.getItem('tradeResult')) {
    userTraderesult = JSON.parse(localStorage.getItem('tradeResult'));
    //De aquí construiré automáticamente los resultados antiguos
}
  if(localStorage.getItem('tradePercentage')) {
    userTradePercentage = JSON.parse(localStorage.getItem('tradePercentage'));
    //De aquí construiré automáticamente los resultados antiguos
}


// EVENTOS
tradingButton.click(showTradingTable);
holdingButton.click(showHoldingTable);
// defiButton.onclick = crearDefiTable; A TRABAJAR PRÓXIMAMENTE
//Evento para carga de imagen y ath de la moneda tradeada.
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
//Eventos para cargar imagen, ath y current price del la moneda holdeada.
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
   currentPriceData = i.ath
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
  tradingUserselectedCoins.push(tradingCoinChoice.val());
  tradingUserTraderesult.push(objetCalcularInversion.retornoInversion());
  tradingUserTradePercentage.push(objetCalcularInversion.percentageInversion())
  saveonLocalStorage();
  tradingFillout();
})
//Evento del botón calcular trade
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
  holdingUserselectedCoins.push(tradingCoinChoice.val());
  holdingUserTraderesult.push(objetCalcularInversion.retornoInversion());
  holdingUserTradePercentage.push(objetCalcularInversion.percentageInversion())
  saveonLocalStorage();
  holdingFillout();
})



