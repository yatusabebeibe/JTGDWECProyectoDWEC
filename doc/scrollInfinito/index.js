obtenerNuevosDatos();
let contador = 0;
let elemContador = document.getElementById("contador")
document.addEventListener("scrollend", () => {
    elemContador.innerText = ++contador;
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - (window.innerHeight*1.5)) {
        obtenerNuevosDatos();
    }
});

function obtenerNuevosDatos() {
    let listaUsuarios = document.getElementById("listaUsuarios");

    fetch("https://randomuser.me/api/?results=25")
        .then(respuesta => respuesta.json())
        .then(datos => {
            // console.log(datos);
            console.log(datos.results[0]);

            for (const persona of datos.results) {
                let elemPersona = document.createElement("div");

                let nombre = document.createElement("h3");
                nombre.innerHTML = persona.name.first + " " + persona.name.last
                elemPersona.appendChild(nombre);

                let imagen = document.createElement("img");
                imagen.src = persona.picture.large;
                elemPersona.appendChild(imagen);

                let email = document.createElement("p");
                email.innerHTML = persona.email
                elemPersona.appendChild(email);

                let ciudad = document.createElement("p");
                ciudad.innerHTML = persona.location.city
                elemPersona.appendChild(ciudad);

                listaUsuarios.append(elemPersona);
            }

        })

}