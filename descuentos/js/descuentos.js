const inputPrecio = document.querySelector("#precio");

const inputDescuento = document.querySelector("#descuento");

const inputPrecioFinal = document.querySelector("#precioFinal");

let actualizarValores = () => {
  let precio = Number(inputPrecio.value);
  let descuento = Number(inputDescuento.value);
  inputPrecioFinal.value = aplicarDescuento(precio, descuento);
};

inputPrecio.addEventListener("keyup", actualizarValores);

inputDescuento.addEventListener("keyup", actualizarValores);

let aplicarDescuento = (precio, descuento) => {
  let calcularDescuento = (100 - descuento) / 100;
  return precio * calcularDescuento;
};
