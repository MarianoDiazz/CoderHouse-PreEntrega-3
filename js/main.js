window.addEventListener("scroll", function() {
    const scrollY = window.scrollY;

    const scrollThreshold = 200;

    const btnVolverArriba = document.getElementById("btnVolverArriba");

    if (scrollY >= scrollThreshold) {
        btnVolverArriba.style.display = "block";
    } else {
        btnVolverArriba.style.display = "none";
    }
});

const btnVolverArriba = document.getElementById("btnVolverArriba");
btnVolverArriba.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

