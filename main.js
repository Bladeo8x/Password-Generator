const includeUppercaseElement = document.getElementById("Include-Uppercase");
const includeNumbersElement = document.getElementById("Include-Numbers");
const includeSymbolsElement = document.getElementById(
  "Include-SpecialCharacters"
);
const form = document.getElementById("Password-GeneratorForm");
const PasswordDisplay = document.getElementById("PasswordDisplay");

// Assignment of variables

const LowerCase = arrayFromLowToHigh(97, 122);
const UpperCase = arrayFromLowToHigh(65, 90);
const Numbers = arrayFromLowToHigh(48, 57);
const SpecialCharacters = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));
