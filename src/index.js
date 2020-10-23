const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
let decodedExpression = '';
const exprLength = expr.length;
const partLength = 10;
for (let startingPartIndex = 0; startingPartIndex < exprLength; startingPartIndex+=partLength) {
  let morseWord = '';
  const currentExprPart = expr.substr(startingPartIndex, partLength);
  if (currentExprPart === "**********") {
    decodedExpression += ' ';
  } else {
    for (let startingSubPartIndex = 0; startingSubPartIndex < partLength; startingSubPartIndex+=2) {
      const subPart = currentExprPart.substr(startingSubPartIndex, 2);
      if (subPart === '10') {
        morseWord += '.'
      } else if (subPart === '11') {
        morseWord += '-'
      } // if it's 00, do nothing
    }
    decodedExpression += MORSE_TABLE[morseWord];
  }
}
return decodedExpression
}

module.exports = {
  decode
}
