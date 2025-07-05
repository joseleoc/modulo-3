/**
 * Resets the form by clearing the input field, greeting message, and character count.
 * Also hides the results section and resets any error styles.
 */
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("greeting").innerHTML = "";
  document.getElementById("characterCount").innerHTML = "";
  hideResults();

  // Reset the input field and focus on it
  document.getElementById("name").focus();
}

/**
 * Displays the results section and the reset button.
 */
function showResults() {
  document.getElementById("reset").classList.remove("hidden");
  document.getElementById("result").classList.remove("hidden");

  // Add a delay to show the results to show the transition effect
  // This is a workaround to ensure the transition effect is visible
  setTimeout(() => {
    document.getElementById("greeting").classList.add("show-text");
    document.getElementById("characterCount").classList.add("show-text");
    console.log("asd");
  }, 10);
}

/**
 * Hides the results section and reset button.
 * Also removes any error styling from the character count element.
 */
function hideResults() {
  document.getElementById("greeting").classList.remove("show-text");
  document.getElementById("characterCount").classList.remove("show-text");

  document.getElementById("reset").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");
  document.getElementById("characterCount").classList.remove("error");
}

/**
 * Displays a greeting message on the screen.
 * Includes the provided name if available.
 * @param {string} name - The name to include in the greeting
 */
function greet(name) {
  let greeting = "";

  if (name === "" || name == null) {
    greeting = "Hola, Bienvenido/a al Módulo 3.";
  } else {
    greeting = `Hola ${name}! Bienvenido/a al Módulo 3.`;
  }

  document.getElementById("greeting").innerHTML = greeting;
  showResults();
}

/**
 * Displays the character count of the provided name.
 * Shows an error message if the name is empty.
 * @param {string} name - The name to count characters for
 */
function countCharacters(name) {
  const charCount = name.length;
  const spanElement = document.getElementById("characterCount");

  if (charCount === 0 || name == null) {
    spanElement.innerHTML = "El nombre está vacío.";
    spanElement.classList.add("error");
  } else {
    spanElement.innerHTML = `El nombre tiene ${charCount} caracteres.`;
    spanElement.classList.remove("error");
  }
}

function onGreet() {
  const name = String(document.getElementById("name").value).trim();
  greet(name);
  countCharacters(name);

  return false; // Prevent form submission
}

// Event Listeners

/** Event listener for the greet button click */
document.getElementById("greet").addEventListener("click", function () {
  onGreet();
});

/** Event listener for the reset button click */
document.getElementById("reset").addEventListener("click", function () {
  resetForm();
});

document.addEventListener("DOMContentLoaded", function () {
  // Focus on the name input field when the page loads
  document.getElementById("name").focus();
});
