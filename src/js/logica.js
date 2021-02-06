//Función para crear dinámicamente los selects.
//If => array tiene datos (mayor a cero), suelto la función.
function crearSelect(idElement, arrayData) { 
    if (arrayData.length > 0) { 
       let select = "";
          for (let i in arrayData) {
             select += `<option id="${arrayData[i]}" class="coinSelected">${arrayData[i]}</option>`;
          };
          idElement.innerHTML = select;
    }
 }
// Cargar los combos de monedas automáticamente con la carga de la página. 
document.addEventListener("DOMContentLoaded", () => {
     crearSelect(tradingCoinChoice, arrayCoins)
     crearSelect(holdingCoinChoice, arrayCoins)      
 })
//Evento para carga de imágen y descripción de la moneda
tradingCoinChoice.onchange = loadImage;
//Función carga imagen descripción
function loadImage(){
   let image = ""
      let i = coins.find(i => i.coinid == tradingCoinChoice.value)
      image = i.img
      tradingImageChoice.innerHTML = `<img class="imageChoice" src="${image}"> `;

      loadDescription();
}
//Funciòn carga descripción
function loadDescription(){
   let descrip = ""
      let i = coins.find( i=> i.coinid == tradingCoinChoice.value)
      descrip = i.description
      tradingDescription.innerHTML = `${descrip} `;
}

//Evento del botón calcular trade
 tradingCalculateButton.onclick = returnInversion;
//Función del botón calcular trade, instancio el objeto y calculo la inversión
 function returnInversion() {
   objetCalcularInversion = new tradingInversionCalculate(tradingBuyPrice.value, tradingSellPrice.value, tradingQuantity.value);
   resultsDiv.innerHTML +=` 
                           <div id="tradeBox" class="col-lg-2"> 
                              <div class="row justify-content-center">
                                 <div id="tradeNumbers">
                                    <p>Tu trade en ${tradingCoinChoice.value}, tuvo el siguiente resultado:</p>
                                    <p>$ ${objetCalcularInversion.retornoInversion()}</p>
                                    <p>${objetCalcularInversion.percentageInversion()}%</p>
                                    <a href="#header"><button class="btn-success backButton">Volver</button></a>
                                    <p>Calculado el xx/xx/xx + hora</p>               
                                 </div>
                              </div>
                           </div> 
                           `;
   userselectedCoins.push(tradingCoinChoice.value);
   userTraderesult.push(objetCalcularInversion.retornoInversion());
   userTradePercentage.push(objetCalcularInversion.percentageInversion())
   saveonLocalStorage();
 }

 function saveonLocalStorage() {
   localStorage.setItem('Coinselection', JSON.stringify(userselectedCoins));
   localStorage.setItem('tradeResutl', (JSON.stringify(userTraderesult)));
   localStorage.setItem('tradePercentage', JSON.stringify(userTradePercentage))
}