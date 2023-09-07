/* Implementa el código JS para que la información del formulario pueda enviarse en formato JSON 
al siguiente endpoint => https://jsonplaceholder.typicode.com/users. */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

        // Obtén los valores de los campos de entrada
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        // Crea un objeto JSON con los datos del formulario
        const formData = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento,
        };

        // Realiza la solicitud HTTP POST usando fetch()
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Respuesta del servidor:", data);
                // Manejar la respuesta del servidor, mostrar un mensaje de éxito o redirigir al usuario.
            })
            .catch((error) => {
                console.error("Error al enviar la solicitud:", error);
                // Manejo de errores
            });
    });
});
