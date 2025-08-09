const registrarepartidor =() => {
    const vcedula = document.getElementById('cedula').value
    const vnombres = document.getElementById('nombres').value
    const vapellidos = document.getElementById('apellidos').value
    const vcorreoins = document.getElementById('correoins').value
    const vcontraseña = document.getElementById('contraseña').value
    const vtelefono = document.getElementById('telefono').value
    const vrol = document.getElementById('rol').value
    const vgenero = document.getElementById('genero').value
    const vestado = document.getElementById('estado').value
    const vturno = document.getElementById('turno').value

        axios ({
            method: 'POST',
            url: 'http://127.0.0.1:8000/insertarepartidor',
            data: {
                cedula:vcedula,
                nombres:vnombres,
                apellidos:vapellidos,
                correoins:vcorreoins,
                contraseña:vcontraseña,
                telefono:vtelefono,
                rol:vrol,
                genero:vgenero,
                estado:vestado,
                turno:vturno
            }
        }).then(function(response){
            Swal.fire({
                    title: 'Agregado',
                    text: 'El repartidor ha sido registrado.',
                    icon: 'success',
                    iconColor: '#fcdf2c',
                    timer: 2000,
                    showConfirmButton: false
                }).then(()=>{
                    window.location.href = '../HTML/panel-repartidores.html';
                }).catch(function (error) {
                    Swal.fire({
                            title: 'Ups...',
                            text: 'Parece que hubo un error. Verifica los datos',
                            icon: 'error',
                            iconColor: '#fcdf2c',
                            timer: 2000,
                            showConfirmButton: false
                        })
                })
        })
}

const buscaractualizar = () => {
    const cedula = document.getElementById('actced').value
    const urlmethod = `http://127.0.0.1:8000/repartidorid/${cedula}`
    axios({
        method: 'GET',
        url: urlmethod,
    }).then(function(response){
        Swal.fire({
        title: 'Buscando...',
        text: 'Espere un momento.',
        icon: 'warning',
        iconColor: '#fcdf2c',
        timer: 2000,
        showConfirmButton: false
      }).then(() =>{
        document.getElementById('actnombres').value = response.data.resultado[0].nombres;
        document.getElementById('actapellidos').value = response.data.resultado[0].apellidos;
        document.getElementById('actcorreoins').value = response.data.resultado[0].correoins;
        document.getElementById('actcontraseña').value = response.data.resultado[0].contraseña;
        document.getElementById('actelefono').value = response.data.resultado[0].telefono;
        document.getElementById('actrol').value = response.data.resultado[0].rol;
        document.getElementById('actgenero').value = response.data.resultado[0].genero;
        document.getElementById('actfechaing').value = response.data.resultado[0].fechaing;
        document.getElementById('actfechasal').value = response.data.resultado[0].fechasal;
        document.getElementById('actestado').value = response.data.resultado[0].estado;
        document.getElementById('acturno').value = response.data.resultado[0].turno;
      }).catch(function (error) {
            Swal.fire({
                title: 'Ups...',
                text: 'Parece que hubo un error. Revisa la cedula',
                icon: 'error',
                iconColor: '#fcdf2c',
                timer: 3000,
                showConfirmButton: false
            })
        })
    })
}

const actualizarepartidor = () => {
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
            const cedula = document.getElementById('actced').value
            const urlmethod = `http://127.0.0.1:8000/actualizarepartidor/${cedula}`
            const vnombres = document.getElementById('actnombres').value
            const vapellidos = document.getElementById('actapellidos').value
            const vcorreoins = document.getElementById('actcorreoins').value
            const vcontraseña = document.getElementById('actcontraseña').value
            const vtelefono = document.getElementById('actelefono').value
            const vrol = document.getElementById('actrol').value
            const vgenero = document.getElementById('actgenero').value
            const vfechasal = document.getElementById('actfechasal').value || null //Si el campo esta vacío será null
            const vestado = document.getElementById('actestado').value
            const vturno = document.getElementById('acturno').value
            axios({
                method: 'PUT',
                url: urlmethod,
                data:{
                    nombres:vnombres,
                    apellidos:vapellidos,
                    correoins:vcorreoins,
                    contraseña:vcontraseña,
                    telefono:vtelefono,
                    rol:vrol,
                    genero:vgenero,
                    fechasal:vfechasal,
                    estado:vestado,
                    turno:vturno
                    
                }
            }).then(function(response){
                    Swal.fire({
                        title: 'Actualizado',
                        text: 'La informacion ha sido actualizada.',
                        icon: 'success',
                        iconColor: '#fcdf2c',
                        timer: 3000,
                        showConfirmButton: false 
                    }).then(() => {
                        window.location.href = '../HTML/panel-repartidores.html';
                    })
                }).catch(function(error) {
                    console.error("Error en la solicitud:", error.response.data);
                    Swal.fire({
                        title: 'No se pudo actualizar',
                        text: 'Parece que hubo un error. Verifica los datos',
                        icon: 'error',
                        iconColor: '#fcdf2c',
                        timer: 2000,
                        showConfirmButton: false
                    })
                })
        }
      });
    
}

const clearActualizarRepartidor = () => {
    document.getElementById('actced').value = "";
    document.getElementById('actnombres').value = "";
    document.getElementById('actapellidos').value = "";
    document.getElementById('actcorreoins').value = "";
    document.getElementById('actcontraseña').value = "";
    document.getElementById('actelefono').value = "";
    document.getElementById('actrol').value = "";
    document.getElementById('actgenero').value = "";
    document.getElementById('actfechaing').value = "";
    document.getElementById('actfechasal').value = "";
    document.getElementById('actestado').value = "";
    document.getElementById('acturno').value = "";
};

