/************************************************************************************************************/
/* File: tests.js                                                                                           */
/* Author: Mxz-11  alu.167442@usj.es                                                                        */
/*                                                                                                          */
/*                                                                                                          */
/************************************************************************************************************/

QUnit.module('roman_to_integer Tests', () => {
  QUnit.test('RTI-A1: \'MMMCMXCIX\' => 3999', (assert) => {
    assert.equal(window.romanToInteger('MMMCMXCIX'), 3999, 'Should return 3999');
  });
  
  QUnit.test('RTI-A2: \'MMM\' => 3000', (assert) => {
    assert.equal(window.romanToInteger('MMM'), 3000, 'Should return 3000');
  });
  
  QUnit.test('RTI-A3: \'CDXLIV\' => 444', (assert) => {
    assert.equal(window.romanToInteger('CDXLIV'), 444, 'Should return 444');
  });
  
  QUnit.test('RTI-A4: \'IC\' => Error', (assert) => {
    assert.throws(
      () => window.romanToInteger('IC'),
      /Invalid Roman Numeral/,
      'Should throw error for invalid \'IC\''
    );
  });
  
  QUnit.test('RTI-A5: \'IIII\' => Error', (assert) => {
    assert.throws(
      () => window.romanToInteger('IIII'),
      /Invalid Roman Numeral/,
      'Should throw error for \'IIII\''
    );
  });
  
  QUnit.test('RTI-A6: \'\' => Error', (assert) => {
    assert.throws(
      () => window.romanToInteger(''),
      /Invalid Roman Numeral|empty or wrong type/,
      'Should throw error for empty string'
    );
  });
  
  QUnit.test('RTI-A7: \'MCMXC0\' => Error', (assert) => {
    assert.throws(
      () => window.romanToInteger('MCMXC0'),
      /Invalid Roman Numeral/,
      'Should throw error for containing \'0\''
    );
  });
  
  QUnit.test('RTI-A8: \'MMXx\' => Error', (assert) => {
    assert.throws(
      () => window.romanToInteger('MMXx'),
      /Invalid Roman Numeral/,
      'Should throw error for lowercase or mixed-case usage'
    );
  });
  
  QUnit.test('RTI-A9: \'VX\' => Error', (assert) => {
    assert.throws(
      () => window.romanToInteger('VX'),
      /Invalid Roman Numeral/,
      'Should throw error for invalid \'VX\''
    );
  });
  
  QUnit.test('RTI-A10: \'MMMXLV\' => 3045', (assert) => {
    assert.equal(window.romanToInteger('MMMXLV'), 3045, 'Should return 3045');
  });
});
  
QUnit.module('integer_to_roman Tests', () => {
  QUnit.test('ITR-A1: 3999 => \'MMMCMXCIX\'', (assert) => {
    assert.equal(window.integerToRoman(3999), 'MMMCMXCIX', 'Should be MMMCMXCIX');
  });
  
  QUnit.test('ITR-A2: 0 => Error', (assert) => {
    assert.throws(
      () => window.integerToRoman(0),
      /Invalid Range/,
      'Should throw error for 0'
    );
  });
  
  QUnit.test('ITR-A3: -7 => Error', (assert) => {
    assert.throws(
      () => window.integerToRoman(-7),
      /Invalid Range/,
      'Should throw error for negative number'
    );
  });
  
  QUnit.test('ITR-A4: 4000 => Error', (assert) => {
    assert.throws(
      () => window.integerToRoman(4000),
      /Invalid Range/,
      'Should throw error for 4000'
    );
  });
  
  QUnit.test('ITR-A5: 1666 => \'MDCLXVI\'', (assert) => {
    assert.equal(window.integerToRoman(1666), 'MDCLXVI', 'Should be MDCLXVI');
  });
  
  QUnit.test('ITR-A6: 944 => \'CMXLIV\'', (assert) => {
    assert.equal(window.integerToRoman(944), 'CMXLIV', 'Should be CMXLIV');
  });
  
  QUnit.test('ITR-A7: 3.5 => Error', (assert) => {
    assert.throws(
      () => window.integerToRoman(3.5),
      /Invalid Input/,
      'Should throw error for non-integer 3.5'
    );
  });
  
  QUnit.test('ITR-A8: 2008 => \'MMVIII\'', (assert) => {
    assert.equal(window.integerToRoman(2008), 'MMVIII', 'Should be MMVIII');
  });
  
  QUnit.test('ITR-A9: 1000 => \'M\'', (assert) => {
    assert.equal(window.integerToRoman(1000), 'M', 'Should be M');
  });
  
  QUnit.test('ITR-A10: 58 => \'LVIII\'', (assert) => {
    assert.equal(window.integerToRoman(58), 'LVIII', 'Should be LVIII');
  });
});
  