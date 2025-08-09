const registraralimento =() => {
    const vnombre = document.getElementById('nombre').value
    const vdescripcion = document.getElementById('descripcion').value
    const vcantidad = document.getElementById('cantidad').value
    const vcategoria = document.getElementById('categoria').value

        axios ({
            method: 'POST',
            url: 'http://127.0.0.1:8000/insertaralimento',
            data: {
                nombre:vnombre,
                descripcion:vdescripcion,
                cantidad:vcantidad,
                id_categoria:vcategoria
            }
        }).then(function(response){
            Swal.fire({
                    title: 'Agregado',
                    text: 'El alimento ha sido registrado.',
                    icon: 'success',
                    iconColor: '#fcdf2c',
                    timer: 3000,
                    showConfirmButton: false
                }).then(()=>{
                    window.location.href = '../HTML/panel-alimentos.html';
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

const buscaractualizar = () => {
    const id = document.getElementById('actid').value
    const urlmethod = `http://127.0.0.1:8000/alimentoid/${id}`
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
        document.getElementById('actnombre').value = response.data.resultado[0].nombre;
        document.getElementById('actdescripcion').value = response.data.resultado[0].descripcion;
        document.getElementById('actcantidad').value = response.data.resultado[0].cantidad;
        document.getElementById('actcategoria').value = response.data.resultado[0].id_categoria;
      })
    }).catch(function (error) {
        Swal.fire({
            title: 'Ups...',
            text: 'Parece que hubo un error. Verifica el ID',
            icon: 'error',
            iconColor: '#fcdf2c',
            timer: 3000,
            showConfirmButton: false
         })
    })
}

const actualizaralimento = () => {
    Swal.fire({
        title: '¿Actualizar Alimento?',
        text: 'Esta a punto de cambiar la informacion.',
        icon: 'warning',
        iconColor: '#fcdf2c',
        showCancelButton: true,
        confirmButtonText: 'Sí, actualizar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            const id = document.getElementById('actcid').value
            const urlmethod = `http://127.0.0.1:8000/actualizaralimento/${id}`
            const vnombre = document.getElementById('actnombre').value
            const vdescripcion = document.getElementById('actdescripcion').value
            const vcantidad = document.getElementById('actantidad').value
            const vcategoria = document.getElementById('actcategoria').value
            axios({
                method: 'PUT',
                url: urlmethod,
                data:{
                    nombre:vnombre,
                    descripcion:vdescripcion,
                    cantidad:vcantidad,
                    id_categoria:vcategoria
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
                    window.location.href = '../HTML/panel-alimentos.html';
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

const clearActualizarAlimento = () => {
    document.getElementById('actid').value = "";
    document.getElementById('actnombre').value = "";
    document.getElementById('actdescripcion').value = "";
    document.getElementById('actcantidad').value = "";
    document.getElementById('actcategoria').value = "";
};

const consultaralimentoid = () => {
    const id = document.getElementById('busid').value
    const urlmethod = `http://127.0.0.1:8000/alimentoid/${id}`
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
        document.getElementById('busnombre').value = response.data.resultado[0].nombre;
        document.getElementById('busdescripcion').value = response.data.resultado[0].descripcion;
        document.getElementById('buscantidad').value = response.data.resultado[0].cantidad;
        document.getElementById('buscategoria').value = response.data.resultado[0].id_categoria;
      })
    }).catch(function (error) {
        Swal.fire({
            title: 'Ups...',
            text: 'Parece que hubo un error. Verifica el ID',
            icon: 'error',
            iconColor: '#fcdf2c',
            timer: 3000,
            showConfirmButton: false
         })
    })
}

const clearBuscarAlimento = () => {
    document.getElementById('busid').value = "";
    document.getElementById('busnombre').value = "";
    document.getElementById('busdescripcion').value = "";
    document.getElementById('buscantidad').value = "";
    document.getElementById('buscategoria').value = "";
};

const buscareliminar = () => {
    const id = document.getElementById('deleteid').value
    const urlmethod = `http://127.0.0.1:8000/alimentoid/${id}`
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
        document.getElementById('deletenombre').value = response.data.resultado[0].nombre;
        document.getElementById('deletedescripcion').value = response.data.resultado[0].descripcion;
        document.getElementById('deletecantidad').value = response.data.resultado[0].cantidad;
        document.getElementById('deletecategoria').value = response.data.resultado[0].id_categoria;
      })
    }).catch(function (error) {
        Swal.fire({
            title: 'Ups...',
            text: 'Parece que hubo un error. Verifica el ID',
            icon: 'error',
            iconColor: '#fcdf2c',
            timer: 3000,
            showConfirmButton: false
         })
    })
}

const clearEliminarAlimento = () => {
    document.getElementById('deleteid').value = "";
    document.getElementById('deletenombre').value = "";
    document.getElementById('deletedescripcion').value = "";
    document.getElementById('deletecantidad').value = "";
    document.getElementById('deletecategoria').value = "";
};


document.getElementById('ActualizarAlimento').addEventListener('hidden.bs.offcanvas', clearActualizarAlimento);
document.getElementById('BuscarAlimento').addEventListener('hidden.bs.offcanvas', clearBuscarAlimento);
document.getElementById('EliminarAlimento').addEventListener('hidden.bs.offcanvas', clearEliminarAlimento);