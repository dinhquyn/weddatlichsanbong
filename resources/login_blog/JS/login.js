document.getElementById('forgot-password-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-container').style.display = 'none'; 
    document.getElementById('forgot-password-container').style.display = 'block'; 
});

document.getElementById('close-forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('forgot-password-container').style.display = 'none'; 
    document.getElementById('login-container').style.display = 'block'; 
});
