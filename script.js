document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded before attaching event listeners

  const form = document.querySelector('form');
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');

  form.addEventListener('submit', function () {
    // Prevent the form from submitting
    event.preventDefault();

    // Get user input values
    const textValue = textInput.value;
    const delayValue = delayInput.value;

    // Clear previous output
    outputDiv.innerHTML = '';

    // Validate input
    if (!textValue || isNaN(delayValue)) {
      outputDiv.innerText = 'Please enter valid input.';
      return;
    }

    // Convert delay to milliseconds
    const delayInMilliseconds = parseInt(delayValue) * 1000;

    // Display message after the specified delay
    setTimeout(function () {
      outputDiv.innerText = `Delayed message: ${textValue}`;
    }, delayInMilliseconds);
  });
});
