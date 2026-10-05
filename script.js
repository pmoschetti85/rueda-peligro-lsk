const categorias = [
  {
    nombre: "Gravedad",
    descripcion:
      "Energía asociada a la fuerza de gravedad y a objetos o personas que pueden caer.",
    peligros:
      "Caída de personas, herramientas, materiales, cargas suspendidas o estructuras.",
    controles:
      "Eliminar trabajos en altura cuando sea posible, asegurar objetos, utilizar protecciones contra caídas y mantener zonas de exclusión.",
    ejemplosCampo: [
      "Trabajo sobre plataformas o andamios",
      "Herramientas ubicadas en altura",
      "Cargas suspendidas",
      "Materiales almacenados sobre estanterías",
      "Personas trabajando cerca de bordes o excavaciones"
    ],
    preguntas: [
      "¿Hay personas trabajando en altura?",
      "¿Existen objetos o herramientas que puedan caer?",
      "¿Hay cargas suspendidas?",
      "¿Hay bordes, aberturas o excavaciones cercanas?",
      "¿Los materiales están correctamente asegurados?"
    ],
    color: "#F29A55"
  },

  {
    nombre: "Movimiento",
    descripcion:
      "Cambio de posición o desplazamiento de objetos, vehículos, equipos o personas.",
    peligros:
      "Vehículos en movimiento, equipos móviles, objetos desplazándose y movimientos inesperados.",
    controles:
      "Separar personas y equipos, establecer rutas, señalizar, controlar puntos ciegos y verificar el área antes de iniciar movimientos.",
    ejemplosCampo: [
      "Camiones circulando en el área",
      "Autoelevadores",
      "Grúas y equipos móviles",
      "Retroexcavadoras",
      "Movimiento de personas cerca de maquinaria"
    ],
    preguntas: [
      "¿Hay vehículos o equipos móviles en el área?",
      "¿Existen puntos ciegos?",
      "¿Personas y equipos comparten la misma zona?",
      "¿Hay posibilidad de movimiento inesperado?",
      "¿Las rutas de circulación están definidas?"
    ],
    color: "#65B8C8"
  },

  {
    nombre: "Mecánica",
    descripcion:
      "Energía presente en componentes mecánicos que pueden girar, vibrar, moverse o liberar energía almacenada.",
    peligros:
      "Equipos rotativos, resortes comprimidos, cintas transportadoras, motores y partes móviles.",
    controles:
      "Instalar guardas, aislar fuentes de energía, aplicar bloqueo y etiquetado y verificar energía cero antes de intervenir.",
    ejemplosCampo: [
      "Ejes rotativos",
      "Poleas y correas",
      "Cintas transportadoras",
      "Resortes comprimidos",
      "Herramientas o equipos con partes móviles"
    ],
    preguntas: [
      "¿Hay partes móviles o rotativas?",
      "¿Puede existir atrapamiento o pellizco?",
      "¿Hay resortes o componentes bajo tensión?",
      "¿El equipo puede moverse inesperadamente?",
      "¿Se requiere bloqueo antes de intervenir?"
    ],
    color: "#C6C34C"
  },

  {
    nombre: "Eléctrica",
    descripcion:
      "Presencia y flujo de una carga eléctrica.",
    peligros:
      "Líneas eléctricas, transformadores, cables, baterías, equipos energizados y arco eléctrico.",
    controles:
      "Desenergizar, bloquear, verificar ausencia de tensión, respetar distancias de seguridad y utilizar protección adecuada.",
    ejemplosCampo: [
      "Tableros eléctricos energizados",
      "Cables o extensiones dañadas",
      "Líneas eléctricas aéreas",
      "Herramientas eléctricas",
      "Baterías",
      "Transformadores",
      "Equipos conectados durante mantenimiento"
    ],
    preguntas: [
      "¿Hay equipos energizados?",
      "¿Hay líneas eléctricas cercanas?",
      "¿Existe posibilidad de contacto directo o indirecto?",
      "¿Se verificó ausencia de tensión?",
      "¿Puede existir energía eléctrica residual?"
    ],
    color: "#D7777C"
  },

  {
    nombre: "Presión",
    descripcion:
      "Energía aplicada por un líquido o gas que se encuentra bajo presión o vacío.",
    peligros:
      "Cilindros, tuberías, mangueras, sistemas hidráulicos, neumáticos y recipientes presurizados.",
    controles:
      "Despresurizar, aislar fuentes, purgar sistemas, verificar presión cero y asegurar conexiones y mangueras.",
    ejemplosCampo: [
      "Mangueras hidráulicas",
      "Líneas neumáticas",
      "Cilindros de gas",
      "Recipientes presurizados",
      "Acumuladores hidráulicos"
    ],
    preguntas: [
      "¿Hay líquidos o gases bajo presión?",
      "¿Existen mangueras o conexiones presurizadas?",
      "¿El sistema fue despresurizado?",
      "¿Puede quedar presión atrapada?",
      "¿Hay cilindros o recipientes presurizados?"
    ],
    color: "#55B6AA"
  },

  {
    nombre: "Temperatura",
    descripcion:
      "Energía asociada a superficies, sustancias o ambientes calientes o extremadamente fríos.",
    peligros:
      "Superficies calientes, vapor, fluidos calientes, llamas, frío extremo y materiales criogénicos.",
    controles:
      "Aislar superficies, permitir enfriamiento, señalizar, controlar exposición y utilizar protección térmica adecuada.",
    ejemplosCampo: [
      "Tuberías calientes",
      "Vapor",
      "Motores recién detenidos",
      "Soldadura",
      "Fluidos calientes",
      "Superficies sometidas a frío extremo"
    ],
    preguntas: [
      "¿Hay superficies calientes o muy frías?",
      "¿Existe vapor o fluidos calientes?",
      "¿El equipo tuvo tiempo suficiente para enfriarse?",
      "¿Hay riesgo de quemadura por contacto?",
      "¿Se requiere protección térmica?"
    ],
    color: "#F4D76D"
  },

  {
    nombre: "Química",
    descripcion:
      "Peligro producido por sustancias capaces de causar daño por contacto, inhalación, reacción o combustión.",
    peligros:
      "Sustancias corrosivas, inflamables, tóxicas, irritantes o químicamente reactivas.",
    controles:
      "Identificar productos, consultar hojas de seguridad, segregar incompatibles, controlar derrames y utilizar protección adecuada.",
    ejemplosCampo: [
      "Combustibles",
      "Ácidos",
      "Solventes",
      "Productos de limpieza",
      "Gases",
      "Sustancias corrosivas"
    ],
    preguntas: [
      "¿Hay sustancias químicas presentes?",
      "¿Conocemos sus peligros y compatibilidades?",
      "¿Existe riesgo de inhalación, contacto o salpicadura?",
      "¿Hay productos inflamables o reactivos?",
      "¿Se dispone de la hoja de seguridad correspondiente?"
    ],
    color: "#65743A"
  },

  {
    nombre: "Biológica",
    descripcion:
      "Peligro asociado a organismos vivos, agentes biológicos o materiales contaminados.",
    peligros:
      "Virus, bacterias, hongos, fluidos corporales, residuos biológicos o animales.",
    controles:
      "Evitar contacto, aplicar higiene adecuada, controlar exposición, utilizar barreras y protección personal cuando corresponda.",
    ejemplosCampo: [
      "Agua contaminada",
      "Residuos orgánicos",
      "Animales o insectos",
      "Hongos",
      "Material biológico contaminado"
    ],
    preguntas: [
      "¿Hay contacto con materiales biológicos?",
      "¿Existen residuos orgánicos o agua contaminada?",
      "¿Hay presencia de animales, insectos o vectores?",
      "¿Puede existir exposición a hongos o bacterias?",
      "¿Se requiere una barrera o protección específica?"
    ],
    color: "#E5AE56"
  },

  {
    nombre: "Radiación",
    descripcion:
      "Energía transmitida mediante ondas electromagnéticas o partículas.",
    peligros:
      "Radiación ionizante, ultravioleta, soldadura, fuentes radiactivas o equipos emisores.",
    controles:
      "Reducir el tiempo de exposición, aumentar la distancia, utilizar blindaje, barreras y protección específica.",
    ejemplosCampo: [
      "Soldadura por arco",
      "Radiografía industrial",
      "Fuentes radiactivas",
      "Radiación ultravioleta",
      "Equipos emisores de radiación"
    ],
    preguntas: [
      "¿Hay alguna fuente de radiación presente?",
      "¿La tarea incluye soldadura o radiografía industrial?",
      "¿Puede aumentar la distancia respecto de la fuente?",
      "¿Existe blindaje o barrera adecuada?",
      "¿Se requiere protección específica?"
    ],
    color: "#7776A8"
  },

  {
    nombre: "Sonido",
    descripcion:
      "Energía transmitida mediante ondas sonoras que puede afectar a las personas.",
    peligros:
      "Ruido intenso, herramientas de impacto, maquinaria, motores y exposición prolongada.",
    controles:
      "Reducir el ruido en la fuente, aislar equipos, limitar la exposición y utilizar protección auditiva cuando corresponda.",
    ejemplosCampo: [
      "Martillos neumáticos",
      "Motores",
      "Generadores",
      "Compresores",
      "Herramientas de impacto",
      "Maquinaria en funcionamiento"
    ],
    preguntas: [
      "¿Hay ruido elevado en el área?",
      "¿La exposición puede ser prolongada?",
      "¿Hay herramientas o equipos de impacto?",
      "¿Puede reducirse el ruido en la fuente?",
      "¿Se requiere protección auditiva?"
    ],
    color: "#62AF5F"
  }
];


