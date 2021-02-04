let tradingChoise = document.getElementById('tradingButton');
let holdingChoise = document.getElementById('holdingButton');
let defiChoise = document.getElementById('defiButton');
const calculateBox = document.getElementById('calculateBox');
let investmentChoice = document.getElementById('investmentChoices');


function buildCoinOptions() {
  
    const htmlDiv = `
            <div class="row row d-flex justify-content-center flex-column">
                <div class="col-lg-6 offset-lg-3">
                    <span class="badge badge-success">Selecciona la moneda en la cual invertiste</span>
                </div>        
                <div class="btn btn-group col-lg-6 offset-lg-3" role="group" aria-label="Basic example">
                    <button type="button" class="btn-success" data-id="BTC">BTC</button>
                    <button type="button" class="btn-success" data-id="ETH">ETH</button>
                    <button type="button" class="btn-success" data-id="DOT">DOT</button>
                    <button type="button" class="btn-success" data-id="ADA">ADA</button>
                    <button type="button" class="btn-success" data-id="CAKE">CAKE</button>
                    <button type="button" class="btn-success" data-id="XVS">XVS</button>
                </div>
            </div>
    `;
       return htmlDiv;
  }

  

  investmentChoice.onclick = function() {
      let newDiv = document.createElement('input');
      let newButton = document.createElement('button');
      let divloco = document.createElement('img');
      
      newDiv.setAttribute('type', 'text');
      newButton.textContent= 'Sí mami, mostrame';
      newButton.classList.add('btn-outline-success', 'd-block');
      divloco.src = coins.img;
      divloco.classList.add('bg-blue');
      calculateBox.appendChild(newDiv);
      calculateBox.appendChild(newButton);
      calculateBox.appendChild(divloco)
  }

  function buildCalculator() {
    // const calculator = buildCoinOption();
    // calculateBox.innerHTML += calculator;
  }

// function onClick() {
//     alert('funciono');
// }

// const choiseButton = document.querySelectorAll('.choiseButton');
// choiseButton.forEach(function(choiseButton){
//     choiseButton.addEventListener('click', onClick);
// });


// choiseButton.onClick();

// document.getElementById('tradingButton').addEventListener('click', loquita);

function loquita() {
    alert('Me pongo loco');
};

// const investmentTrading = document.querySelectorAll('.choiceButton');
// investmentTrading.forEach(function(investmentTrading){
//     investmentTrading.addEventListener('click', loquita);
// });

