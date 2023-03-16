
const json = require('./json/dados.json');

function faturamentoMensal() {

    let lista = json["fevereiro"];
    let dias = Object.keys(lista);
    let faturamento = [];
    let diasSem = 0;
    let diasAcima = 0;    
    
    for (let i = 0; i < dias.length; i++) {

        if (lista[dias[i]] !== 0) {
          faturamento.push(lista[dias[i]])   
        } else {
            diasSem++
        }
        
    }

    
    let maior = Math.max(...faturamento);
    let menor = Math.min(...faturamento);
    let soma = faturamento.reduce((preVal, atual) => preVal + atual, 0);
    let media = soma / faturamento.length
    
    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i] > media) {
            diasAcima++;
        }
    }
    
    return "O menor valor de faturamente ocorrido em um dia do mês foi R$" + menor + ",00 e o maior valor foi R$" + maior + ",00. O valor de faturamento diário foi superior à média mensal em aproximadamente " + diasAcima + " dias. Houve um total de " + diasSem + " dias que não existiu faturamento.";
}

console.log(faturamentoMensal()) //exibe: O menor valor de faturamente ocorrido em um dia do mês foi R$30,00 e o maior valor foi R$1648,00. O valor de faturamento diário foi superior à média mensal em aproximadamente 5 dias. Houve um total de 10 dias que não existiu faturamento.




//Durante a entrevista não consegui desenvolver essa questão direito, então decidi refazê-la do jeito certo.

//3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;