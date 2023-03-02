const includeLowercaseElement = document.getElementById("includeLowercase");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSpecialCharactersElement = document.getElementById(
  "includeSpecialCharacters"
);
const form = document.getElementById("passwordGeneratorForm");
const PasswordDisplay = document.getElementById("PasswordDisplay");
const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");

// Assignment of variables

const LowerCase = arrayFromLowToHigh(97, 122);
const UpperCase = arrayFromLowToHigh(65, 90);
const Numbers = arrayFromLowToHigh(48, 57);
const SpecialCharacters = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

// Adding EventListeners

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeLowercase = includeLowercaseElement.checked;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSpecialCharacters = includeSpecialCharactersElement.checked;
  const Password = generatePassword(
    characterAmount,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSpecialCharacters
  );
  PasswordDisplay.innerText = Password;
});

function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSpecialCharacters
) {
  let charCodes = LowerCase;
  if (includeUppercase) charCodes = charCodes.concat(UpperCase);
  if (includeSpecialCharacters) charCodes = charCodes.concat(SpecialCharacters);
  if (includeNumbers) charCodes = charCodes.concat(Numbers);

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

// function generatePassword() {
//   document.getElementById("PasswordDisplay");
// console.log("hola pass");
