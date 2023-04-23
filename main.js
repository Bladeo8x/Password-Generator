// Check if welcome alert has been shown before to avoid re-appearing after RELOADING
const welcomeAlertShown = localStorage.getItem("welcomeAlertShown");
if (!welcomeAlertShown) {
  // Show the welcome alert
  swal("Welcome to my Password Generator!", "Let's Start!");
  // Set the flag in local storage to indicate that the welcome alert has been shown
  localStorage.setItem("welcomeAlertShown", true);
}

// Define the available characters for each attribute
const passwordAttributes = [
  {
    name: "LowerCase",
    checkboxId: "lowercaseCheckbox",
  },
  {
    name: "UpperCase",
    checkboxId: "uppercaseCheckbox",
  },
  {
    name: "Numbers",
    checkboxId: "numbersCheckbox",
  },
  {
    name: "SpecialCharacters",
    checkboxId: "specialCharactersCheckbox",
  },
];

// Function to generate a new password
function generatePassword() {
  // Generate a new password based on the length and attributes
  // Get the password length from the input field
  const passwordLength = document.getElementById("passwordLengthInput").value;

  // Destructure the password attributes to get the selected attribute names
  const { LowerCase, UpperCase, Numbers, SpecialCharacters } =
    passwordAttributes.reduce((acc, attribute) => {
      const checkbox = document.getElementById(attribute.checkboxId);
      if (checkbox.checked) {
        acc[attribute.name] = true;
      }
      return acc;
    }, {});

  // Build the available characters based on the selected attributes
  let newPassword = "";
  let availableCharacters = "";
  if (LowerCase) {
    availableCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (UpperCase) {
    availableCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (Numbers) {
    availableCharacters += "0123456789";
  }
  if (SpecialCharacters) {
    availableCharacters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
  }

  // Generate the password using the available characters
  for (let i = 0; i < passwordLength; i++) {
    newPassword += availableCharacters.charAt(
      Math.floor(Math.random() * availableCharacters.length)
    );
  }

  // Return the new password
  return newPassword;
}

// Get the Generate, Clear, Save, and Erase buttons
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const saveBtn = document.getElementById("saveBtn");
const viewPasswordsBtn = document.getElementById("viewPasswordsBtn");

// Define an empty array for saved passwords
let savedPasswords = [];

// Add an event listener to the Generate button with SweetAlert
generateBtn.addEventListener("click", () => {
  swal("Good job!", "Password Generated!", "success");

  // Generate a new password
  const newPassword = generatePassword();

  // Update the password output with the new password
  const passwordOutput = document.getElementById("passwordOutput");
  passwordOutput.value = newPassword;

  // Create a JSON object for the generated password
  const passwordObject = {
    passwordNumber: savedPasswords.length + 1,
    passwordValue: newPassword,
    timestamp: new Date().toLocaleString(),
  };

  // Add the password object to the savedPasswords array
  savedPasswords.push(passwordObject);
});

// Add an event listener to the Clear button
clearBtn.addEventListener("click", () => {
  swal("Try Another One!", "Password Deleted!", "warning");
  // Clear the password output
  const passwordOutput = document.getElementById("passwordOutput");
  passwordOutput.value = "";
});

// Add an event listener to the Save button
saveBtn.addEventListener("click", () => {
  swal("Locked!", "Password Saved!", "success");
  // Save the password array to local storage as JSON
  localStorage.setItem("savedPasswords", JSON.stringify(savedPasswords));
});

// Add an event listener to the View passwords button
viewPasswordsBtn.addEventListener("click", () => {
  // Fetch the saved passwords from local storage and parse them as JSON
  const savedPasswordsJson = localStorage.getItem("savedPasswords");
  const savedPasswordsArray = JSON.parse(savedPasswordsJson) || [];

  // Get the modal and the textarea for displaying saved passwords
  const modal = document.getElementById("savedPasswordsModal");
  const textarea = document.getElementById("savedPasswordsTextarea");

  // Clear the textarea
  textarea.value = "";

  // Loop through the savedPasswords array and append each password to the textarea
  savedPasswordsArray.forEach((password, index) => {
    textarea.value += `Password ${password.passwordNumber}: ${password.passwordValue} (Generated at ${password.timestamp})\n`;
  });

  // Add an event listener to the "Clear Local Storage" button
  const clearLocalStorageBtn = document.getElementById("clearLocalStorageBtn");
  clearLocalStorageBtn.addEventListener("click", () => {
    // Clear the saved passwords from local storage
    localStorage.removeItem("savedPasswords");
    // Display a confirmation message
    swal("Passwords Saved Cleared!", "All data has been deleted.", "success");

    // Clear the text area value in the modal
    textarea.value = "";
  });

  // Show the modal with passwords saved
  $(modal).modal("hide");
});