const consultarepartidorid = () => {
    Swal.fire({
        title: 'Buscando...',
        text: 'Espere un momento.',
        icon: 'warning',
        iconColor: '#fcdf2c',
        timer: 2000,
        showConfirmButton: false
      }).then(()=> {
        const cedula = document.getElementById('busced').value
        const urlmethod = `http://127.0.0.1:8000/repartidorid/${cedula}`
        axios({
            method: 'GET',
            url: urlmethod,
        }).then(function(response){
            console.log(response.data[0])
            document.getElementById('busnombres').value = response.data.resultado[0].nombres;
            document.getElementById('busapellidos').value = response.data.resultado[0].apellidos;
            document.getElementById('buscorreoins').value = response.data.resultado[0].correoins;
            document.getElementById('buscontraseña').value = response.data.resultado[0].contraseña;
            document.getElementById('bustelefono').value = response.data.resultado[0].telefono;
            document.getElementById('busrol').value = response.data.resultado[0].rol;
            document.getElementById('busgenero').value = response.data.resultado[0].genero;
            document.getElementById('busfechaing').value = response.data.resultado[0].fechaing;
            document.getElementById('busfechasal').value = response.data.resultado[0].fechasal;
            document.getElementById('busestado').value = response.data.resultado[0].estado;
            document.getElementById('busturno').value = response.data.resultado[0].turno;
        }).catch(function(error) {
            Swal.fire({
                title: 'No encontrado...',
                text: 'Por favor verifica el numero de cedula.',
                icon: 'error',
                iconColor: '#fcdf2c',
                timer: 2000,
                showConfirmButton: false
            })
        })
    })
}

const clearBuscarRepartidor = () => {
    document.getElementById('busced').value = "";
    document.getElementById('busnombres').value = "";
    document.getElementById('busapellidos').value = "";
    document.getElementById('buscorreoins').value = "";
    document.getElementById('buscontraseña').value = "";
    document.getElementById('bustelefono').value = "";
    document.getElementById('busrol').value = "";
    document.getElementById('busgenero').value = "";
    document.getElementById('busfechaing').value = "";
    document.getElementById('busfechasal').value = "";
    document.getElementById('busestado').value = "";
    document.getElementById('busturno').value = "";
};

const buscareliminar = () => {
    const cedula = document.getElementById('deletecedula').value
    const urlmethod = `http://127.0.0.1:8000/repartidorid/${cedula}`
    axios({
        method: 'GET',
        url: urlmethod,
    }).then(function(response){
         Swal.fire({
        title: 'Buscando...',
        text: 'Espere un momento.',
        icon: 'warning',
        iconColor: '#fcdf2c',
        timer: 2000,
        showConfirmButton: false
      }).then(()=> {
        document.getElementById('deletenombres').value = response.data.resultado[0].nombres;
        document.getElementById('deleteapellidos').value = response.data.resultado[0].apellidos;
        document.getElementById('deletecorreoins').value = response.data.resultado[0].correoins;
        document.getElementById('deletecontraseña').value = response.data.resultado[0].contraseña;
        document.getElementById('deletelefono').value = response.data.resultado[0].telefono;
        document.getElementById('deleterol').value = response.data.resultado[0].rol;
        document.getElementById('deletegenero').value = response.data.resultado[0].genero;
        document.getElementById('deletefechaing').value = response.data.resultado[0].fechaing;
        document.getElementById('deletefechasal').value = response.data.resultado[0].fechasal;
        document.getElementById('deletestado').value = response.data.resultado[0].estado;
        document.getElementById('deleteturno').value = response.data.resultado[0].turno;
      })

    }).catch(function(error){
        Swal.fire({
            title: 'Ups...',
            text: 'Parece que hubo un error. Revisa la cedula',
            icon: 'error',
            iconColor: '#fcdf2c',
            timer: 3000,
            showConfirmButton: false
         })
    })
}

const eliminarepartidor = () => {
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
            const cedula = document.getElementById('deletecedula').value
            const urlmethod = `http://127.0.0.1:8000/eliminarepartidor/${cedula}`

            axios({
                method: 'DELETE',
                url: urlmethod,
            }).then(function(response){
                Swal.fire({
                    title: 'Eliminado',
                    text: 'El repartidor ha sido eliminado.',
                    icon: 'success',
                    iconColor: '#fcdf2c',
                    timer: 2000,
                    showConfirmButton: false,
                }).then(()=> {
                    window.location.href = '../HTML/panel-repartidores.html';
                })
            })
        }
      }).catch(function(error){
                Swal.fire({
                    title: 'Error...',
                    text: 'Parece queno se ha podido elminar.',
                    icon: 'error',
                    iconColor: '#fcdf2c',
                    timer: 3000,
                    showConfirmButton: false
                })
            })
}

const clearEliminarRepartidor = () => {
    document.getElementById('deletecedula').value = "";
    document.getElementById('deletenombres').value = "";
    document.getElementById('deleteapellidos').value = "";
    document.getElementById('deletecorreoins').value = "";
    document.getElementById('deletecontraseña').value = "";
    document.getElementById('deletelefono').value = "";
    document.getElementById('deleterol').value = "";
    document.getElementById('deletegenero').value = "";
    document.getElementById('deletefechaing').value = "";
    document.getElementById('deletefechasal').value = "";
    document.getElementById('deletestado').value = "";
    document.getElementById('deleteturno').value = "";
};

document.getElementById('EliminarRepartidor').addEventListener('hidden.bs.offcanvas', clearEliminarRepartidor);
document.getElementById('ActualizarRepartidor').addEventListener('hidden.bs.offcanvas', clearActualizarRepartidor);
document.getElementById('BuscarRepartidor').addEventListener('hidden.bs.offcanvas', clearBuscarRepartidor);