document.getElementById('formIngresar').addEventListener('submit', async (e) => {
    e.preventDefault();
//Se realiza la verificación de la respuesta en el controlador para redireccionar a la url respectiva. //
    try {
        // Se busca en el documento de Login por medio del id. //
        var datos = new FormData(document.getElementById('formIngresar'));
        datos.append('ingresar', 'OK');

        var peticion = await fetch('../Controllers/LoginController.php', {
            method: 'POST',
            body: datos
        })

        var resjson = await peticion.json();

        if (resjson.respuesta == "OK") {
            window.location.href = 'http://localhost/LoginCorregido-main/Views/Principal.php';
            //window.location = '../../../admin.php';
            
        } else {
            
            notificarError(resjson.respuesta);
        }

    } catch (error) {
        notificarError('Se ha generado un error en el servidor!');
       console.log(error);
    }

})
function notificarError(mensaje) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: mensaje
    })
}

