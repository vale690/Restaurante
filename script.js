/* BUSCADOR DE PLATOS */

const buscador = document.getElementById("buscar");
const filas = document.querySelectorAll("#tablaPlatos tr");

buscador.addEventListener("keyup", function () {
    const texto = buscador.value.toLowerCase();

    filas.forEach(fila => {
        const plato = fila.cells[0].textContent.toLowerCase();
        const categoria = fila.cells[1].textContent.toLowerCase();

        if (plato.includes(texto) || categoria.includes(texto)) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
});
