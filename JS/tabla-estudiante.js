const offcanvasEditStudent = new bootstrap.Offcanvas(document.getElementById('offcanvasEditStudent'));

let infoForm = {};
let tabla = document.getElementById("tablaestudiantes");

const listar_estudiantes = () => {
    axios({
        method: 'GET',
        url: 'http://127.0.0.1:8000/listaestudiantes',
    }).then(function(response) {
        tamaño =  response.data.resultado.length;

        for(let i = 0; i < tamaño; i++) {

            let nuevaFila = tabla.insertRow(-1);
            nuevaFila.classList.add("animate__animated", "animate__zoomInUp");
            nuevaFila.style.animationDelay = `${i * 0.1}s`;
            nuevaFila.dataset.id = response.data.resultado[i].cedula;

            cell0 = nuevaFila.insertCell(0);
            cell0.innerHTML = response.data.resultado[i].id_estudiante;

            cell1 = nuevaFila.insertCell(1);
            cell1.innerHTML = response.data.resultado[i].cedula;

            cell2 = nuevaFila.insertCell(2);
            cell2.innerHTML = response.data.resultado[i].nombres;

            cell3 = nuevaFila.insertCell(3);
            cell3.innerHTML = response.data.resultado[i].apellidos;

            cell4 = nuevaFila.insertCell(4);
            cell4.innerHTML = response.data.resultado[i].genero;

            cell5 = nuevaFila.insertCell(5);
            cell5.innerHTML = response.data.resultado[i].correoins;

            cell6 = nuevaFila.insertCell(6);
            cell6.innerHTML = response.data.resultado[i].contraseña;

            cell7 = nuevaFila.insertCell(7);
            cell7.innerHTML = response.data.resultado[i].programa;

            cell8 = nuevaFila.insertCell(8);
            cell8.innerHTML = response.data.resultado[i].cuatrimestre;

            cell9 = nuevaFila.insertCell(9);
            cell9.innerHTML = response.data.resultado[i].estado;

            cell10 = nuevaFila.insertCell(10);
            cell10.innerHTML = response.data.resultado[i].fechare;

            cell11 = nuevaFila.insertCell(11);
            cell11.innerHTML = response.data.resultado[i].rol;

            cell12 = nuevaFila.insertCell(12);
            cell12.innerHTML =   `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Edit</a>`;

            cell13 = nuevaFila.insertCell(13);
            cell13.innerHTML =   `<a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;

        }
    }).catch(function(error){
                Swal.fire({
                    title: '¡Vaya! Parece que no encontramos los datos',
                    text: 'Esto puede deberse a que no hay conexion con la base de datos',
                    icon: 'error',
                    iconColor: '#fcdf2c',
                    timer: 2000,
                    showConfirmButton: false
                })
    })
}

const clearEditForm = () => {
    document.getElementById('editcedula').value = '';
    document.getElementById('editnombres').value = '';
    document.getElementById('editapellidos').value = '';
    document.getElementById('editgenero').value = '';
    document.getElementById('editcorreoins').value = '';
    document.getElementById('editcontraseña').value = '';
    document.getElementById('editprograma').value = '';
    document.getElementById('editcuatrimestre').value = '';
    document.getElementById('editestado').value = '';
    document.getElementById('editrol').value = '';
};

//ESTO LO QUE HACE ES QUE TOMA EL DIV DEL OFFCANVA PARA ESTAR ATENTO A QUE ALGO PASE 'hidden.bs.offcanvas' 
// ES UNA PROPIEDAD DE BOOTSTRAP QUE AÑADE LA LIMPIEZA DEL FOMRULARIO AL CERRAR EL OFFCANVA
document.getElementById('offcanvasEditStudent').addEventListener('hidden.bs.offcanvas', clearEditForm);

const onEdit = (buttonElement) =>{
    //Para obtener la fila a la que pertenece el boton edit
    let fila = buttonElement.closest('tr');
    //Obtener todas las celdas de la fila
    let celda = fila.cells;
    // Obtenemos el ID del estudiante que guardamos en el atributo data-id de la fila
    cedulaestact = fila.dataset.id
    //Creamos una data del estudiante
    const dataestudent = {
        cedula: celda[1].textContent,
        nombres: celda[2].textContent,
        apellidos: celda[3].textContent,
        genero: celda[4].textContent,
        correoins: celda[5].textContent,
        contraseña: celda[6].textContent,
        programa: celda[7].textContent,
        cuatrimestre: celda[8].textContent,
        estado: celda[9].textContent,
        rol: celda[11].textContent  
    }

    // Rellenar el formulario del Offcanvas con los datos del estudiante
    document.getElementById('editcedula').value = dataestudent.cedula;
    document.getElementById('editnombres').value = dataestudent.nombres;
    document.getElementById('editapellidos').value = dataestudent.apellidos;
    document.getElementById('editgenero').value = dataestudent.genero;
    document.getElementById('editcorreoins').value = dataestudent.correoins;
    document.getElementById('editcontraseña').value = dataestudent.contraseña;
    document.getElementById('editprograma').value = dataestudent.programa;
    document.getElementById('editcuatrimestre').value = dataestudent.cuatrimestre;
    document.getElementById('editestado').value = dataestudent.estado;
    document.getElementById('editrol').value = dataestudent.rol;

    offcanvasEditStudent.show();
}

const actestudiante = () => {
    Swal.fire({
        title: '¿Actualizar estudiante?',
        text: 'Esta a punto de cambiar la informacion.',
        icon: 'warning',
        iconColor: '#fcdf2c',
        showCancelButton: true,
        confirmButtonText: 'Sí, actualizar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            const cedula_actual = cedulaestact; 
            const urlmethod = `http://127.0.0.1:8000/actualizarestudiante/${cedula_actual}`
            const vcedula = document.getElementById('editcedula').value
            const vnombres = document.getElementById('editnombres').value
            const vapellidos = document.getElementById('editapellidos').value
            const vgenero = document.getElementById('editgenero').value
            const vcorreoins = document.getElementById('editcorreoins').value
            const vcontraseña = document.getElementById('editcontraseña').value
            const vprograma = document.getElementById('editprograma').value
            const vcuatrimestre = document.getElementById('editcuatrimestre').value
            const vestado = document.getElementById('editestado').value
            const vrol = document.getElementById('editrol').value
            axios ({
                method: 'PUT',
                url: urlmethod,
                data: {
                    cedula:vcedula,
                    nombres:vnombres,
                    apellidos:vapellidos,
                    genero:vgenero,
                    correoins:vcorreoins,
                    contraseña:vcontraseña,
                    programa:vprograma,
                    cuatrimestre:vcuatrimestre,
                    estado:vestado,
                    rol:vrol
                }
            }).then(function response() {
                Swal.fire({
                    title: 'Actualizado',
                    text: 'La infromacion ha sido actualizada.',
                    icon: 'success',
                    iconColor: '#fcdf2c',
                    timer: 3000,
                    showConfirmButton: false 
                }).then(()=>{
                    idestact = null;
                window.location.href = '../HTML/tabla-estudiantes.html';
                })
            }).catch(function(error){
                Swal.fire({
                    title: '¡Vaya! Ha ocurrido un error',
                    text: 'Parece que no se pudo completar la actualizacion.',
                    icon: 'error',
                    iconColor: '#fcdf2c',
                    timer: 2000,
                    showConfirmButton: false
                })
            })
        }
      });
}

const onDelete = (buttonElement) => {
    Swal.fire({
        title: '¿Eliminar estudiante?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        iconColor: '#fcdf2c',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            //Para obtener la fila a la que pertenece el boton delete
            let fila = buttonElement.closest('tr');
            cedula = fila.dataset.id
            // Obtenemos el ID del estudiante que guardamos en la variable global
            // const id_estudiante = idestact
            const urlmethod = `http://127.0.0.1:8000/eliminarestudiante/${cedula}`
            axios({
                method: 'DELETE',
                url: urlmethod,
            }).then(function response() {
                Swal.fire({
                    title: 'Eliminado',
                    text: 'El estudiante ha sido eliminado.',
                    icon: 'success',
                    iconColor: '#fcdf2c',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    window.location.href = '../HTML/tabla-estudiantes.html';
                })
            }).catch(function(error){
                Swal.fire({
                    title: '¡Vaya! Ha ocurrido un error',
                    text: 'Parece que no se pudo completar la eliminacion.',
                    icon: 'error',
                    iconColor: '#fcdf2c',
                    timer: 2000,
                    showConfirmButton: false
                })
            })
        }
      });
}
