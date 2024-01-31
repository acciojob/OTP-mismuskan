//your JS code here. If required.
  const codeInputs = document.querySelectorAll('.code');
  
  codeInputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
      const value = event.target.value;
      if (value.length === 1 && index < codeInputs.length - 1) {
        codeInputs[index + 1].focus();
      } else if (value.length === 0 && index > 0) {
        codeInputs[index - 1].focus();
      }
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Backspace' && index > 0) {
        codeInputs[index - 1].focus();
      }
    });
  });