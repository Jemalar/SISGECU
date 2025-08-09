/* GUARDAR DATOS:
    localStorage.setItem('nombre_estudiante', res.nombres);
    localStorage.setItem('programa_estudiante', res.programa);*/

        /*if (!email || !password) {
        alert('Por favor, ingresa tu correo institucional y contraseña.');
        return; // Detiene la ejecución si falta algún campo
    }*/
const InicioSesion = () => {
    const vcorreo = document.getElementById('student-email').value
    const vcontraseña = document.getElementById('student-password').value

    axios ({
        method: 'POST',
        url: 'http://127.0.0.1:8000/login/estudiante',
        data: {
            correoins:vcorreo,
            contraseña:vcontraseña
        }
    }).then(function(response) {
        const respuesta = response.data
        if (respuesta.login == true){
            alert('Inicio de sesion exitoso');
            window.location.href='./dashboard_student.html';
        } else {
            alert("Correo o contraseña incorrectos")
        }
        
    }).catch(err => console.log('Error de inico',err));
}