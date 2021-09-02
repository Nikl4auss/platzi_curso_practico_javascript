//Codigo del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 4;

console.log("Los lados del cuadrado miden:", ladoCuadrado, "cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es:", perimetroCuadrado, "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado es:", areaCuadrado, "cm^2");

console.groupEnd();

console.group("Triangulo");
//Codigo del trinagulo

const ladoTriangulo1 = 6;

const ladoTriangulo2 = 6;

const baseTriangulo = 4;

const alturaTriangulo = Math.sqrt(
  ladoTriangulo1 ** 2 - (baseTriangulo / 2) ** 2
).toFixed(2);

console.log(
  "Los lados del triangulo miden:",
  ladoTriangulo1,
  "cm,",
  ladoTriangulo2
);

console.log(
  "La base del triangulo es:",
  baseTriangulo,
  "cm, y su altura es:",
  alturaTriangulo,
  "cm"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triangulo es:", perimetroTriangulo, "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("El area del triangulo es:", areaTriangulo, "cm^2");

console.groupEnd();

//Codigo del Circulo

console.group("Circulo");

const radioCirculo = 4;

const diametroCirculo = radioCirculo * 2;

console.log(
  "El radio del circulo es:",
  radioCirculo,
  "cm, y su diametro es:",
  diametroCirculo,
  "cm"
);

const PI = Math.PI;

const circunferenciaCirculo = diametroCirculo * PI;

console.log("La cicunferencia del circulo es:", circunferenciaCirculo, "cm");

const areaCirculo = radioCirculo ** 2 * PI;

console.log("El area del circulo es:", areaCirculo, "cm^2");

console.groupEnd;
