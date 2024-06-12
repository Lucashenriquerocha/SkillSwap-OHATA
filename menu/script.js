
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('input').value;
    alert('Usuário trocado: ' + username);
});
