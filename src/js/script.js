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

}

let inversion1 = new Inversion(prompt('Token que compraste'), 
parseInt(prompt('Precio de venta')), parseInt(prompt('Precio de compra')), 
prompt('Cantidad comprada'));
inversion1.resultado();
alert('Con tu compra de ' + inversion1.token + ' tu resultado fue de $' + inversion1.resultado());
