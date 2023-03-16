let diasTot = 28;

myArr = [];

for (let i = 1; i <= diasTot; i++){
    myArr.push('"dia-' + i + '"'  + ': ,');
}

console.log(myArr.join(" "))