// Clase constructora del resultado obtenido con cada inversión.
class tradingInversionCalculate {
    constructor (userBuyPrice, userSellPrice, userQuantity) {
      //let coinChoice = tradingCoinChoice;
      let buyPrice = userBuyPrice;
      let sellPrice = userSellPrice;
      let quantity = userQuantity;
      this.retornoInversion = function() {
         let result = ((sellPrice - buyPrice) * quantity)
         return result.toFixed(2);
      }
      this.percentageInversion = function() {
         let percentage = ((this.retornoInversion() * 100) / buyPrice);
         return percentage.toFixed();
      }   
   }
}