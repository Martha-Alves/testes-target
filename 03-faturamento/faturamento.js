
function calculaFaturamento(arr, totalDeDias, diasSemFaturamento ){
    
    let totalParaMedia = arr.length;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let soma  = arr.reduce((preVal, atual) => preVal + atual, 0)
    let media = soma / totalParaMedia
    let diasTotais = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > media) {
            diasTotais++;
        }
    }
    

    return "O menor valor de faturamente ocorrido em um dia do mês foi R$" + min + ",00 e o maior valor foi R$" + max + ",00. Em " + diasTotais + " dias o valor de faturamento diário foi superior à média mensal";
}

console.log(calculaFaturamento([10, 20, 9, 80, 50, 70], 30, 4))

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;