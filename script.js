/*=========================================
        RESTAURANTE FUSIÓN
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    //=====================================
    // ELEMENTOS
    //=====================================

    const principal = document.getElementById("principal");

    const inicio = document.getElementById("inicio");

    const nosotros = document.getElementById("nosotros");

    const btnInicio = document.getElementById("btnInicio");

    const btnNosotros = document.getElementById("btnNosotros");

    const volverInicio = document.getElementById("volverInicio");

    const verMenu = document.getElementById("verMenu");

    //=====================================
    // MOSTRAR INICIO
    //=====================================

    function mostrarInicio(){

        inicio.style.display = "flex";

        document.getElementById("platoDia").style.display = "flex";

        document.getElementById("menu").style.display = "block";

        document.getElementById("promociones").style.display = "block";

        document.getElementById("galeria").style.display = "block";

        document.getElementById("pedidos").style.display = "block";

        document.getElementById("codigoQR").style.display = "block";

        document.querySelector("footer").style.display = "grid";

        document.querySelector(".copyright").style.display = "block";

        nosotros.style.display = "none";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

    //=====================================
    // MOSTRAR NOSOTROS
    //=====================================

    function mostrarNosotros(){

        inicio.style.display = "none";

        document.getElementById("platoDia").style.display = "none";

        document.getElementById("menu").style.display = "none";

        document.getElementById("promociones").style.display = "none";

        document.getElementById("galeria").style.display = "none";

        document.getElementById("pedidos").style.display = "none";

        document.getElementById("codigoQR").style.display = "none";

        document.querySelector("footer").style.display = "none";

        document.querySelector(".copyright").style.display = "none";

        nosotros.style.display = "flex";

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

    //=====================================
    // EVENTOS
    //=====================================

    btnNosotros.addEventListener("click",(e)=>{

        e.preventDefault();

        mostrarNosotros();

    });

    btnInicio.addEventListener("click",(e)=>{

        e.preventDefault();

        mostrarInicio();

    });

    volverInicio.addEventListener("click",()=>{

        mostrarInicio();

    });

    verMenu.addEventListener("click",()=>{

        document.getElementById("menu").scrollIntoView({

            behavior:"smooth"

        });

    });

});

//=====================================
// MENÚ DESPLEGABLE
//=====================================

const categorias = document.querySelectorAll(".categoria");

categorias.forEach((categoria) => {

    categoria.addEventListener("click", function (e) {

        // Evita que los botones de los platos vuelvan
        // a ejecutar este evento
        if (e.target.tagName === "BUTTON") return;

        const listaPlatos = this.querySelector(".platos");

        // Cerrar las demás categorías
        document.querySelectorAll(".platos").forEach((plato) => {

            if (plato !== listaPlatos) {

                plato.style.display = "none";

            }

        });

        // Abrir o cerrar la categoría seleccionada
        if (listaPlatos.style.display === "block") {

            listaPlatos.style.display = "none";

        } else {

            listaPlatos.style.display = "block";

        }

    });

});

//=====================================
// BOTONES DEL MENÚ
//=====================================

const menu = document.getElementById("menu");

document.querySelector('a[href="#menu"]').addEventListener("click", function(e){

    e.preventDefault();

    mostrarInicio();

    setTimeout(()=>{

        menu.scrollIntoView({

            behavior:"smooth"

        });

    },300);

});

const promociones = document.getElementById("promociones");

document.querySelector('a[href="#promociones"]').addEventListener("click", function(e){

    e.preventDefault();

    mostrarInicio();

    setTimeout(()=>{

        promociones.scrollIntoView({

            behavior:"smooth"

        });

    },300);

});

const pedidos = document.getElementById("pedidos");

document.querySelector('a[href="#pedidos"]').addEventListener("click", function(e){

    e.preventDefault();

    mostrarInicio();

    setTimeout(()=>{

        pedidos.scrollIntoView({

            behavior:"smooth"

        });

    },300);

});

//=====================================
// PLATOS DEL MENÚ
//=====================================

const platos = {

    "Calentado con huevo":{

        precio:"$18.000",

        descripcion:"Un desayuno tradicional acompañado de huevo, arepa y chocolate.",

        ingredientes:"Arroz, fríjoles, huevo, arepa y chocolate."

    },

    "Bagre frito":{

        precio:"$32.000",

        descripcion:"Bagre frito acompañado de arroz de coco, patacón y ensalada.",

        ingredientes:"Bagre, arroz de coco, patacón, ensalada y limón."

    },

    "Hawaiana":{

        precio:"$35.000",

        descripcion:"Pizza con jamón, queso mozzarella y piña.",

        ingredientes:"Masa artesanal, salsa de tomate, queso, jamón y piña."

    },

    "Hamburguesa sencilla":{

        precio:"$18.000",

        descripcion:"Hamburguesa con carne artesanal y papas.",

        ingredientes:"Pan, carne, queso, lechuga, tomate y salsa."

    },

    "Tres leches":{

        precio:"$9.000",

        descripcion:"Postre suave bañado en tres leches.",

        ingredientes:"Bizcocho, crema de leche, leche condensada y leche evaporada."

    },

    "Limonada natural":{

        precio:"$8.000",

        descripcion:"Bebida refrescante preparada al momento.",

        ingredientes:"Limón, agua, azúcar y hielo."

    }

};

//=====================================
// PEDIDO SIMULADO
//=====================================

const btnPedir = document.getElementById("btnPedir");

if(btnPedir){

    btnPedir.addEventListener("click",()=>{

        alert(

            "¡Gracias por elegir Restaurante Fusión!\n\n" +

            "Tu pedido ha sido recibido correctamente.\n\n" +

            "Pronto nos comunicaremos contigo."

        );

    });

}

