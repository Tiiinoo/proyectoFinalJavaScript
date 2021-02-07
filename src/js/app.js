//Función para crear dinámicamente los selects.
//If => array tiene datos (mayor a cero), suelto la función.
function crearSelect(idElement, arrayData) { 
    if (arrayData.length > 0) { 
       let select = "";
          for (let i in arrayData) {
             select += `<option id="${arrayData[i]}" class="coinSelected">${arrayData[i]}</option>`;
          };
          $(idElement).html(select);
    }
 }
// Cargar los combos de monedas automáticamente con la carga de la página.
// Recuperar elementos del Local Storage y "pushearlos" a sus respectivos arrays
   $(document).ready(function() {
      
   crearSelect(tradingCoinChoice, arrayCoins);
   crearSelect(holdingCoinChoice, arrayCoins);
   // Recuperar datos del Local Storage y "pushearlos" a los arrays correspondientes
   if(localStorage.getItem('coinSelection')) {
      userselectedCoins = JSON.parse(localStorage.getItem('coinSelection'));
      //Chequeo temporal para verificar que funcione, de aquí construiré automáticamente los resultados antiguos
   }
    if(localStorage.getItem('tradeResult')) {
      userTraderesult = JSON.parse(localStorage.getItem('tradeResult'));
      //Chequeo temporal para verificar que funcione, de aquí construiré automáticamente los resultados antiguos
   }
    if(localStorage.getItem('tradePercentage')) {
      userTradePercentage = JSON.parse(localStorage.getItem('tradePercentage'));
      //Chequeo temporal para verificar que funcione, de aquí construiré automáticamente los resultados antiguos
   }
 })
//Evento para carga de imágen y descripción de la moneda
tradingCoinChoice.change(loadImage);
//Función carga imagen descripción
function loadImage(){
   let image = "";
      let i = coins.find(i => i.coinid == tradingCoinChoice.val())
      image = i.img
      $(tradingImageChoice).html(`<img class="imageChoice" src="${image}">`);

      loadDescription();
}
//Funciòn carga descripción
function loadDescription(){
   let descrip = ""
      let i = coins.find( i=> i.coinid == tradingCoinChoice.val())
      descrip = i.description
      $(tradingDescription).html(`${descrip}`);
}
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
   userselectedCoins.push(tradingCoinChoice.val());
   userTraderesult.push(objetCalcularInversion.retornoInversion());
   userTradePercentage.push(objetCalcularInversion.percentageInversion())
   saveonLocalStorage();
   fillout();
 })
 function fillout() {
    tradingBuyPrice.val('');
    tradingCoinChoice.val('Seleccioná tu moneda');
    tradingSellPrice.val('');
    tradingQuantity.val('');
    loadImage();
   }
// Función para guardar datos en local storage
 function saveonLocalStorage() {
   localStorage.setItem('coinSelection', JSON.stringify(userselectedCoins));
   localStorage.setItem('tradeResult', (JSON.stringify(userTraderesult)));
   localStorage.setItem('tradePercentage', JSON.stringify(userTradePercentage))
}