const svg = document.getElementById("rueda");

const centroX = 250;
const centroY = 250;
const radioExterior = 220;
const radioInterior = 82;

const cantidad = categorias.length;
const anguloSector = 360 / cantidad;


function gradosARadianes(grados) {
  return grados * Math.PI / 180;
}


function obtenerPunto(radio, angulo) {
  const radianes = gradosARadianes(angulo);

  return {
    x: centroX + radio * Math.cos(radianes),
    y: centroY + radio * Math.sin(radianes)
  };
}


function mostrarInformacion(categoria) {
  document.getElementById("titulo").textContent = categoria.nombre;
  document.getElementById("descripcion").textContent = categoria.descripcion;
  document.getElementById("peligros").textContent = categoria.peligros;
  document.getElementById("controles").textContent = categoria.controles;

  const listaEjemplos = document.getElementById("lista-ejemplos");
  listaEjemplos.innerHTML = "";

  categoria.ejemplosCampo.forEach(ejemplo => {
    const item = document.createElement("li");
    item.textContent = ejemplo;
    listaEjemplos.appendChild(item);
  });

  const listaPreguntas = document.getElementById("lista-preguntas");
  listaPreguntas.innerHTML = "";

  categoria.preguntas.forEach(pregunta => {
    const item = document.createElement("li");
    item.textContent = pregunta;
    listaPreguntas.appendChild(item);
  });

  document.getElementById("ejemplos-extra").classList.add("oculto");
  document.getElementById("preguntas-extra").classList.add("oculto");

  document.getElementById("btn-ejemplos").textContent =
    "Ver ejemplos de campo";

  document.getElementById("btn-preguntas").textContent =
    "Ver preguntas para identificar el peligro";

  const panel = document.getElementById("informacion");

  panel.style.setProperty(
    "--color-categoria",
    categoria.color
  );

  panel.classList.remove("animar");
  void panel.offsetWidth;
  panel.classList.add("animar");
}


