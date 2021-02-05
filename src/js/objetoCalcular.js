class tradingInversionCalculate {
    constructor (tradingBuyPrice, tradingSellPrice, tradingQuantity) {
      let coinChoice = tradingCoinChoice;
      let buyPrice = tradingBuyPrice;
      let sellPrice = tradingSellPrice;
      let quantity = tradingQuantity;
      this.retornoInversion = function() {
         let result = (sellPrice - buyPrice * quantity)
         return result;
         }
      }
   }