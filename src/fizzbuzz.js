function calcularElFizzBuzzDeUnNumero(n) {

  if (esMultiploDe(n, 3) && esMultiploDe(n, 5)) return "FizzBuzz";
  
  if (esMultiploDe(n, 3))  return "Fizz";

  if (esMultiploDe(n, 5)) return "Buzz";
  
  return n.toString();
  
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
