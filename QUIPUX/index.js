document.addEventListener('DOMContentLoaded', function() {
    var iconoUsuario = document.querySelector('.info_usuario img');
    var modal = document.getElementById('modal');
    var closeBtn = document.querySelector('.cerrar');

    iconoUsuario.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});