// **Actividad 1: Ecommerce**

// 1. **Objetivo**: Comenzar a desarrollar un ecommerce que permita
// mostrar productos, agregarlos al carrito y guardar la selección
// en el almacenamiento local.
// 2. **Instrucciones**:
//    a. Abre un archivo HTML y crea un contenedor con el 
//id "productos-container" donde se mostrarán las tarjetas de productos.
//    b. En un archivo JavaScript, crea un array de objetos 
//con 10 productos.
//    c. Escribe una función llamada `generarTarjetas` 
// que reciba el array de productos como argumento. 
// Dentro de esta función, utiliza un reduce para crear elementos 
// HTML para cada producto, estilízalos mínimamente y agrega un 
// botón "Agregar al Carrito" que al hacer clic lo agregue
// al almacenamiento local.
/*
const arraydatos = [];
const productos = [
    {
        id: 1,
        producto: "Tarjeta Gráfica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Nvidia",
        imagen: "tarjeta_grafica.jpg",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        producto: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "Dell",
        imagen: "monitor.jpg",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        producto: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Samsung",
        imagen: "ssd.jpg",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        producto: "Teclado Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: null,
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        producto: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "procesador.jpg",
        descripcion: null,
    },
    {
        id: 6,
        producto: "Mouse Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "mouse.jpg",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        producto: "Memoria RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "Crucial",
        imagen: "ram.jpg",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        producto: "Disco Duro Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "disco_externo.jpg",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        producto: "Fuente de Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: null,
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        producto: "Auriculares Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "auriculares.jpg",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
   ];

    let nodos = "";
    console.log("Recorro objeto");
    localStorage.clear();
    productos.forEach(( data, i ) => {
        // Almaceno array pedido en punto 3
        arraydatos.push({
            id: data.id,
            producto: data.producto,
            categoria: data.categoria,
            precio: data.precio,
            marca: data.marca,
            imagen: data.imagen,
            descripcion: data.descripcion
        }); 
    });

    // a. Abre un archivo HTML y crea un contenedor con el 
    // id "productos-container" donde se mostrarán las tarjetas de productos.    
    // c. Escribe una función llamada `generarTarjetas` 
    // que reciba el array de productos como argumento. 
    // Dentro de esta función, utiliza un reduce para crear elementos 
    // HTML para cada producto, estilízalos mínimamente y agrega un 
    // botón "Agregar al Carrito" que al hacer clic lo agregue
    // al almacenamiento local.

    let sImg = ``;   
    const generarTarjetas = ( dataarray ) => {
    const cards = dataarray.reduce(( acc, data ) => {
        // Valido en ocasiones imagen y descripción vienen en null
        sImg = `No existe imagen`;
        if ( data.imagen != null ) {
            sImg =`<img src="./img/${data.imagen}" alt=${data.producto} id="imagen" class="imageclass">`;
        }

        return acc + `
        <div id="productos-container" class="divcontainer">
        <br>
         id=${data.id}
         <br>
         producto:${data.producto}
         <br>
         categoria:${data.categoria}
         <br>
         precio:${data.precio}
         <br>
         marca:${data.marca}
         <br>
         descripcion:${data.descripcion == null ? "No existe descripción": data.descripcion}                              
         </div>     
       ${sImg}
       <button id="btncarro${data.id}">Agregar al Carrito</button>
       <div id="${data.id}"></div>
       <br>
       <br>       
       `;
    }, "")

    document.write(cards);
  }
  console.log("generarTarjetas");
  generarTarjetas(arraydatos);

  // HTML para cada producto, estilízalos mínimamente y agrega un 
  // botón "Agregar al Carrito" que al hacer clic lo agregue
  // al almacenamiento local.
  console.log("Limpio localStore");
  localStorage.clear();

  console.log("Almaceno datos localStore del id seleccionado");
  let idbtn = "";
  productos.forEach(( data, i ) => {
    document.getElementById(`btncarro${data.id}`).addEventListener("click", event => {
        // Almaceno dato en LocalStorage
        localStorage.setItem("id", data.id);
        localStorage.setItem("producto"+data.id, data.producto);
        localStorage.setItem("categoria"+data.id, data.categoria);
        localStorage.setItem("precio"+data.id, data.precio);
        localStorage.setItem("marca"+data.id,data.marca);
        localStorage.setItem("imagen"+data.id, data.imagen);
        localStorage.setItem("descripcion"+data.id, data.descripcion);

        document.getElementById(data.id).innerHTML = "Agregado a LocalStorage !!";
        document.getElementById(data.id).style.color = "blue";
        document.getElementById(data.id).style.fontSize = "23px";
        document.getElementById(data.id).style.fontWeight ="bold";
        });
  });
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// **Actividad 2: Página de Información sobre Pokémon**
// 1. **Objetivo**: Construir una página que muestre información 
//sobre diferentes Pokémon y permita explorar sus detalles.
// 2. **Instrucciones**:
//    a. Abre un archivo HTML y crea un contenedor con el 
//id "pokemon-container" donde se mostrará la información de 
//los Pokémon.
//    b. En un archivo JavaScript, crea un array de objetos
// con 10 Pokémon.
//    c. Escribe una función llamada `generarInfoPokemon` que 
// reciba el array de datos de Pokémon como argumento. Dentro 
// de esta función, utiliza un reduce para crear elementos HTML 
//que muestren los detalles de cada Pokémon. Dentro de cada una 
// de las tarjetas, tiene que haber un botón con un ícono de 
//estrella. Estilízalos mínimamente. 
//    d. Inserta estos nodos en el contenedor del punto a
// con innerHTML. 
//    e. Al hacer click sobre el botón de una tarjeta, 
// los datos de ese pokemon deben ser almacenados en el localStorage. 
/*
const pokemonData = [
    {
        id: 1,
        nombre: "Pikachu",
        tipo: ["Eléctrico"],
        debilidad: ["Tierra"],
        habilidades: ["Impactrueno", "Rayo", "Electrocañón"]
    },
    {
        id: 2,
        nombre: "Charmander",
        tipo: ["Fuego"],
        debilidad: ["Agua", "Roca"],
        habilidades: ["Lanzallamas", "Garra Dragón", "Giro Fuego"]
    },
    {
        id: 3,
        nombre: "Squirtle",
        tipo: ["Agua"],
        debilidad: ["Eléctrico", "Planta"],
        habilidades: ["Hidrobomba", "Pistola Agua", "Rayo Burbuja"]
    },
    {
        id: 4,
        nombre: "Bulbasaur",
        tipo: ["Planta", "Veneno"],
        debilidad: ["Fuego", "Volador", "Psíquico", "Hielo"],
        habilidades: ["Latigazo", "Hoja Afilada", "Planta Feroz"]
    },
    {
        id: 5,
        nombre: "Jigglypuff",
        tipo: ["Normal", "Hada"],
        debilidad: ["Acero", "Veneno"],
        habilidades: ["Canto", "Desarme", "Ataque Doble"]
    },
    {
        id: 6,
        nombre: "Geodude",
        tipo: ["Roca", "Tierra"],
        debilidad: ["Agua", "Planta", "Hielo", "Lucha", "Acero"],
        habilidades: ["Lanzarrocas", "Roca Afilada", "Terremoto"]
    },
    {
        id: 7,
        nombre: "Machop",
        tipo: ["Lucha"],
        debilidad: ["Psíquico", "Volador", "Hada"],
        habilidades: ["Karate", "Golpe Bajo", "Puño Fuego"]
    },
    {
        id: 8,
        nombre: "Gastly",
        tipo: ["Fantasma", "Veneno"],
        debilidad: ["Fantasma", "Siniestro"],
        habilidades: ["Hipnosis", "Tinieblas", "Bola Sombra"]
    },
    {
        id: 9,
        nombre: "Dratini",
        tipo: ["Dragón"],
        debilidad: ["Hada", "Hielo"],
        habilidades: ["Cola Dragón", "Pulso Dragón", "Onda Trueno"]
    },
    {
        id: 10,
        nombre: "Eevee",
        tipo: ["Normal"],
        debilidad: ["Lucha"],
        habilidades: ["Mordisco", "Ataque Rápido", "Refuerzo"]
    }
   ];

    // 2. **Instrucciones**:
    // a. Abre un archivo HTML y crea un contenedor con el 
    // id "pokemon-container" donde se mostrará la información de 
    // los Pokémon.
    document.write("");
    nodos =`<div id="productos-container">Soy un nodo Contenedor</div>`;
    document.write(nodos);

   // b. En un archivo JavaScript, crea un array de objetos con 10 Pokémon.
    const arraypokemon = [];
    // Recorro Objeto 
    let nodospoke = "";
    console.log("Recorro objeto");
    pokemonData.forEach(( data, i ) => {
        // Almaceno array pedido en punto 3
        arraypokemon.push({
            id: data.id,
            nombre: data.nombre,
            tipo: data.tipo,
            debilidad: data.debilidad,
            habilidades: data.habilidades
        });
    });

    //  c. Escribe una función llamada `generarInfoPokemon` que 
    //  reciba el array de datos de Pokémon como argumento. Dentro 
    //  de esta función, utiliza un reduce para crear elementos HTML 
    //  que muestren los detalles de cada Pokémon. Dentro de cada una 
    //  de las tarjetas, tiene que haber un botón con un ícono de 
    //  estrella. Estilízalos mínimamente. 

    document.write("");
    nodos =`<div id="productos-container"></div>`;

    nodospoke = "";
    let cardspoke = [];
    const generarpoke = ( (data)  => {
    cardspoke = data.reduce(( acc, data ) => {
            nodospoke = nodospoke + `
            <div class="divcontainer">
            <br>
             id=${data.id}
             <br>
             producto:${data.nombre}
             <br>
             categoria:${data.tipo}
             <br>
             precio:${data.debilidad}
             <br>
             marca:${data.habilidades}
             <br>                           
           </div>
           <br>
           <button id="btn${data.id}" class="imageclass" onclick="funclick(this)">Agregar al Carrito</button>
           <div id="${data.id}"></div>
           <br>            
           `;
        }, "")
    });

    // Genero string con la información de Pokemones
    console.log("Ejecuto función");
    generarpoke(pokemonData);

    // d. Inserta estos nodos en el contenedor del punto a con innerHTML. 
    const datanew = document.querySelector("#productos-container");
    datanew.innerHTML = nodospoke;

    //  e. Al hacer click sobre el botón de una tarjeta, 
    // los datos de ese pokemon deben ser almacenados en el localStorage.
    console.log("array");
    console.log(pokemonData);
    let idbtn = "";

    function funclick(element) {
        console.log(element.id);
        idbtn = element.id;
        // Limpio LocalStorage
        localStorage.clear()

        pokemonData.forEach(( data, i ) => {
            // Almaceno datos en LocalStorage          
             if ( `btn${data.id}`== idbtn ){
                localStorage.setItem("id", data.id);
                localStorage.setItem("nombre", data.nombre);
                localStorage.setItem("tipo", data.tipo);
                localStorage.setItem("precio"+data.id, data.precio);
                localStorage.setItem("debilidad",data.debilidad);
                localStorage.setItem("habilidad",data.habilidades);  
                
                document.getElementById(data.id).innerHTML = "Agregado a LocalStorage !!";
                document.getElementById(data.id).style.color = "blue";
                document.getElementById(data.id).style.fontSize = "23px";
                document.getElementById(data.id).style.fontWeight ="bold";
             }        
            });
    };
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// **Actividad 3: Blog como Facebook**
// 1. **Objetivo**: Crear una página estilo blog donde los usuarios puedan 
// ver publicaciones y cambiar entre modos de visualización.
// 2. **Instrucciones**:
//    a. Abre un archivo HTML y crea un contenedor con el id 
//   "publicaciones-container" donde se mostrarán las publicaciones.
//    b. En un archivo JavaScript, crea un array de objetos con 10 
//    publicaciones. 
//    c. Escribe una función llamada `generarPublicaciones` que 
//    reciba el array de publicaciones como argumento. 
//    Dentro de esta función, utiliza un bucle para crear elementos 
//    HTML que muestren las publicaciones, estilízalos mínimamente.
//    d. Agrega un botón con el id "modo-oscuro" que, 
//    al hacer clic, cambie el fondo del sitio y guarde la preferencia 
//    en el almacenamiento local.


const publicaciones = [
    {
        id: 1,
        contenido: "¡Nuevo artículo en el blog!",
        imagen: "imagen1.jpg",
        fechaDePublicacion: "2023-08-16",
        nickDelUsuario: "user123",
    },
    {
        id: 2,
        contenido: "Recuerdos de las vacaciones",
        imagen: null,
        fechaDePublicacion: "2023-08-15",
        nickDelUsuario: "traveler99",
    },
    {
        id: 3,
        contenido: "¡Felicidades en tu cumpleaños!",
        imagen: "imagen3.jpg",
        fechaDePublicacion: "2023-08-14",
        nickDelUsuario: "birthdayWishes",
    },
    {
        id: 4,
        contenido: null,
        imagen: "imagen4.jpg",
        fechaDePublicacion: "2023-08-13",
        nickDelUsuario: "photoEnthusiast",
    },
    {
        id: 5,
        contenido: "Compartiendo una receta deliciosa",
        imagen: "imagen5.jpg",
        fechaDePublicacion: "2023-08-12",
        nickDelUsuario: "foodieCook",
    },
    {
        id: 6,
        contenido: "Explorando nuevos lugares",
        imagen: "imagen6.jpg",
        fechaDePublicacion: "2023-08-11",
        nickDelUsuario: "adventurerTravel",
    },
    {
        id: 7,
        contenido: "¡Concierto increíble anoche!",
        imagen: null,
        fechaDePublicacion: "2023-08-10",
        nickDelUsuario: "musicLover",
    },
    {
        id: 8,
        contenido: "Nueva adquisición para la colección",
        imagen: "imagen8.jpg",
        fechaDePublicacion: "2023-08-09",
        nickDelUsuario: "collector123",
    },
    {
        id: 9,
        contenido: "Disfrutando de un día soleado",
        imagen: "imagen9.jpg",
        fechaDePublicacion: "2023-08-08",
        nickDelUsuario: "outdoorExplorer",
    },
    {
        id: 10,
        contenido: "Reflexiones sobre la vida",
        imagen: null,
        fechaDePublicacion: "2023-08-07",
        nickDelUsuario: "deepThinker",
    },
];

// 1. **Objetivo**: Crear una página estilo blog donde los usuarios puedan 
// ver publicaciones y cambiar entre modos de visualización.
// 2. **Instrucciones**:
//    a. Abre un archivo HTML y crea un contenedor con el id 
//   "publicaciones-container" donde se mostrarán las publicaciones.

   nodos =`<div id="publicaciones-container"></div>`;
   document.write(nodos);
//    b. En un archivo JavaScript, crea un array de objetos con 10 
//    publicaciones. 
//    c. Escribe una función llamada `generarPublicaciones` que 
//    reciba el array de publicaciones como argumento. 
//    Dentro de esta función, utiliza un bucle para crear elementos 
//    HTML que muestren las publicaciones, estilízalos mínimamente.

    nodos = "";
    let sImg_ = "";
    let cardspubli = [];
    const generarpublicaciones = ( (data)  => {
       cardspoke = publicaciones.reduce(( acc, data ) => {

        // Valido en ocasiones contenido y nombre nombre vienen en null
        sImg_ = `No existe imagen`;
        if ( data.imagen != null ) {
            sImg_ =`<img src="./img/${data.imagen}" alt=${data.id} id="imagen" class="imageblog">`;
        }
        nodos = nodos + `
        <div id="idpublicaciones" class="divpublicaciones">
            <br>
            id=${data.id}
            <br>
            contenido:${data.contenido == null ? "No existe contenido": data.contenido}
            <br>
            nombre imagen:${data.imagen == null ? "No existe imagen": data.imagen}                              
            <br>
            fechaDePublicacion:${data.fechaDePublicacion}
            <br>
            nickDelUsuario:${data.nickDelUsuario}
            <br> 
            <div class="contenedorimg">
            ${sImg_}
            </div>                          
        </div>
        <button id="btn${data.id}" class="btnfondo" onclick="fucoscuro(this)">Cambiar Fondo</button>
        <br>
        <br>
        `;
        }, "")
    });

    console.log("Ejecuto función generarPublicaciones");
    generarpublicaciones(publicaciones);
    publinew = document.querySelector("#publicaciones-container");
    publinew.innerHTML = nodos;

   // d. Agrega un botón con el id "modo-oscuro" que, 
   // al hacer clic, cambie el fondo del sitio y guarde la preferencia 
   // en el almacenamiento local.
    localStorage.setItem("oscuro","no");
    let sOscuro = "";
    function fucoscuro(element) {
        sOscuro = localStorage.getItem("oscuro");
        //console.log(element.innerHTML);
        if ((sOscuro == "si")) {             
            document.body.style.backgroundColor =  "#7a7ecd";
            // almaceno LocalStorage
            localStorage.setItem("oscuro","no");
      } else {
            document.body.style.backgroundColor = "darkgreen";
            // almaceno LocalStorage
            localStorage.setItem("oscuro","si");
      }
};


