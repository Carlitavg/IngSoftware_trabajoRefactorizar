function calcularElFizzBuzzDeUnNumero(n) {
  let fb = "";
  if (esMultiploDe3(n) && n % 5 === 0) {
    fb = "FizzBuzz";
  } else {
    if (esMultiploDe3(n)) {
      fb = "Fizz";
    } else {
      if (n % 5 === 0) {
        fb = "Buzz";
      } else {
        fb = n.toString();
      }
    }
  }
  return fb;
}
function esMultiploDe3(n) {
  return n % 3 === 0;
}

function fizzbuzz(n) {
  let aux = "";
  for (let i = 1; i <= n; i++) {
    aux += calcularElFizzBuzzDeUnNumero(i);
    if (i != n) aux += ", ";
  }
  return aux;
}

export { calcularElFizzBuzzDeUnNumero, fizzbuzz };
