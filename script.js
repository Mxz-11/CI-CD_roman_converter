/******************************************************
 * script.js
 * This file now includes two pure functions:
 *   1) romanToInteger(romanStr)
 *   2) integerToRoman(num)
 * plus the original convertirARomano() / convertirADecimal()
 * used by the UI. Adjust if your original code differs.
 ******************************************************/

/**
 * Converts a valid Roman numeral string to its integer value.
 * Throws an Error if the input is invalid or out of range (1–3999).
 */
function romanToInteger(romanStr) {
  // Basic checks
  if (typeof romanStr !== 'string' || romanStr.trim() === '') {
    throw new Error('Invalid Roman Numeral: empty or wrong type');
  }
  
  // This regex ensures the string is a valid Roman numeral (1–3999)
  // Explanation:
  // M{0,3}       : 0-3 M's (thousands 0-3000)
  // (CM|CD|D?C{0,3}) : 900 (CM), 400 (CD), 0-300 C's optionally preceded by D
  // (XC|XL|L?X{0,3}) : same logic for tens
  // (IX|IV|V?I{0,3}) : same for ones
  const validRomanRegex = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  if (!validRomanRegex.test(romanStr)) {
    throw new Error(`Invalid Roman Numeral: ${romanStr}`);
  }
  
  // Mapping of Roman characters to values
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  
  let result = 0;
  for (let i = 0; i < romanStr.length; i++) {
    const currentVal = romanMap[romanStr[i]];
    const nextVal = romanMap[romanStr[i + 1]];
  
    // If nextVal is larger, we subtract; otherwise, we add
    if (nextVal && nextVal > currentVal) {
      result -= currentVal;
    } else {
      result += currentVal;
    }
  }
  
  // Range check (1..3999)
  if (result < 1 || result > 3999) {
    throw new Error(`Result out of range: ${result}`);
  }
  
  return result;
}
  
/**
   * Converts an integer (1–3999) to a valid Roman numeral string.
   * Throws an Error if the input is invalid (<=0, >3999, non-integer).
   */
function integerToRoman(num) {
  // Validate input type
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    throw new Error(`Invalid Input: not an integer => ${num}`);
  }
  // Validate range
  if (num < 1 || num > 3999) {
    throw new Error(`Invalid Range: must be 1..3999 => ${num}`);
  }
  
  // Pairs of [integerValue, romanLiteral] in descending order
  const romanPairs = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  
  let result = '';
  let remaining = num;
  
  // Greedy approach: subtract largest possible values first
  for (let [value, symbol] of romanPairs) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
    if (remaining === 0) break;
  }
  return result;
}
  
/**
   * The original UI-based functions that read from DOM inputs and write to the page.
   * Adjust these if your HTML IDs differ.
   */
function convertirARomano() {
  const decimalInput = document.getElementById('decimal');
  const resultadoRomano = document.getElementById('resultadoRomano');
  let value = parseInt(decimalInput.value, 10);
  
  try {
    let romano = integerToRoman(value);
    resultadoRomano.textContent = `Romano: ${romano}`;
  } catch (err) {
    resultadoRomano.textContent = `Error: ${err.message}`;
  }
}
  
function convertirADecimal() {
  const romanoInput = document.getElementById('romano');
  const resultadoDecimal = document.getElementById('resultadoDecimal');
  let romanStr = romanoInput.value.trim().toUpperCase(); // convert input to uppercase
  
  try {
    let decimal = romanToInteger(romanStr);
    resultadoDecimal.textContent = `Decimal: ${decimal}`;
  } catch (err) {
    resultadoDecimal.textContent = `Error: ${err.message}`;
  }
}
  
// If you want these functions available globally (for the tests to see them),
// either remove the `function` keyword or attach them to `window`.
window.romanToInteger = romanToInteger;
window.integerToRoman = integerToRoman;
  