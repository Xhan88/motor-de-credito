
export function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero) {
  
  const montosMinimosMasculino = [
      [100, 1000, 400, 400],
      [400, 600, 200, 300],
      [900, 1000, 200, 500],
      [100, 1000, 1000, 900],
      [600, 1000, 600, 1000]
  ];

  const montosMinimosFemenino = [
      [800, 800, 200, 500],
      [800, 700, 900, 1000],
      [800, 100, 700, 600],
      [600, 600, 800, 400],
      [200, 700, 100, 700]
  ];

  const montosMaximosMasculino = [
      [4900, 4700, 5000, 4400],
      [4700, 4400, 4700, 4700],
      [4600, 5000, 5000, 4300],
      [4600, 4400, 4200, 4900],
      [4500, 4900, 4600, 4300]
  ];

  const montosMaximosFemenino = [
      [4000, 4700, 4600, 5000],
      [4200, 4200, 4900, 4900],
      [4100, 4500, 4600, 4700],
      [4200, 4300, 4700, 5000],
      [4500, 4400, 4000, 4300]
  ];

  // Calcular el índice correspondiente en las tablas
  const calcularIndice = (mesesDesdePrimerEmpleo, genero) => {
      if (mesesDesdePrimerEmpleo < 27) {
          return 0;
      } else if (mesesDesdePrimerEmpleo === 27) {
          return 1;
      } else if (mesesDesdePrimerEmpleo === 28) {
          return 2;
      } else if (mesesDesdePrimerEmpleo === 29) {
          return 3;
      } else {
          return 4;
      }
  };

  // Obtener los montos mínimos y máximos según el género
  const montosMinimos = (genero === 'm') ? montosMinimosMasculino : montosMinimosFemenino;
  const montosMaximos = (genero === 'm') ? montosMaximosMasculino : montosMaximosFemenino;

 // Calcular el número de meses desde el primer empleo
const mesesDesdePrimerEmpleo = Math.floor((new Date() - fechaPrimerEmpleo) / (1000 * 60 * 60 * 24 * 30));

// Calcular el índice correspondiente
const indice = calcularIndice(mesesDesdePrimerEmpleo, genero);


  // Obtener los montos mínimos y máximos
  const montoMinimo = montosMinimos[indice][tipoNomina.charCodeAt(0) - 'A'.charCodeAt(0)];
  const montoMaximo = montosMaximos[indice][tipoNomina.charCodeAt(0) - 'A'.charCodeAt(0)];

  // Calcular la línea óptima de crédito
  const p1 = Math.min(montoMinimo, montoMaximo) + Math.sqrt(Math.min(montoMinimo, montoMaximo) * Math.max(montoMinimo, montoMaximo) - Math.min(montoMinimo, montoMaximo));
  const p2 = Math.min(montoMinimo, montoMaximo) + 0.0175 * (Math.max(montoMinimo, montoMaximo) - Math.min(montoMinimo, montoMaximo));
  const recomendacionLinea = Math.max(p1, p2);

  
  return {
      montoMinimo,
      montoMaximo,
      recomendacionLinea
      
  };
}



