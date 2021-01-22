class Inversion {
  
  constructor(token, venta, compra, cantidad) {
    this.token = token;
    this.compra = compra;
    this.venta = venta;
    this.cantidad = cantidad;
  }

  resultado() {
    let result = (this.venta - this.compra) * this.cantidad; 
    return result;
  }

  showMessage(value) {
    let messageContainer = document.getElementById('message');
    let userMessage = document.createElement('p');
    userMessage.textContent = value + ' tu trade de ' + this.token + ' obtuvo el siguiente resultado:';
    messageContainer.appendChild(userMessage);
    return userMessage;
  }

  showResult(valor) {
    let resultContainer = document.getElementById('containResult');
    let gains = document.createElement('li');
    gains.textContent = '$' + valor;
    resultContainer.appendChild(gains);
    return gains;
  }

}

let inversion1 = new Inversion(prompt('Token que compraste'), 
parseInt(prompt('Precio de venta')), parseInt(prompt('Precio de compra')), 
parseInt(prompt('Cantidad comprada')));
inversion1.resultado();
inversion1.showMessage(prompt('Cuál es tu nombre?'));
inversion1.showResult(inversion1.resultado());
alert('Con tu compra de ' + inversion1.token + ' tu resultado fue de $' + inversion1.resultado());