function seleccionarSector(grupoSeleccionado, inicio, fin) {
  const grupos = document.querySelectorAll(".grupo-sector");

  grupos.forEach(grupo => {
    grupo.classList.remove("activo");
    grupo.classList.add("inactivo");
    grupo.style.transform = "translate(0px, 0px)";
  });

  grupoSeleccionado.classList.remove("inactivo");
  grupoSeleccionado.classList.add("activo");

  const anguloMedio = (inicio + fin) / 2;
  const radianes = gradosARadianes(anguloMedio);
  const distancia = 10;

  const moverX = Math.cos(radianes) * distancia;
  const moverY = Math.sin(radianes) * distancia;

  grupoSeleccionado.style.transform =
    `translate(${moverX}px, ${moverY}px)`;
}


function crearSector(inicio, fin, categoria) {
  const punto1 = obtenerPunto(radioExterior, inicio);
  const punto2 = obtenerPunto(radioExterior, fin);
  const punto3 = obtenerPunto(radioInterior, fin);
  const punto4 = obtenerPunto(radioInterior, inicio);

  const grupo = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );

  grupo.classList.add("grupo-sector");

  const sector = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  const recorrido = `
    M ${punto4.x} ${punto4.y}
    L ${punto1.x} ${punto1.y}
    A ${radioExterior} ${radioExterior}
    0 0 1
    ${punto2.x} ${punto2.y}
    L ${punto3.x} ${punto3.y}
    A ${radioInterior} ${radioInterior}
    0 0 0
    ${punto4.x} ${punto4.y}
    Z
  `;

  sector.setAttribute("d", recorrido);
  sector.setAttribute("fill", categoria.color);
  sector.classList.add("sector");

  const anguloMedio = (inicio + fin) / 2;
  const posicionTexto = obtenerPunto(150, anguloMedio);

  const texto = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );

  texto.setAttribute("x", posicionTexto.x);
  texto.setAttribute("y", posicionTexto.y);
  texto.classList.add("texto-sector");
  texto.textContent = categoria.nombre;

  grupo.appendChild(sector);
  grupo.appendChild(texto);
  svg.appendChild(grupo);

  grupo.addEventListener("click", function () {
    seleccionarSector(grupo, inicio, fin);
    mostrarInformacion(categoria);
  });
}


