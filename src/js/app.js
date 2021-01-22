function buildCoinsOption(coins) {
 

  const div = document.createElement('div');
  div.classList.add('coinsOption');
 
  const title = DOMBuilder.h2(coins.name,'coinsName');
  
  //const image = DOMBuilder.img(coins.img); No puedo cargar la imagen local desde el JSON
 
  const description = DOMBuilder.p(coins.description, "coinsDescription");
  
  const price = DOMBuilder.p('Current price: $' + coins.price, 'currentPrice');

  const button = DOMBuilder.button('Calcular', 'coinsButton', coins.id );

 
  div.appendChild(title);
  //div.appendChild(image);
  div.appendChild(description);
  div.appendChild(price);
  div.appendChild(button);
  
  return div;
}
function buildCoinCalculator() {
  
  const htmlDiv = `
    <div id="calculator">
      <fieldset>
        <form id="calculate-form">
          <input type="number" name="cantidad" placeholder="Cantidad comprada">
          <input type="number" name="precioCompra" placeholder="Precio de compra">
          <button type="submit" id="btnCalculate">Calcular retorno</button>
        </form>
      </fieldset>  
    </div>
  `;

  return htmlDiv;
}

function onSelectClick(event) {
  const coinID = event.target.dataset.id;

  selectedCoin = coins.find(function(coin){
    if(coin.id == coinID){

    return coin;
    }
  })

  selectedCoins.push(selectedCoin);
  
  buildCalculator(selectedCoin);

}

function buildCalculator(htmlDiv) {
  selectedCoins.forEach(function(coin){
    const calculator = buildCoinCalculator(htmlDiv);
    calculateContainer.innerHTML += calculator;
  })
}

const DOMBuilder = new DomBuilder();

let selectedCoins = [];

window.addEventListener('load', function() {

  const messageContainer = document.getElementById('message');
  const calculateContainer = document.getElementById('calculate');
 
  coins.forEach(function(coins) {
    const coinsDiv = buildCoinsOption(coins);
    messageContainer.appendChild(coinsDiv);    
      }
    )    


const coinsButton = document.querySelectorAll('.coinsButton');
coinsButton.forEach(function(coinsButton){
  coinsButton.addEventListener('click', onSelectClick)
})

});