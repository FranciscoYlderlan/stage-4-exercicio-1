let numberOne = Number(prompt("Informe o primeiro número."));
let numberTwo = Number(prompt("Informe o segundo número."));

// let numberOne = 10;
// let numberTwo = 2;

const results = [];


const sum = numberOne+numberTwo;
const subtraction = numberOne-numberTwo;
const multiplication = numberOne*numberTwo;
const division = numberOne/numberTwo;
const rest = numberOne%numberTwo;

const equals = numberOne===numberTwo;
const even = (numberOne+numberTwo)%2 === 0;

results.push({"description": "adição", "value": sum });
results.push({"description": "subtração", "value": subtraction });
results.push({"description": "multiplicação", "value": multiplication });
results.push({"description": "divisão", "value": division });
results.push({"description": "resto", "value": rest });
results.push({"description": equals? "iguais" : "diferentes", "value": equals });
results.push({"description": even? "par" : "ímpar", "value": even });

// console.log(results);

function outputResultMessage(description, value) {
    const compared = description === "iguais" || description === "diferentes" ; 
    const parity = description === "par" || description === "ímpar";
    
    if (compared) {
        return `Os números são ${description}.`;
    }
    if (parity) {
        return `A soma é ${description}.`;
    }
    
    let valueFormatted = String((value).toFixed(2)).replace('.',','); 

    return `O resultado do(a) ${description} foi: ${valueFormatted}.`;
}


console.log(`O primeiro número informado foi: ${numberOne}
O segundo número informado foi: ${numberTwo}

`);

results.forEach(result => {
    // console.log(outputResult(result.description,result.value));
    alert(outputResultMessage(result.description,result.value));    
});
