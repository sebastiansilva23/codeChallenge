function enviarDatos() {
    let nom = document.getElementById("nombre").value;
    let ape = document.getElementById("apellido").value;
    let nac = document.getElementById("fechaNacimiento").value;

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'POST',
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
            nombre: nom,
            apellido: ape,
            fechaNacimiento: nac,
        })
    })
    .then(respuesta => respuesta.json())
    .then(datos => {
        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value = "";
        document.getElementById('fechaNacimiento').value;
        alert("Se envió correctamente");
    })
    .catch(error => {
        alert("Hubo un error al enviar los datos");
        console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("enviar").addEventListener("click", enviarDatos);
});



