let objetCalcularInversion = "";

let tradingButton = $('#tradingButton');
let holdingButton = $('#holdingButton');
let defiButton = $('#defiButton');

let tradingTable = $('#tradingTable');
let tradingCoinChoice = $('#tradingCoinChoice');
let tradingImageChoice = $('#tradingImageChoice');
let tradingDescription = $('#tradingDescription');
let tradingBuyPrice = $('#tradingBuyPrice');
let tradingSellPrice = $('#tradingSellPrice');
let tradingQuantity = $('#tradingQuantity');
let tradingCalculateButton = $('#tradingCalculateButton');


// let holdingTable = $('#holdingTable');
// let holdingCoinChoice = $('#holdingCoinChoice');
// let holdingImageChoice = $('#holdingImageChoice');
// let holdingDescription = $('#holdingDescription');
// let holdingBuyPrice = $('#holdingBuyPrice');
// let holdingPrice = $('#holdingPrice');
// let holdingQuantity = $('#holdingQuantity');
// let holdingCalculateButton = $('#holdingCalculateButton');

let resultsDiv = $('#resultsDiv');
let newTradeButton = $('#newTradeButton');

const date = moment.locale(); ;
let day = moment().startOf('minutes').fromNow();
// let month = date.getMonth();
// // let year = date.getFullYear();
// let hour = moment().format('LTS');
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();

let userselectedCoins = [];
let userTraderesult = [];
let userTradePercentage = [];
let inversionDiv = "";


tradingButton.click(showTradingTable);
// holdingButton.onclick = showHoldingTable;
// defiButton.onclick = crearDefiTable; A TRABAJAR PRÓXIMAMENTE

function showTradingTable() {
  tradingTable.toggleClass('d-none');
}

// function showHoldingTable() {
//   holdingTable.classList.toggle('d-none');    
// }


