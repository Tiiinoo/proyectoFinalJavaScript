function completarSelect(idElement, arrayData) {
    if (arrayData.length > 0) {
       let select = "";
          for (let i in arrayData) {
             select += `<option>${arrayData[i]}</option>`;
          };
          idElement.innerHTML = select;
    }
 }
 
document.addEventListener("DOMContentLoaded", () => {
     completarSelect(tradingCoinChoice, arrayCoins)
     completarSelect(holdingCoinChoice, arrayCoins)
  })