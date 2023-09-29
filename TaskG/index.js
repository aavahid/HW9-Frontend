/*
G. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
Example: 
console.log(convert('saLamNecesen)) -> SAlAMnECESEN
*/

function convert(inputString) {
  return inputString
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
}

console.log(convert("saLamNecesen"));
