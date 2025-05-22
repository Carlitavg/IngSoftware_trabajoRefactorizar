function calcularElFizzBuzzDeUnNumero(n) {
  let fb = "";
  if (esMultiploDe(n, 3) && esMultiploDe(n, 5)) {
    fb = "FizzBuzz";
  } else {
    if (esMultiploDe(n, 3)) {
      fb = "Fizz";
    } else {
      if (esMultiploDe(n, 5)) {
        fb = "Buzz";
      } else {
        fb = n.toString();
      }
    }
  }
  return fb;
}
function esMultiploDe(n, multiplo) {
  return n % multiplo === 0;
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
