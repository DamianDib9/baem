document.addEventListener("DOMContentLoaded", function () {
    const tarjetasContainer = document.getElementById("tarjetas-container");

    // Datos de ejemplo, puedes reemplazarlos con tus datos reales
    const datosTarjetas = [
        { nombre: "Celine", edad: "33", portada: "ruta-de-la-imagen-1.jpg", descripcion: "Descripción de la tarjeta 1", horario: "08:00hs a 00:00hs", tarifa: "700 USD", zona: "Puerto Madero", estatura: "170 CM"  },
        { imagen: "ruta-de-la-imagen-2.jpg", descripcion: "Descripción de la tarjeta 2" }
        // Agrega más objetos con la misma estructura si necesitas más tarjetas
    ];

    // Crear y añadir tarjetas al contenedor
    datosTarjetas.forEach((tarjeta) => {
        const divTarjeta = document.createElement("div");
        divTarjeta.classList.add("tarjeta");

        const imagen = document.createElement("img");
        imagen.src = tarjeta.imagen;
        imagen.alt = tarjeta.descripcion;

        divTarjeta.appendChild(imagen);
        tarjetasContainer.appendChild(divTarjeta);
    });
});
