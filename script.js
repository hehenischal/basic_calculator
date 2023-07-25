// Get the textarea element for displaying the output
const output = document.querySelector("textarea");

// Get all the calculator keys
const keys = document.querySelectorAll(".key");

// Helper function to evaluate the arithmetic expression
function evaluateExpression(expression) {
  try {
    // Replace leading zeros with an empty string before evaluation
    const sanitizedExpression = expression.replace(/^0+(?=\d)/, "");
    return eval(sanitizedExpression);
  } catch (error) {
    return "Error";
  }
}

// Helper function to check if the input is a valid number or operator
function isValidInput(input) {
  // Use a regular expression to check if the input is a valid number or operator
  return /^-?\d*\.?\d+|[\+\-\*\/]$/.test(input);
}

// Helper function to update the output display
function updateOutput(value) {
  output.value = value;
}

// Event listener for each calculator key
keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyContent = key.textContent;
    const currentExpression = output.value;

    if (keyContent === "=") {
      // Evaluate the expression and update the output
      const result = evaluateExpression(currentExpression);
      updateOutput(result);
    } else if (keyContent === "c") {
      // Clear the output
      updateOutput("");
    } else {
      // Check if the key content is a valid number or operator
      if (isValidInput(currentExpression + keyContent)) {
        // Append the clicked key content to the current expression
        updateOutput(currentExpression + keyContent);
      } else {
        // Ignore the key press if the input is not a valid number or operator
        console.log("Invalid input: Only numbers and operators (+, -, *, /) allowed.");
      }
    }
  });
});
