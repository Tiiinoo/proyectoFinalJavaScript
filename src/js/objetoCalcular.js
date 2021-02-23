// Clase constructora del resultado obtenido con cada inversión.
class tradingInversionCalculate {
   constructor (userBuyPrice, userSellPrice, userQuantity) {
     //let coinChoice = tradingCoinChoice;
     this.buyPrice = userBuyPrice;
     this.sellPrice = userSellPrice;
     this.quantity = userQuantity;      
  }
  //Función obtener resultado
  compraInicial = function () {
     let incialBuy = (this.quantity * this.buyPrice)
     return incialBuy;
  }
  retornoInversion = function() {
     let result = ((this.sellPrice - this.buyPrice) * this.quantity)
     return result.toFixed(2);
  }
  //Función obtener porcentaje
  percentageInversion = function() {
     let percentage = ((this.retornoInversion() * 100) / this.buyPrice)
     return percentage.toFixed(2);
  }
  //Función obtener saldo total
  totalBalance = function() {
   let total = (parseInt(this.retornoInversion()) + (this.buyPrice * this.quantity))
   return total.toFixed(2);
  } 
  //Función borrar datos trade calculado
  tradingFillout = function() {
     tradingBuyPrice.val('');
     tradingSellPrice.val('');
     tradingQuantity.val('');
  }

  //Función borrar datos hold calculado
  holdingFillout = function() {
     holdingBuyPrice.val('');
     holdingQuantity.val('');
  }

  // Función para guardar datos en local storage
  saveonLocalStorage = function() {
      localStorage.setItem('tradingResults', JSON.stringify(tradingStorage))
      localStorage.setItem('holdingResults', JSON.stringify(holdingStorage))
  }
}