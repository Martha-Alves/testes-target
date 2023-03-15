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



  return result

}

console.log(sumFibs(4));

