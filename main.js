const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'kuce_connect' && password === 'korea1905') {
        loginMessage.textContent = 'Login successful!';
        loginMessage.className = 'success';
    } else {
        loginMessage.textContent = 'Invalid username or password.';
        loginMessage.className = 'error';
    }
});