categorias.forEach((categoria, indice) => {
  const inicio = -90 + indice * anguloSector;
  const fin = inicio + anguloSector;

  crearSector(inicio, fin, categoria);
});


const centro = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "circle"
);

centro.setAttribute("cx", centroX);
centro.setAttribute("cy", centroY);
centro.setAttribute("r", 72);
centro.setAttribute("fill", "#1f2937");
centro.setAttribute("stroke", "white");
centro.setAttribute("stroke-width", "4");

svg.appendChild(centro);


const textoCentro = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "text"
);

textoCentro.setAttribute("x", centroX);
textoCentro.setAttribute("y", centroY);
textoCentro.setAttribute("text-anchor", "middle");
textoCentro.setAttribute("dominant-baseline", "middle");
textoCentro.setAttribute("fill", "white");
textoCentro.setAttribute("font-size", "20");
textoCentro.setAttribute("font-weight", "bold");
textoCentro.textContent = "PELIGROS";

svg.appendChild(textoCentro);


const botonEjemplos = document.getElementById("btn-ejemplos");

botonEjemplos.addEventListener("click", function () {
  const bloqueEjemplos = document.getElementById("ejemplos-extra");
  const bloquePreguntas = document.getElementById("preguntas-extra");
  const botonPreguntas = document.getElementById("btn-preguntas");

  const seVaAMostrar =
    bloqueEjemplos.classList.contains("oculto");

  bloqueEjemplos.classList.toggle("oculto");

  if (seVaAMostrar) {
    bloquePreguntas.classList.add("oculto");

    botonEjemplos.textContent =
      "Ocultar ejemplos de campo";

    botonPreguntas.textContent =
      "Ver preguntas para identificar el peligro";
  } else {
    botonEjemplos.textContent =
      "Ver ejemplos de campo";
  }
});


const botonPreguntas = document.getElementById("btn-preguntas");

botonPreguntas.addEventListener("click", function () {
  const bloquePreguntas = document.getElementById("preguntas-extra");
  const bloqueEjemplos = document.getElementById("ejemplos-extra");

  const seVaAMostrar =
    bloquePreguntas.classList.contains("oculto");

  bloquePreguntas.classList.toggle("oculto");

  if (seVaAMostrar) {
    bloqueEjemplos.classList.add("oculto");

    botonPreguntas.textContent =
      "Ocultar preguntas";

    botonEjemplos.textContent =
      "Ver ejemplos de campo";
  } else {
    botonPreguntas.textContent =
      "Ver preguntas para identificar el peligro";
  }
});


function restablecerRueda() {
  const grupos = document.querySelectorAll(".grupo-sector");

  grupos.forEach(grupo => {
    grupo.classList.remove("activo");
    grupo.classList.remove("inactivo");
    grupo.style.transform = "translate(0px, 0px)";
  });

  document.getElementById("titulo").textContent =
    "Seleccioná una categoría";

  document.getElementById("descripcion").textContent =
    "Hacé clic en un sector de la rueda para ver la información.";

  document.getElementById("peligros").textContent =
    "Aquí aparecerán los peligros asociados.";

  document.getElementById("controles").textContent =
    "Aquí aparecerán los controles preventivos.";

  document.getElementById("ejemplos-extra").classList.add("oculto");
  document.getElementById("preguntas-extra").classList.add("oculto");

  document.getElementById("lista-ejemplos").innerHTML = "";
  document.getElementById("lista-preguntas").innerHTML = "";

  botonEjemplos.textContent =
    "Ver ejemplos de campo";

  botonPreguntas.textContent =
    "Ver preguntas para identificar el peligro";

  const panel = document.getElementById("informacion");

  panel.style.setProperty(
    "--color-categoria",
    "#333"
  );

  panel.classList.remove("animar");
  void panel.offsetWidth;
  panel.classList.add("animar");
}


const botonRestablecer =
  document.getElementById("btn-restablecer");

botonRestablecer.addEventListener(
  "click",
  restablecerRueda
);


/* IMPRIMIR / EXPORTAR PDF */

const botonImprimir =
  document.getElementById("btn-imprimir");

botonImprimir.addEventListener("click", function () {
  const titulo =
    document.getElementById("titulo").textContent;

  if (titulo === "Seleccioná una categoría") {
    alert(
      "Primero seleccioná una categoría de peligro."
    );
    return;
  }

  const ejemplos =
    document.getElementById("ejemplos-extra");

  const preguntas =
    document.getElementById("preguntas-extra");

  ejemplos.classList.remove("oculto");
  preguntas.classList.remove("oculto");

  setTimeout(function () {
    window.print();
  }, 100);
});
