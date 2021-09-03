//Codigo del cuadrado
class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }

  get getLado() {
    return this.lado;
  }

  set setLado(lado) {
    this.lado = lado;
  }

  get perimetro() {
    return this.calcPerimetro();
  }

  get area() {
    return this.calcArea();
  }

  printLado() {
    return `Los lados miden: ${this.getLado} cm`;
  }

  calcPerimetro() {
    return this.lado * 4;
  }

  perimetroString() {
    return `${this.calcPerimetro()} cm`;
  }

  printPerimetro() {
    return `El perimetro es: ${this.perimetroString()}`;
  }

  calcArea() {
    return this.lado ** 2;
  }

  areaString() {
    return `${this.calcArea()} cm^2`;
  }

  printArea() {
    return `El area es: ${this.areaString()}`;
  }

  printInfo() {
    console.group("Cuadrado");
    console.log(this.printLado());
    console.log(this.printPerimetro());
    console.log(this.printArea());
    console.groupEnd();
  }
}

//Codigo del trinagulo

class Triangulo {
  constructor(lado1, lado2, base) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.base = base;
    this.semiPerimetro = this.calcPerimetro() / 2;
    this.type =
      this.lado1 === this.lado2 && this.lado1 !== this.base
        ? "Isoceles"
        : this.lado1 === this.lado2 && this.lado1 === this.base
        ? "Equilatero"
        : "Escaleno";
    this.altura = this.setAltura();
  }
  get getLado1() {
    return this.lado1;
  }

  get getLado2() {
    return this.lado2;
  }

  get getBase() {
    return this.base;
  }

  get getAltura() {
    return this.altura;
  }

  get getType() {
    return this.type;
  }

  setAltura() {
    return this.type === "Isoceles"
      ? Math.sqrt(this.lado1 ** 2 - (this.base / 2) ** 2)
      : this.type === "Equilatero"
      ? Math.sqrt(3 ** this.lado1) / 2
      : (2 / this.base) *
        Math.sqrt(
          this.semiPerimetro *
            (this.semiPerimetro - this.lado1) *
            (this.semiPerimetro - this.lado2) *
            (this.semiPerimetro - this.base)
        );
  }

  printLados() {
    return `Los lados miden: ${this.getLado1} cm y ${this.getLado2} cm`;
  }

  printBaseAltura() {
    return `La base mide: ${this.getBase} cm, y la altura: ${this.getAltura} cm`;
  }

  calcPerimetro() {
    return this.lado1 + this.lado2 + this.base;
  }

  perimetroString() {
    return `${this.calcPerimetro()} cm`;
  }

  printPerimetro() {
    return `El perimetro es: ${this.perimetroString()}`;
  }

  calcArea() {
    return (this.altura * this.base) / 2;
  }

  areaString() {
    return `${this.calcArea()} cm^²`;
  }

  printArea() {
    return `El area es: ${this.areaString()}`;
  }

  printInfo() {
    console.group("Triangulo");
    console.log(this.printLados());
    console.log(this.printBaseAltura());
    console.log(this.printPerimetro());
    console.log(this.printArea());
    console.groupEnd();
  }
}

//Codigo del Circulo
class Circulo {
  constructor(radio) {
    this.radio = radio;
    this.diametro = radio * 2;
  }

  get getRadio() {
    return this.radio;
  }

  get getDiametro() {
    return this.diametro;
  }

  printRadioDiametro() {
    return `Èl radio mide: ${this.getRadio} cm y el diametro: ${this.getDiametro} cm`;
  }

  calcCircunferencia() {
    return this.diametro * Math.PI;
  }

  circunferenciaString() {
    return `${this.calcCircunferencia().toFixed(2)} cm`;
  }

  printCircunferencia() {
    return `La circunferencia mide: ${this.circunferenciaString()}`;
  }

  calcArea() {
    return this.radio ** 2 * Math.PI;
  }

  areaString() {
    return `${this.calcArea().toFixed(2)} cm^2`;
  }

  printArea() {
    return `El area mide: ${this.areaString()}`;
  }

  printInfo() {
    console.group("Circulo");
    console.log(this.printRadioDiametro());
    console.log(this.printCircunferencia());
    console.log(this.printArea());
    console.groupEnd();
  }
}

const inputLadoCuadrado = document.querySelector("#ladoCuadrado");

const infoCuadrado = document.querySelector("#square-info");

const inputLadoTriangulo1 = document.querySelector("#ladoTriangulo1");

const inputLadoTriangulo2 = document.querySelector("#ladoTriangulo2");

const inputBaseTriangulo = document.querySelector("#baseTriangulo");

const infoTriangulo = document.querySelector("#triangle-info");

const inputRadioCirculo = document.querySelector("#radioCirculo");

const infoCirculo = document.querySelector("#circle-info");

let crearCuadrado = () => {
  let lado = Number(inputLadoCuadrado.value);
  return new Cuadrado(lado);
};

let crearTriangulo = () => {
  let lado1 = Number(inputLadoTriangulo1.value);

  let lado2 = Number(inputLadoTriangulo2.value);

  let base = Number(inputBaseTriangulo.value);

  return new Triangulo(lado1, lado2, base);
};

let crearCirculo = () => {
  let radio = Number(inputRadioCirculo.value);

  return new Circulo(radio);
};

let calcularPerimetroCuadrado = () => {
  const cuadrado = crearCuadrado();

  infoCuadrado.innerText = cuadrado.printPerimetro();
};

let calcularAreaCuadrado = () => {
  const cuadrado = crearCuadrado();

  infoCuadrado.innerText = cuadrado.printArea();
};

let calcularPerimetroTriangulo = () => {
  const triangulo = crearTriangulo();

  console.log(triangulo.getType);

  infoTriangulo.innerText = triangulo.printPerimetro();
};

let calcularAreaTriangulo = () => {
  const triangulo = crearTriangulo();

  infoTriangulo.innerText = triangulo.printArea();
};

let calcularCircunferencia = () => {
  const circulo = crearCirculo();

  infoCirculo.innerText = circulo.printCircunferencia();
};

let calcularAreaCirculo = () => {
  const circulo = crearCirculo();

  infoCirculo.innerText = circulo.printArea();
};
