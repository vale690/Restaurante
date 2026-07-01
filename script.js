/*=========================================
        RESTAURANTE FUSIÓN
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    //=====================================
    // ELEMENTOS
    //=====================================

    const inicio = document.getElementById("inicio");
    const nosotros = document.getElementById("nosotros");

    const platoDia = document.getElementById("platoDia");
    const menu = document.getElementById("menu");
    const promociones = document.getElementById("promociones");
    const galeria = document.getElementById("galeria");
    const pedidos = document.getElementById("pedidos");
    const codigoQR = document.getElementById("codigoQR");

    const footer = document.querySelector("footer");
    const copyright = document.querySelector(".copyright");

    const btnInicio = document.getElementById("btnInicio");
    const btnNosotros = document.getElementById("btnNosotros");
    const volverInicio = document.getElementById("volverInicio");
    const verMenu = document.getElementById("verMenu");

    //=====================================
    // MOSTRAR INICIO
    //=====================================

    function mostrarInicio(){

        inicio.style.display = "flex";
        nosotros.style.display = "none";

        platoDia.style.display = "flex";
        menu.style.display = "block";
        promociones.style.display = "block";
        galeria.style.display = "block";
        pedidos.style.display = "block";
        codigoQR.style.display = "block";

        footer.style.display = "grid";
        copyright.style.display = "block";

    }

    //=====================================
    // MOSTRAR NOSOTROS
    //=====================================

    function mostrarNosotros(){

        inicio.style.display = "none";
        nosotros.style.display = "flex";

        platoDia.style.display = "none";
        menu.style.display = "none";
        promociones.style.display = "none";
        galeria.style.display = "none";
        pedidos.style.display = "none";
        codigoQR.style.display = "none";

        footer.style.display = "none";
        copyright.style.display = "none";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

    //=====================================
    // EVENTOS
    //=====================================

    btnInicio.addEventListener("click",(e)=>{

        e.preventDefault();

        mostrarInicio();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

    btnNosotros.addEventListener("click",(e)=>{

        e.preventDefault();

        mostrarNosotros();

    });

    volverInicio.addEventListener("click",()=>{

        mostrarInicio();

    });

    verMenu.addEventListener("click",()=>{

        menu.scrollIntoView({
            behavior:"smooth"
        });

    });

        //=====================================
    // NAVEGACIÓN DEL MENÚ
    //=====================================

    document.querySelector('a[href="#menu"]').addEventListener("click",(e)=>{

        e.preventDefault();

        mostrarInicio();

        setTimeout(()=>{

            menu.scrollIntoView({

                behavior:"smooth"

            });

        },200);

    });

    document.querySelector('a[href="#promociones"]').addEventListener("click",(e)=>{

        e.preventDefault();

        mostrarInicio();

        setTimeout(()=>{

            promociones.scrollIntoView({

                behavior:"smooth"

            });

        },200);

    });

    document.querySelector('a[href="#pedidos"]').addEventListener("click",(e)=>{

        e.preventDefault();

        mostrarInicio();

        setTimeout(()=>{

            pedidos.scrollIntoView({

                behavior:"smooth"

            });

        },200);

    });

    //=====================================
    // MENÚ DESPLEGABLE
    //=====================================

    const categorias = document.querySelectorAll(".categoria");

    categorias.forEach((categoria)=>{

        categoria.addEventListener("click",(e)=>{

            if(e.target.tagName==="BUTTON") return;

            const lista = categoria.querySelector(".platos");

            document.querySelectorAll(".platos").forEach((plato)=>{

                if(plato!==lista){

                    plato.style.display="none";

                }

            });

            if(lista.style.display==="block"){

                lista.style.display="none";

            }else{

                lista.style.display="block";

            }

        });

    });

        //=====================================
    // INFORMACIÓN DE LOS PLATOS
    //=====================================

    const informacionPlatos = {

        "Calentado con huevo":{
            precio:"$18.000",
            descripcion:"Desayuno tradicional acompañado de huevo, arepa y chocolate.",
            ingredientes:"Arroz, fríjoles, huevo, arepa y chocolate."
        },

        "Bagre frito":{
            precio:"$32.000",
            descripcion:"Bagre frito acompañado de arroz de coco, patacón y ensalada.",
            ingredientes:"Bagre, arroz de coco, patacón, ensalada y limón."
        },

        "Mojarra frita":{
            precio:"$34.000",
            descripcion:"Mojarra fresca frita con arroz de coco y patacón.",
            ingredientes:"Mojarra, arroz de coco, patacón, ensalada y limón."
        },

        "Sancocho de gallina":{
            precio:"$28.000",
            descripcion:"Sancocho preparado al estilo tradicional.",
            ingredientes:"Gallina, yuca, ñame, plátano y cilantro."
        },

        "Carne asada":{
            precio:"$30.000",
            descripcion:"Carne asada acompañada de arroz, ensalada y papas.",
            ingredientes:"Carne de res, arroz, papas y ensalada."
        },

        "Arroz con pollo":{
            precio:"$24.000",
            descripcion:"Arroz con pollo preparado al momento.",
            ingredientes:"Arroz, pollo, verduras y especias."
        },

        "Hamburguesa sencilla":{
            precio:"$18.000",
            descripcion:"Hamburguesa artesanal con papas.",
            ingredientes:"Pan, carne, queso, tomate, lechuga y salsa."
        },

        "Hawaiana":{
            precio:"$35.000",
            descripcion:"Pizza con jamón, queso mozzarella y piña.",
            ingredientes:"Masa artesanal, salsa de tomate, queso, jamón y piña."
        },

        "Tres leches":{
            precio:"$9.000",
            descripcion:"Delicioso postre de tres leches.",
            ingredientes:"Bizcocho, crema de leche, leche condensada y leche evaporada."
        },

        "Limonada natural":{
            precio:"$8.000",
            descripcion:"Limonada preparada con limones frescos.",
            ingredientes:"Limón, agua, azúcar y hielo."
        }

    };

    //=====================================
    // MOSTRAR INFORMACIÓN DEL PLATO
    //=====================================

    const botonesPlatos = document.querySelectorAll(".platos button");

    botonesPlatos.forEach((boton)=>{

        boton.addEventListener("click",(e)=>{

            e.stopPropagation();

            const nombre = boton.textContent;

            if(informacionPlatos[nombre]){

                alert(
                    "🍽 " + nombre +

                    "\n\n💰 Precio: " +

                    informacionPlatos[nombre].precio +

                    "\n\n📝 Descripción:\n" +

                    informacionPlatos[nombre].descripcion +

                    "\n\n🥘 ¿De qué está hecho?\n" +

                    informacionPlatos[nombre].ingredientes
                );

            }else{

                alert("Este plato será agregado próximamente.");

            }

        });

    });

});

