
const boton = document.getElementById('enviar')
var url = "https://jsonplaceholder.typicode.com/users";
var data = {
        nombre : document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        fecha_nacimiento: document.getElementById("fecha").value,
};
    
function guardarInfo(){   
    var data = {
        nombre : document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        fecha_nacimiento: document.getElementById("fecha").value,
}; 
fetch(url, {
    method: "POST", 
    body: JSON.stringify(data), 
    headers: {
    "Content-Type": "application/json",
    },
})
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
}

boton.addEventListener('click', guardarInfo)