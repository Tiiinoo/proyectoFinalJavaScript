// Clase constructora del resultado obtenido con cada inversión.
class tradingInversionCalculate {
    constructor (tradingBuyPrice, tradingSellPrice, tradingQuantity) {
      let coinChoice = tradingCoinChoice;
      let buyPrice = tradingBuyPrice;
      let sellPrice = tradingSellPrice;
      let quantity = tradingQuantity;
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