class calculadorInversion {

    constructor (coins, ) {

    }

}
// MUESTRA DE OBJETO DE FERNANDO PARA VER COMO ARMAR EL MÍO.
class cotizadorSegurosDeHogar {
    constructor (jsonArea, jsonTipoVivienda, costoSeguroM2, areaDeResidencia, viviendaElegida, metros2) {
       let areaResidencia = jsonArea
       let tipoVivienda = jsonTipoVivienda
       let costoM2 = costoSeguroM2
       let metrosCuadradosIngresados = metros2
       this.areaResidenciaElegida = areaDeResidencia
       this.tipoViviendaElegida = viviendaElegida
       this.calculoCobertura = function() {
          return (costoSeguroM2 * metrosCuadradosIngresados)
       }
       this.factorArea = function() {
          
          let far = 1
             let r = areaResidencia.find(r => r.area == this.areaResidenciaElegida)
             far = r.factor
          return far
       }
       this.factorVivienda = function() {
          let fv = 1
             let r = tipoVivienda.find(v => v.tipo == this.tipoViviendaElegida)
             fv = r.factor 
             return fv
       }
       this.calculoCuota = function() {
          let valorDeCuota = this.calculoCobertura() * this.factorVivienda() * this.factorArea()
             return valorDeCuota.toFixed(2)
       }
    }
 }