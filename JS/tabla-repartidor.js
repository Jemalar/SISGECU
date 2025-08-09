const offcanvasEditRepartidor = new bootstrap.Offcanvas(document.getElementById('offcanvasEditRepartidor'));

let infoForm = {};
let tabla = document.getElementById("tablarepartidores");

const listar_repartidores = () => {
    axios({
        method: 'GET',
        url:'http://127.0.0.1:8000/listarepartidores',
    }).then(function(response){
        tamaño =  response.data.resultado.length;
        console.log(response.data.resultado)
        for(let i = 0; i < tamaño; i++) {
            
            let nuevaFila = tabla.insertRow(-1);
            nuevaFila.classList.add("animate__animated", "animate__zoomInUp");
            nuevaFila.style.animationDelay = `${i * 0.1}s`;
            nuevaFila.dataset.id = response.data.resultado[i].cedula;

            cell0 = nuevaFila.insertCell(0);
            cell0.innerHTML = response.data.resultado[i].id_repartidor;

            cell1 = nuevaFila.insertCell(1);
            cell1.innerHTML = response.data.resultado[i].cedula;

            cell2 = nuevaFila.insertCell(2);
            cell2.innerHTML = response.data.resultado[i].nombres;

            cell3 = nuevaFila.insertCell(3);
            cell3.innerHTML = response.data.resultado[i].apellidos;

            cell4 = nuevaFila.insertCell(4);
            cell4.innerHTML = response.data.resultado[i].correoins;

            cell5 = nuevaFila.insertCell(5);
            cell5.innerHTML = response.data.resultado[i].contraseña;

            cell6 = nuevaFila.insertCell(6);
            cell6.innerHTML = response.data.resultado[i].telefono;

            cell7 = nuevaFila.insertCell(7);
            cell7.innerHTML = response.data.resultado[i].rol;

            cell8 = nuevaFila.insertCell(8);
            cell8.innerHTML = response.data.resultado[i].genero;

            cell9 = nuevaFila.insertCell(9);
            cell9.innerHTML = response.data.resultado[i].fechaing;

            cell10 = nuevaFila.insertCell(10);
            cell10.innerHTML = response.data.resultado[i].fechasal;

            cell11 = nuevaFila.insertCell(11);
            cell11.innerHTML = response.data.resultado[i].estado;

            cell12 = nuevaFila.insertCell(12);
            cell12.innerHTML = response.data.resultado[i].turno;

            cell13 = nuevaFila.insertCell(13);
            cell13.innerHTML =   `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Edit</a>`;

            cell14 = nuevaFila.insertCell(14);
            cell14.innerHTML =   `<a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;

        }
    }).catch(function(error){
                Swal.fire({
                title: '¡Vaya! Parece que no encontramos los datos',
                text: 'Esto puede deberse a que no hay conexion con la base de datos',
                icon: 'error',
                iconColor: '#fcdf2c',
                timer: 3000,
                showConfirmButton: false
              })
     })
}

const clearEditForm = () => {
    document.getElementById('editcedula').value = '';
    document.getElementById('editnombres').value = '';
    document.getElementById('editapellidos').value = '';
    document.getElementById('editcorreoins').value = '';
    document.getElementById('editcontraseña').value = '';
    document.getElementById('editelefono').value = '';
    document.getElementById('editrol').value = '';
    document.getElementById('editgenero').value = '';
    document.getElementById('editfechaing').value = '';
    document.getElementById('editfechasal').value = '';
    document.getElementById('editestado').value = '';
    document.getElementById('editurno').value = '';
    
};

const onEdit = (buttonElement) =>{
    let fila = buttonElement.closest('tr');
    let celda = fila.cells;
    cedulaestact = fila.dataset.id

    const datarepartidor = {
        cedula : celda[1].textContent,
        nombres : celda[2].textContent,
        apellidos : celda[3].textContent,
        correoins : celda[4].textContent,
        contraseña : celda[5].textContent,
        telefono : celda[6].textContent,
        rol : celda[7].textContent,
        genero : celda[8].textContent,
        fechaing : celda[9].textContent,
        fechasal : celda[10].textContent,
        estado : celda[11].textContent,
        turno: celda[12].textContent,
    }

    document.getElementById('editcedula').value = datarepartidor.cedula;
    document.getElementById('editnombres').value = datarepartidor.nombres;
    document.getElementById('editapellidos').value = datarepartidor.apellidos;
    document.getElementById('editcorreoins').value = datarepartidor.correoins;
    document.getElementById('editcontraseña').value = datarepartidor.contraseña;
    document.getElementById('editelefono').value = datarepartidor.telefono;
    document.getElementById('editrol').value = datarepartidor.rol;
    document.getElementById('editgenero').value = datarepartidor.genero;
    document.getElementById('editfechaing').value = datarepartidor.fechaing;
    document.getElementById('editfechasal').value = datarepartidor.fechasal;
    document.getElementById('editestado').value = datarepartidor.estado;
    document.getElementById('editurno').value = datarepartidor.turno;

    offcanvasEditRepartidor.show();
}

const actrepartidor = () => {
    Swal.fire({
        title: '¿Actualizar repartidor?',
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
            const urlmethod = `http://127.0.0.1:8000/actualizarepartidor/${cedula_actual}`
            const vcedula = document.getElementById('editcedula').value
            const vnombres = document.getElementById('editnombres').value
            const vapellidos = document.getElementById('editapellidos').value
            const vcorreoins = document.getElementById('editcorreoins').value
            const vcontraseña = document.getElementById('editcontraseña').value
            const vtelefono = document.getElementById('editelefono').value
            const vrol = document.getElementById('editrol').value
            const vgenero = document.getElementById('editgenero').value
            const vfechaing = document.getElementById('editfechaing').value
            const vfechasal = document.getElementById('editfechasal').value || null //Si el campo esta vacío será null
            const vestado = document.getElementById('editestado').value
            const vturno = document.getElementById('editurno').value
            axios ({
                method: 'PUT',
                url: urlmethod,
                data: {
                    cedula:vcedula,
                    nombres:vnombres,
                    apellidos:vapellidos,
                    correoins:vcorreoins,
                    contraseña:vcontraseña,
                    telefono:vtelefono,
                    rol:vrol,
                    genero:vgenero,
                    fechaing:vfechaing,
                    fechasal:vfechasal,
                    estado:vestado,
                    turno:vturno
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
                window.location.href = '../HTML/tabla-repartidores.html';
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
        title: '¿Eliminar repartidor?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        iconColor: '#fcdf2c',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            let fila = buttonElement.closest('tr');
            cedula = fila.dataset.id
            const urlmethod = `http://127.0.0.1:8000/eliminarepartidor/${cedula}`

            axios({
                method: 'DELETE',
                url: urlmethod,
            }).then(function response() {
                Swal.fire({
                    title: 'Eliminado',
                    text: 'El repartidor ha sido eliminado.',
                    icon: 'success',
                    iconColor: '#fcdf2c',
                    confirmButtonText: 'Aceptar'
                }).then(() => {
                    window.location.href = '../HTML/tabla-repartidores.html';
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