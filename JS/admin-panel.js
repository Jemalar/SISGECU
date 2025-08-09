const indicadores = () => {
    axios({
        method:'GET',
        url: 'http://127.0.0.1:8000/totalestudiantes'
    }).then(function(response){
        const total = response.data["Total estudiantes"][0]
        document.getElementById('total-students').textContent = total
    }).catch(function(error){
        console.error("Hubo un error en la solicitud:", error);
    })

        axios({
        method:'GET',
        url: 'http://127.0.0.1:8000/totalalimentos'
    }).then(function(response){
        const totala = response.data["Total alimentos"][0]
        document.getElementById('total-alimentos').textContent = totala
    }).catch(function(error){
        console.error("Hubo un error en la solicitud:", error);
    })
}


