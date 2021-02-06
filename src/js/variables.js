let objetCalcularInversion = "";

let tradingButton = document.getElementById('tradingButton');
let holdingButton = document.getElementById('holdingButton');
// let defiButton = document.getElementById('defiButton');

let tradingTable = document.getElementById('tradingTable');
let tradingCoinChoice = document.getElementById('tradingCoinChoice');
let tradingImageChoice = document.getElementById('tradingImageChoice');
let tradingDescription = document.getElementById('tradingDescription');
let tradingBuyPrice = document.getElementById('tradingBuyPrice');
let tradingSellPrice = document.getElementById('tradingSellPrice');
let tradingQuantity = document.getElementById('tradingQuantity');
let tradingCalculateButton = document.getElementById('tradingCalculateButton');


// let holdingTable = document.getElementById('holdingTable');
// let holdingCoinChoice = document.getElementById('holdingCoinChoice');
// let holdingImageChoice = document.getElementById('holdingImageChoice');
// let holdingDescription = document.getElementById('holdingDescription');
// let holdingBuyPrice = document.getElementById('holdingBuyPrice');
// let holdingPrice = document.getElementById('holdingPrice');
// let holdingQuantity = document.getElementById('holdingQuantity');
// let holdingCalculateButton = document.getElementById('holdingCalculateButton');

let resultsDiv = document.getElementById('resultsDiv')

const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let userselectedCoins = [];
let userTraderesult = [];
let userTradePercentage = [];


tradingButton.onclick = showTradingTable;
// holdingButton.onclick = showHoldingTable;
// defiButton.onclick = crearDefiTable; A TRABAJAR PRÓXIMAMENTE

function showTradingTable() {
  tradingTable.classList.toggle('d-none');      
}

// function showHoldingTable() {
//   holdingTable.classList.toggle('d-none');    
// }


