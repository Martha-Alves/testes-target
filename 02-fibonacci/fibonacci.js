function sumFibs(num) {
  let fibonacci = [0, 1]
  let result = 0;
  let n = 0;
  let o = 1;
  let p = 2;

  for (let i = 0; i <= num; i++) {
    let n1 = fibonacci[n]
    let n2 = fibonacci[o]
    fibonacci[p] = n1 + n2
    n++;
    o++;
    p++;
  }

  fibonacci = fibonacci.slice(0, fibonacci.length - 2)

  for (let j = 0; j <= num; j++) {
    if (fibonacci[j] % 2 != 0 && fibonacci[j] <= num) {
      result += fibonacci[j]
    }
  }

  if (fibonacci.includes(result) === true) {
     return "O resultado da soma é " + result + " e esse número pertence a sequência que foi gerada a partir do número que você inseriu!"
  } else {
    return "O resultado da soma é " + result + " e esse número não pertence a sequência que foi gerada a partir do número que você inseriu!"
  }


}

console.log(sumFibs(3));

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;