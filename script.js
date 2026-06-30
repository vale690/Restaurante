/*=========================================
  RESTAURANTE FUSIÓN
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    // ==============================
    // BOTÓN VER MENÚ
    // ==============================

    const botonMenu = document.querySelector("#inicio button");

    if (botonMenu) {
        botonMenu.addEventListener("click", () => {

            document.querySelector("#menu").scrollIntoView({
                behavior: "smooth"
            });

        });
    }

    // ==============================
    // MENSAJE PLATO DEL DÍA
    // ==============================

    const botonPlato = document.querySelector(".plato-info button");

    if (botonPlato) {

        botonPlato.addEventListener("click", () => {

            alert(
                "⭐ Plato del Día\n\n" +
                "Pescado Frito con Arroz de Coco\n\n" +
                "Precio: $32.000\n\n" +
                "Delicioso pescado frito acompañado de arroz de coco, patacón y ensalada fresca."
            );

        });

    }

});
