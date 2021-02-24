const ComponentHome = {
    render: function() {
        return `<div class="container">
                    <div class="row justify-content-center">
                    <div id="selectionTitle">
                        <h4><span class="badge badge-secondary">Elegí el tipo de inversión sobre el que querés calcular tus retornos</span></h4>
                    </div>
                    </div>
                    <div id="choisesContainer" class="container">
                    <div class="row justify-content-center">
                        <div id="tradingContainer" class="col-lg-4">
                        <h2><span class="badge badge-success">Trading</span></h2>
                        <p class="description">Si compraste y vendiste tus cryptos y querés conocer tu resultado, completa los siguientes datos:</p> 
                        <table id="tradingTable" class="table table-responsive">
                            <thead class="thead-light">
                            <tr>
                                <th scope="row">Moneda</th>
                                <td scope="row">
                                <select id="tradingCoinChoice" class="js-responsive" name="coinTradingChoice">
                                    <option class="coinSelected">-</option>
                                </select>
                                </td>
                            </tr>
                            </thead>
                            <tbody>  
                            <th scope="row">Logo</th>
                            <td id="tradingImageChoice">
                                <img class="imageChoice" src="">
                            </td>
                            </tbody>
                            <tbody>
                            <th scope="row" title="Mayor precio histórico">ATH</th>
                            <td id="tradingATH">

                            </td>
                            </tbody>
                            <tbody>
                            <th scope="row">Precio de compra</th>
                            <td><input id="tradingBuyPrice" type="number" placeholder="Precio de compra"></td>
                            </tbody>
                            <tbody>
                            <th scope="row">Precio de venta</th>
                            <td class="sellpriceContainer"><input id="tradingSellPrice"type="number" placeholder="Precio de venta"></td>
                            </tbody>
                            <tbody>
                            <th scope="row">Cantidad</th>
                            <td class="quantityContainer"><input id="tradingQuantity" type="number" placeholder="Cantidad"></td>
                            </tbody>
                            <tbody>
                            <th scope="row">Calcular</th>
                            <td class="calculateButtonContainer"><button id="tradingCalculateButton" class="btn-outline-success calculateButton">Calcular trade</button></td>
                            </tbody>
                        </table>
                        </div>
                        <div id="tradingContainer" class="offset-lg-1 col-lg-4">
                        <h2><span class="badge badge-success">Holding</span></h2>
                        <p class="description">Si tus cryptos siguen en tu billetera y querés conocer tu rendimiento, completa los siguientes datos:</p>             
                        <table id="holdingTable" class="table table-responsive">
                            <thead class="thead-light">
                            <tr>
                                <th scope="row">Moneda</th>
                                <td scope="row">
                                <select id="holdingCoinChoice" class="js-example-responsive" name="coinHoldingChoice">
                                    <option class="coinSelected">-</option>
                                </select>
                                </td>
                            </tr>
                            </thead>
                            <tbody>  
                            <th scope="row">Logo</th>
                            <td id="holdingImageChoice">

                            </td>
                            </tbody>
                            <tbody>
                            <th scope="row" title="Mayor precio histórico">ATH</th>
                            <td id="holdingATH">

                            </td>
                            </tbody>
                            <tbody>
                            <th scope="row">Precio de compra</th>
                            <td class="buypriceContainer"><input id="holdingBuyPrice" type="number" placeholder="Precio de compra"></td>
                            </tbody>
                            <tbody>
                            <th scope="row">Precio actual</th>
                            <td id="holdingPrice" class="sellpriceContainer">

                            </td>
                            </tbody>
                            <tbody>
                            <th scope="row">Cantidad</th>
                            <td class="quantityContainer"><input id="holdingQuantity" type="number" placeholder="Cantidad"></td>
                            </tbody>
                            <tbody>
                            <th scope="row">Calcular</th>
                            <td class="calculateButtonContainer"><button id="holdingCalculateButton" class="btn-outline-success calculateButton">Calcular hold</button></td>
                            </tbody>
                        </table>
                        </div>  
                    </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <h3><span class="badge badge-success">Tus trades</span></h3>
                    <div id="tradingResultsDiv" class="row offset-lg-2">

                    </div>
                </div>
                <div class="container-fluid">
                    <h3><span class="badge badge-success">Tus holds</span></h3>   
                    <div id="holdingResultsDiv" class="row offset-lg-2">

                    </div>
                </div>
                `
    }
}

const ComponentePagina1 = {
    render: function() {
        return `<div class="container-fluid">
                    <h3><span class="badge badge-success">Tus trades históricos</span></h3>
                    <div id="oldTradingResultsDiv" class="row offset-lg-2">
                    
                    </div>
                </div>
                <div class="container-fluid">
                    <h3><span class="badge badge-success">Tus holds históricos</span></h3>
                    <div id="oldHoldingResultsDiv" class="row offset-lg-2">

                    </div>
                </div>
                `
    }
    
}

const ComponentePagina2 = {
    render: function() {
        return `<div class="container-fluid" id="cryptoInformation">
                    <div class="row">
                    <table class="table">
                        <thead class="thead-light">
                        <tr>
                            <th>#</th>
                            <th>Moneda</th>
                            <th>Logo</th>
                            <th>Precio</th>
                            <th>ATH</th>
                            <th>ATH fecha</th>
                            <th>Max 24h</th>
                            <th>Min 24h</th>
                            <th>24h</th>
                        </tr>
                        </thead>
                        <tbody id="top100">

                        </tbody>
                    </table>
                    </div>
                </div>
                `
    }
}

const ComponenteError = {
    render: function() {
        return `<div class="red darken-4 white-text center z-depth-3">
                    <h1>Error</h1>
                    <i class="large material-icons">error</i>
                    <h5>El elemento al cual intenta acceder, no existe.</h5>
                    <br>
                </div>
                `
    }
}

const routes = [
    {
        path: '/',
        component: ComponentHome,
    },
    {
        path: '/pagina1',
        component: ComponentePagina1,
    },
    {
        path: '/pagina2',
        component: ComponentePagina2,
    }
]