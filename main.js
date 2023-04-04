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
    {
      name: "LowerCase",
      value: document.getElementById("lowercaseCheckbox").checked,
    },
    {
      name: "UpperCase",
      value: document.getElementById("uppercaseCheckbox").checked,
    },
    {
      name: "Numbers",
      value: document.getElementById("numbersCheckbox").checked,
    },
    {
      name: "SpecialCharacters",
      value: document.getElementById("specialCharactersCheckbox").checked,
    },
  ];

  // Generate a new password based on the length and attributes
  // Get the password length from the input field
  const passwordLength = document.getElementById("passwordLengthInput").value;

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
  // Save the password to local storage
  const newPassword = document.getElementById("passwordOutput").value;
  localStorage.setItem("savedPassword", newPassword);
  savedPasswords.push(newPassword);
});

// Adding Modal or Text Area to Show the Passwords Saved
let savedPasswords = [];

function showSavedPasswords() {
  const savedPasswordsTextarea = document.createElement("textarea");
  savedPasswordsTextarea.value = savedPasswords.join("\n");
  document.body.appendChild(savedPasswordsTextarea);
}

const viewPasswordsBtn = document.getElementById("viewPasswordsBtn");
viewPasswordsBtn.addEventListener("click", showSavedPasswords);
