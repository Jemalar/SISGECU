const registrarestudiante =() => {
    const vcedula = document.getElementById('cedula').value
    const vnombres = document.getElementById('nombres').value
    const vapellidos = document.getElementById('apellidos').value
    const vgenero = document.getElementById('genero').value
    const vcorreoins = document.getElementById('correoins').value
    const vcontraseña = document.getElementById('contraseña').value
    const vprograma = document.getElementById('programa').value
    const vcuatrimestre = document.getElementById('cuatrimestre').value
    const vestado = document.getElementById('estado').value
    const vrol = document.getElementById('rol').value

        axios ({
            method: 'POST',
            url: 'http://127.0.0.1:8000/insertarestudiante',
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
        }).then(function(response){
            Swal.fire({
                    title: 'Agregado',
                    text: 'El estudiante ha sido registrado.',
                    icon: 'success',
                    iconColor: '#fcdf2c',
                    timer: 3000,
                    showConfirmButton: false
                }).then(()=>{
                    window.location.href = '../HTML/panel-estudiante.html';
                })
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
       
}

const clearEstudiante = () => {
    document.getElementById('cedula').value = '';
    document.getElementById('nombres').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('correoins').value = '';
    document.getElementById('contraseña').value = '';
    document.getElementById('programa').value = '';
    document.getElementById('cuatrimestre').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('rol').value = '';
};

const buscaractualizar = () => {
    const cedula = document.getElementById('actcedula').value
    const urlmethod = `http://127.0.0.1:8000/estudianteid/${cedula}`
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
        document.getElementById('actgenero').value = response.data.resultado[0].genero;
        document.getElementById('actcorreoins').value = response.data.resultado[0].correoins;
        document.getElementById('actcontraseña').value = response.data.resultado[0].contraseña;
        document.getElementById('actprograma').value = response.data.resultado[0].programa;
        document.getElementById('actcuatrimestre').value = response.data.resultado[0].cuatrimestre;
        document.getElementById('actestado').value = response.data.resultado[0].estado;
        document.getElementById('actrol').value = response.data.resultado[0].rol;
      })
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
}

