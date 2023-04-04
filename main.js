// Define the available characters for each attribute
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers = "0123456789";
const SpecialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

// Function to generate a new password
function generatePassword() {
  // Define the length and attributes of the password
  const passwordMinLength = 8;
  const passwordMaxLength = 24;
  const passwordAttributes = [
    { name: "LowerCase", value: true },
    { name: "UpperCase", value: true },
    { name: "Numbers", value: true },
    { name: "SpecialCharacters", value: true },
  ];

  // Generate a new password based on the length and attributes
  const passwordLength = Math.floor(
    Math.random() * (passwordMaxLength - passwordMinLength + 1) +
      passwordMinLength
  );
  let newPassword = "";
  let availableCharacters = "";

  // Build the available characters based on the selected attributes
  passwordAttributes.forEach((attribute) => {
    if (attribute.value) {
      availableCharacters += eval(attribute.name);
    }
  });

  // Generate the password using the available characters
  for (let i = 0; i < passwordLength; i++) {
    newPassword += availableCharacters.charAt(
      Math.floor(Math.random() * availableCharacters.length)
    );
  }

  // Return the new password
  return newPassword;
}

// Get the Generate, Clear, and Save buttons
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const saveBtn = document.getElementById("saveBtn");

// Add an event listener to the Generate button
generateBtn.addEventListener("click", function () {
  // Generate a new password
  const newPassword = generatePassword();

  // Update the password output with the new password
  const passwordOutput = document.getElementById("passwordOutput");
  passwordOutput.value = newPassword;
});

// Add an event listener to the Clear button
clearBtn.addEventListener("click", function () {
  // Clear the password output
  const passwordOutput = document.getElementById("passwordOutput");
  passwordOutput.value = "";
});

// Add an event listener to the Save button
saveBtn.addEventListener("click", function () {
  // TODO: Save the password to a server or to local storage
});
