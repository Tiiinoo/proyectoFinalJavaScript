let tradingButton = document.getElementById('tradingButton');
let holdingButton = document.getElementById('holdingButton');
let defiButton = document.getElementById('defiButton');
let tradingTable = document.getElementById('tradingTable');
let holdingTable = document.getElementById('holdingTable');


tradingButton.onclick = crearTradingTable;
holdingButton.onclick = crearHoldingTable;
// defiButton.onclick = crearDefiTable; A TRABAJAR PRÓXIMAMENTE

function crearTradingTable() {

    let tableTrade = ` 
                      <thead class="thead-light">
                      <tr>
                        <th>Moneda</th>
                        <th>Logo</th>
                        <th>Descripción</th>
                        <th>Precio de compra</th>
                        <th>Precio de venta</th>
                        <th>Cantidad</th>
                        <th>Calcular</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <select id="coinChoice" name="coinChoice">
                            <option value="0">Elegí tu moneda</option>
                            <option value="1">BTC</option>
                            <option value="2">ETH</option>
                            <option value="3">DOT</option>
                            <option value="4">ADA</option>
                            <option value="5">CAKE</option>
                            <option value="6">XVS</option>
                          </select>
                        </th>
                        <td><img class="imageChoice" src="images/BTC.jpeg"></td>
                        <td>Bitcoin's native coin, the first one.</td>
                        <td><input type="number" placeholder="Precio de compra"></td>
                        <td><input type="number" placeholder="Precio de venta"></td>
                        <td><input type="number" placeholder="Cantidad"></td>
                        <td><button class="btn-outline-success calculateButton">Calcular trade</button></td>
                      </tr>
                    </tbody>
    
    `;
      tradingTable.innerHTML = tableTrade;
      return tableTrade;
}

function crearHoldingTable() {
  
    let tableHold = `
                    <thead class="thead-light">
                    <tr>
                      <th>Moneda</th>
                      <th>Logo</th>
                      <th>Descripción</th>
                      <th>Precio de compra</th>
                      <th>Precio actual</th>
                      <th>Cantidad</th>
                      <th>Calcular</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <select id="coinChoice" name="coinChoice">
                          <option value="0">Elegí tu moneda</option>
                          <option value="1">BTC</option>
                          <option value="2">ETH</option>
                          <option value="3">DOT</option>
                          <option value="4">ADA</option>
                          <option value="5">CAKE</option>
                          <option value="6">XVS</option>
                        </select>
                      </th>
                      <td><img class="imageChoice" src="images/BTC.jpeg"></td>
                      <td>Bitcoin's native coin, the first one.</td>
                      <td><input type="number" placeholder="Precio de compra"></td>
                      <td>$37.000</td>
                      <td><input type="number" placeholder="Cantidad"></td>
                      <td><button class="btn-outline-success calculateButton">Calcular hold</button></td>
                    </tr>
                  </tbody>
    `;
      holdingTable.innerHTML = tableHold;
      return tableHold;
  }


