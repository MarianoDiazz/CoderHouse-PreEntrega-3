// Detectar el evento de scroll de la página
window.addEventListener("scroll", function() {
    // Obtener la posición actual de desplazamiento vertical
    const scrollY = window.scrollY;

    // Definir la cantidad de scroll necesaria para mostrar el botón (ajusta según tu preferencia)
    const scrollThreshold = 200;

    // Seleccionar el botón de "ir arriba" por su ID
    const btnVolverArriba = document.getElementById("btnVolverArriba");

    // Mostrar u ocultar el botón según la posición de desplazamiento
    if (scrollY >= scrollThreshold) {
        btnVolverArriba.style.display = "block";
    } else {
        btnVolverArriba.style.display = "none";
    }
});

// Agregar evento de click al botón para volver arriba
const btnVolverArriba = document.getElementById("btnVolverArriba");
btnVolverArriba.addEventListener("click", function() {
    // Hacer scroll suave hacia arriba
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

