// Select input field and all table cells
const input = document.getElementById('num');
const buttons = document.querySelectorAll('.container td');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            try {
                input.value = eval(input.value); // Calculate result
            } catch {
                input.value = 'Error';
            }
        } else {
            input.value += value; // Append button value to input
        }
    });
});