const actualizarestudiante = () => {
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
            const cedula = document.getElementById('actcedula').value
            const urlmethod = `http://127.0.0.1:8000/actualizarestudiante/${cedula}`
            const vnombres = document.getElementById('actnombres').value
            const vapellidos = document.getElementById('actapellidos').value
            const vgenero = document.getElementById('actgenero').value
            const vcorreoins = document.getElementById('actcorreoins').value
            const vcontraseña = document.getElementById('actcontraseña').value
            const vprograma = document.getElementById('actprograma').value
            const vcuatrimestre = document.getElementById('actcuatrimestre').value
            const vestado = document.getElementById('actestado').value
            const vrol = document.getElementById('actrol').value
            axios({
                method: 'PUT',
                url: urlmethod,
                data:{
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
            }).then(function(response){
                Swal.fire({
                    title: 'Actualizado',
                    text: 'La informacion ha sido actualizada.',
                    icon: 'success',
                    iconColor: '#fcdf2c',
                    timer: 3000,
                    showConfirmButton: false 
                }).then(() => {
                    window.location.href = '../HTML/panel-estudiante.html';
                })
            }).catch(function (error) {
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

const clearActualizarEstudiante = () => {
    document.getElementById('actcedula').value = '';
    document.getElementById('actnombres').value = '';
    document.getElementById('actapellidos').value = '';
    document.getElementById('actgenero').value = '';
    document.getElementById('actcorreoins').value = '';
    document.getElementById('actcontraseña').value = '';
    document.getElementById('actprograma').value = '';
    document.getElementById('actcuatrimestre').value = '';
    document.getElementById('actestado').value = '';
    document.getElementById('actrol').value = '';
};

const consultarestudianteid = () => {
    Swal.fire({
        title: 'Buscando...',
        text: 'Espere un momento.',
        icon: 'warning',
        iconColor: '#fcdf2c',
        timer: 2000,
        showConfirmButton: false
      }).then(()=> {
        const cedula = document.getElementById('busced').value
        const urlmethod = `http://127.0.0.1:8000/estudianteid/${cedula}`
        axios({
            method: 'GET',
            url: urlmethod,
        }).then(function(response){
            
            document.getElementById('busnombres').value = response.data.resultado[0].nombres;
            document.getElementById('busapellidos').value = response.data.resultado[0].apellidos;
            document.getElementById('busgenero').value = response.data.resultado[0].genero;
            document.getElementById('buscorreoins').value = response.data.resultado[0].correoins;
            document.getElementById('buscontraseña').value = response.data.resultado[0].contraseña;
            document.getElementById('busprograma').value = response.data.resultado[0].programa;
            document.getElementById('buscuatrimestre').value = response.data.resultado[0].cuatrimestre;
            document.getElementById('busestado').value = response.data.resultado[0].estado;
            document.getElementById('busfechare').value = response.data.resultado[0].fechare;
            document.getElementById('busrol').value = response.data.resultado[0].rol;
        }).catch(function (error) {
            Swal.fire({
                title: 'No encontrado...',
                text: 'Por favor verifica el numero de cedula.',
                icon: 'error',
                iconColor: '#fcdf2c',
                timer: 2000,
                showConfirmButton: false
            })
            console.error(error);
        })
    })
}

const clearBuscarEstudiante = () => {
    document.getElementById('busced').value = '';
    document.getElementById('buscedula').value = '';
    document.getElementById('busnombres').value = '';
    document.getElementById('busapellidos').value = '';
    document.getElementById('busgenero').value = '';
    document.getElementById('buscorreoins').value = '';
    document.getElementById('buscontraseña').value = '';
    document.getElementById('busprograma').value = '';
    document.getElementById('buscuatrimestre').value = '';
    document.getElementById('busestado').value = '';
    document.getElementById('busfechare').value = '';
    document.getElementById('busrol').value = '';
};

const buscareliminar = () => {
    const cedula = document.getElementById('deleteced').value
    const urlmethod = `http://127.0.0.1:8000/estudianteid/${cedula}`
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
        document.getElementById('deletecedula').value = response.data.resultado[0].cedula;
        document.getElementById('deletenombres').value = response.data.resultado[0].nombres;
        document.getElementById('deleteapellidos').value = response.data.resultado[0].apellidos;
        document.getElementById('deletegenero').value = response.data.resultado[0].genero;
        document.getElementById('deletecorreoins').value = response.data.resultado[0].correoins;
        document.getElementById('deletecontraseña').value = response.data.resultado[0].contraseña;
        document.getElementById('deleteprograma').value = response.data.resultado[0].programa;
        document.getElementById('deletecuatrimestre').value = response.data.resultado[0].cuatrimestre;
        document.getElementById('deleteestado').value = response.data.resultado[0].estado;
        document.getElementById('deleterol').value = response.data.resultado[0].rol;
      })

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
}

const eliminarestudiante = () => {
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
            const cedula = document.getElementById('deletecedula').value
            const urlmethod = `http://127.0.0.1:8000/eliminarestudiante/${cedula}`

            axios({
                method: 'DELETE',
                url: urlmethod,
            }).then(function(response){
                Swal.fire({
                    title: 'Eliminado',
                    text: 'El estudiante ha sido eliminado.',
                    icon: 'success',
                    iconColor: '#fcdf2c',
                    timer: 2000,
                    showConfirmButton: false,
                }).then(()=> {
                    window.location.href = '../HTML/panel-estudiante.html';
                })
            }).catch(function (error) {
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
      });
}

const clearEliminarEstudiante = () => {
    document.getElementById('deleteced').value = '';
    document.getElementById('deletecedula').value = '';
    document.getElementById('deletenombres').value = '';
    document.getElementById('deleteapellidos').value = '';
    document.getElementById('deletegenero').value = '';
    document.getElementById('deletecorreoins').value = '';
    document.getElementById('deletecontraseña').value = '';
    document.getElementById('deleteprograma').value = '';
    document.getElementById('deletecuatrimestre').value = '';
    document.getElementById('deleteestado').value = '';
    document.getElementById('deleterol').value = '';
};

document.getElementById('AgregarEstudiante').addEventListener('hidden.bs.offcanvas', clearEstudiante);
document.getElementById('EliminarEstudiante').addEventListener('hidden.bs.offcanvas', clearEliminarEstudiante);
document.getElementById('ActualizarEstudiante').addEventListener('hidden.bs.offcanvas', clearActualizarEstudiante);
document.getElementById('BuscarEstudiante').addEventListener('hidden.bs.offcanvas', clearBuscarEstudiante);