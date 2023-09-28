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
    .then((data) => {
        console.log("Respuesta del servidor:", data);
      })
    .catch(error => {
        alert("Hubo un error al enviar los datos");
        console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("enviar").addEventListener("click", enviarDatos);
});



