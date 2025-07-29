document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    const keypad = document.getElementById('keypad');
    let currentPassword = '';

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function generateKeypad() {
        keypad.innerHTML = ''; 
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        shuffleArray(numbers);

        
        numbers.forEach(number => {
            const button = document.createElement('button');
            button.textContent = number;
            button.addEventListener('click', () => {
                currentPassword += number;
                updatePasswordInput();
                generateKeypad(); // 
            });
            keypad.appendChild(button);
        });

        
        const zeroButton = document.createElement('button');
        zeroButton.textContent = '0';
        zeroButton.classList.add('zero-button');
        zeroButton.addEventListener('click', () => {
            currentPassword += '0';
            updatePasswordInput();
            generateKeypad(); 
        });
        keypad.appendChild(zeroButton);

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Borrar';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            currentPassword = currentPassword.slice(0, -1);
            updatePasswordInput();
            
        });
        keypad.appendChild(deleteButton);
    }

    function updatePasswordInput() {
        
        passwordInput.value = '*'.repeat(currentPassword.length);
    }

    generateKeypad(); 
});