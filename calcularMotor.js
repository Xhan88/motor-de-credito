
import { calculoMotor } from './motor.js';


const datosEjemplo = [
    { tipoNomina: 'A', fechaPrimerEmpleo: new Date('2022-06-12'), genero: 'f' },
    { tipoNomina: 'B', fechaPrimerEmpleo: new Date('1993-12-30'), genero: 'f' },
    { tipoNomina: 'C', fechaPrimerEmpleo: new Date('2020-09-19'), genero: 'm' },
    { tipoNomina: 'D', fechaPrimerEmpleo: new Date('2019-01-15'), genero: 'm' }
];


datosEjemplo.forEach(dato => {
    const resultado = calculoMotor(dato.tipoNomina, dato.fechaPrimerEmpleo, dato.genero);
    console.log(`Tipo de Nómina: ${dato.tipoNomina}, ${dato.genero}, Monto Mínimo: ${resultado.montoMinimo}, Monto Máximo: ${resultado.montoMaximo}, Recomendación Línea: ${resultado.recomendacionLinea}`);
});

let tbody = document.getElementById('resultadoTabla');


datosEjemplo.forEach((dato) => {
    
    const resultado = calculoMotor(dato.tipoNomina, dato.fechaPrimerEmpleo, dato.genero);

    
    let fila = tbody.insertRow();

    
    let celdaTipoNomina = fila.insertCell(0);
    let celdaFechaPrimerEmpleo = fila.insertCell(1);
    let celdaGenero = fila.insertCell(2);
    let celdaMontoMinimo = fila.insertCell(3);
    let celdaMontoMaximo = fila.insertCell(4);
    let celdaRecomendacionLinea = fila.insertCell(5);

   
    celdaTipoNomina.textContent = dato.tipoNomina;
    celdaGenero.textContent = dato.genero;
    celdaFechaPrimerEmpleo.textContent = dato.fechaPrimerEmpleo.toLocaleDateString();
    celdaMontoMinimo.textContent = resultado.montoMinimo;
    celdaMontoMaximo.textContent = resultado.montoMaximo;
    celdaRecomendacionLinea.textContent = resultado.recomendacionLinea;
});
