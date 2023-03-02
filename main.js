const includeLowercaseElement = document.getElementById("includeLowercase");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSpecialCharactersElement = document.getElementById(
  "includeSpecialCharacters"
);
const form = document.getElementById("passwordGeneratorForm");
const PasswordDisplay = document.getElementById("PasswordDisplay");

// Assignment of variables

const LowerCase = arrayFromLowToHigh(97, 122);
const UpperCase = arrayFromLowToHigh(65, 90);
const Numbers = arrayFromLowToHigh(48, 57);
const SpecialCharacters = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

// Adding EventListeners

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const includeLowercase = includeLowercaseElement.checked;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSpecialCharacters = includeSpecialCharactersElement.checked;
  const password = generatePassword(
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSpecialCharacters
  );
  PasswordDisplay.innerText = password;
});

function generatePassword(
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSpecialCharacters
) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeSpecialCharacters) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);

  // Arrays included
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}

if (generateBtn) console.log("hola pass");
