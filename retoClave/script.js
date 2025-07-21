// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Se obtienen referencias a los elementos del DOM necesarios
    const usernameInput = document.getElementById('username');       // Campo de entrada para el nombre de usuario
    const passwordInput = document.getElementById('password');       // Campo de entrada para la contraseña
    const loginButton = document.getElementById('login-button');     // Botón para iniciar sesión
    const loginForm = document.getElementById('login-form');         // Formulario de inicio de sesión
    const errorMessage = document.getElementById('error-message');   // Contenedor para mostrar mensajes de error

    // Función para verificar si ambos campos de entrada tienen texto
    function checkInputs() {
        // Si ambos campos tienen contenido, se activa el botón
        if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            loginButton.classList.add('active');          // Añade una clase que puede estilizar el botón como "activo"
            loginButton.removeAttribute('disabled');      // Habilita el botón
        } else {
            // Si alguno está vacío, se desactiva el botón
            loginButton.classList.remove('active');       // Quita la clase "activo"
            loginButton.setAttribute('disabled', 'true'); // Deshabilita el botón
        }
    }

    // Se agregan eventos para verificar los campos cada vez que el usuario escribe
    usernameInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    // Verifica los campos al cargar la página, por si el navegador autocompleta
    checkInputs();

    // Maneja el envío del formulario
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Previene el envío normal del formulario (evita recargar la página)

        const username = usernameInput.value.trim(); // Se obtiene y limpia el valor del nombre de usuario
        const password = passwordInput.value.trim(); // Se obtiene y limpia el valor de la contraseña

        // Simula una validación básica (usuario y contraseña predefinidos)
        if (username === 'sebastian' && password === '12345') {
            alert('¡Inicio de sesión exitoso!'); // Muestra una alerta de éxito
            // Aquí se podría redirigir al usuario a otra página
            // window.location.href = 'dashboard.html';

            // Oculta el mensaje de error si estaba visible
            errorMessage.classList.remove('error-visible');
            errorMessage.classList.add('error-hidden');
        } else {
            // Si la validación falla, se muestra el mensaje de error
            errorMessage.classList.remove('error-hidden');
            errorMessage.classList.add('error-visible');

            // Por seguridad, se borra el campo de la contraseña
            passwordInput.value = '';
            checkInputs(); // Vuelve a verificar los campos para deshabilitar el botón si es necesario
        }
    });
});

// Función independiente para ocultar el mensaje de error (se puede usar desde HTML, por ejemplo, con un botón "cerrar")
function hideError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.classList.remove('error-visible'); // Quita la clase que muestra el error
    errorMessage.classList.add('error-hidden');     // Añade la clase que lo oculta
}
