/*
  Basic Calculations
*/

function basicCalculation() {
  const x = 11;
  const y = 12;
  let sum;

  sum = add(x, y);
  console.log('Added together:', sum);

  sum = multiply(x, y);
  console.log ('Multiplied together:', sum);

}

function add ( x, y) {
  return x + y;
}

function multiply ( x, y ) {
  return x * y;
}

basicCalculation()

/*
  String Operations
*/

const firstName = 'Jens'; // Please pronounce the 'J'
const lastName =  'Österqvist';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

/*
  Temperature Converter
*/

function fahrenheitConverter(celcius) {
  return (celcius * (9/5) + 32);
}

const celcius = 25;
const fahrenheit = fahrenheitConverter(celcius)

console.log(`${celcius} degrees celcius is the same as ${fahrenheit} degrees fahrenheit.`)