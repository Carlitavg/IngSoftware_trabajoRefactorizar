function calcularElFizzBuzzDeUnNumero(n) {
  let fb = "";
  if (esMultiploDe3(n) && esMultiploDe5(n)) {
    fb = "FizzBuzz";
  } else {
    if (esMultiploDe3(n)) {
      fb = "Fizz";
    } else {
      if (esMultiploDe5(n)) {
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

function esMultiploDe5(n) {
  return n % 5 === 0;
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
