// one euro is:
let oneEuroIs = {
  "JPY": 127.9, // japan yen
  "USD": 1.2, // us dollar
  "GBP": 0.8, // british pound
}

// esta es mi función que suma dos números
const sum = (a,b) => {
  return a + b
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
  let valueInDollar = valueInEuro * 1.2;
  return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
  let conversionRate = valueInDollar / 1.2;
  let yenAmount = conversionRate * oneEuroIs["JPY"];
  return parseFloat(yenAmount.toFixed(2));
}

const fromYenToPound = function(valueInYen){
  let conversionRate = valueInYen / oneEuroIs["JPY"];
  let poundAmount = conversionRate * oneEuroIs["GBP"];
  return parseFloat(poundAmount.toFixed(2));
}


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }