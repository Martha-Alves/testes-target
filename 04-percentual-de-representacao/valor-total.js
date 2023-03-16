let dados = {

    "estados": { 

        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        outros: 19849.53

    },
    "percentual": {
        
        perSP: 0,
        perRJ: 0,
        perMG: 0,
        perES: 0,
        perOutros: 0
    }
}

function calculos() {
    
    let myObjEs = Object.keys(dados["estados"]);

    let myObjPer = Object.keys(dados["percentual"]);

    let myArr = myObjEs.map(x => {    
        let valor = x; 
        return dados["estados"][valor]
    });
  
    let tot = myArr.reduce((preVal, atual) => preVal + atual, 0);

    let newArr = [];

    for (let i = 0; i < myArr.length; i++) {
        let operacao = (100 * myArr[i]) / tot;
        newArr.push(Math.round(operacao));
        dados["percentual"][myObjPer[i]] = Math.round(operacao) + "%";
    }

    return "Percentual de representação que cada estado teve dentro do valor total mensal da distribuidora:\n\nSP: " + dados["percentual"]["perSP"] + "\n\nRJ: " + dados["percentual"]["perRJ"] + "\n\nMG: " + dados["percentual"]["perMG"] + "\n\nEs: " + dados["percentual"]["perES"] + "\n\nOutros Estados: " + dados["percentual"]["perOutros"];
}

console.log(calculos());

// Ao final da execução a tabela de dados é atualizada com o percentual de representação que cada estado teve. Confira isso com o console.log abaixo! 

console.log("\nVeja a tabela completa a seguir\n\n")
console.log(dados)



//========== pergunta:

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.