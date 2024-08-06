import "./style.css";

let puntuacion: number = 0;
const puntuacionMaxima = 7.5; // 6. GAME OVER

// 1. MOSTRAR PUNTUACIÓN

function muestraPuntuacion() {
  const puntuacionDiv = document.getElementById("puntuacion");
  if (puntuacionDiv) {
    puntuacionDiv.innerHTML = `Puntuación: ${puntuacion}`;
  }
}

// 2. PEDIR CARTA

function dameCarta(): number {
  const valores = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
  const indiceAleatorio = Math.floor(Math.random() * valores.length);
  const carta = valores[indiceAleatorio];
  console.log(`Carta elegida: ${carta}`);
  return carta;
}

// 4. VALOR CARTA

function valorCarta(carta: number): number {
  switch (carta) {
    case 10:
    case 11:
    case 12:
      return 0.5;
    default:
      return carta;
  }
}

// 3. MOSTRAR CARTA

function mostrarCarta(carta: number): void {
  const cartaActualImg = document.getElementById(
    "carta-actual"
  ) as HTMLImageElement;
  let src = "";

  switch (carta) {
    case 1:
      src = "public/assets/images/1_as-copas.jpg";
      break;
    case 2:
      src = "public/assets/images/2_dos-copas.jpg";
      break;
    case 3:
      src = "public/assets/images/3_tres-copas.jpg";
      break;
    case 4:
      src = "public/assets/images/4_cuatro-copas.jpg";
      break;
    case 5:
      src = "public/assets/images/5_cinco-copas.jpg";
      break;
    case 6:
      src = "public/assets/images/6_seis-copas.jpg";
      break;
    case 7:
      src = "public/assets/images/7_siete-copas.jpg";
      break;
    case 10:
      src = "public/assets/images/10_sota-copas.jpg";
      break;
    case 11:
      src = "public/assets/images/11_caballo-copas.jpg";
      break;
    case 12:
      src = "public/assets/images/12_rey-copas.jpg";
      break;
    default:
      src =
        "https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg";
  }

  cartaActualImg.src = src;
}

// 5. ACTUALIZAR PUNTUACIÓN

function actualizaPuntuacion(carta: number): void {
  puntuacion += valorCarta(carta);
  muestraPuntuacion();
  if (puntuacion > puntuacionMaxima) {
    gameOver();
  }
}

// 6. GAME OVER

function gameOver() {
  const mensajeDiv = document.getElementById("mensaje");
  const pedirCartaBoton = document.getElementById("pedir-carta");
  const mePlantoBoton = document.getElementById("me-planto");
  const nuevaPartidaBoton = document.getElementById("nueva-partida");
  const saberQueHabriaPasado = document.getElementById(
    "saber-que-habria-pasado"
  );

  if (mensajeDiv) {
    mensajeDiv.classList.remove("oculto");
  }

  if (pedirCartaBoton) {
    pedirCartaBoton.classList.add("oculto");
  }

  if (mePlantoBoton) {
    mePlantoBoton.classList.add("oculto");
  }

  if (nuevaPartidaBoton) {
    nuevaPartidaBoton.classList.remove("oculto");
  }

  if (saberQueHabriaPasado) {
    saberQueHabriaPasado.classList.remove("oculto");
  }
}

// 7. ME PLANTO

function mePlanto() {
  const mensajeDiv = document.getElementById("mensaje");
  const pedirCartaBoton = document.getElementById("pedir-carta");
  const mePlantoBoton = document.getElementById("me-planto");
  const nuevaPartidaBoton = document.getElementById("nueva-partida");
  const saberQueHabriaPasado = document.getElementById(
    "saber-que-habria-pasado"
  );

  let mensaje = "";

  if (puntuacion < 4) {
    mensaje = "Has sido muy prudente";
  } else if (puntuacion === 5) {
    mensaje = "Te ha entrado el miedo";
  } else if (puntuacion >= 6 && puntuacion < 7.5) {
    mensaje = "¡Vaya racha!";
  } else if (puntuacion === 7.5) {
    mensaje = "¡Enhorabuena, has ganado!";
  }

  if (mensajeDiv) {
    mensajeDiv.innerHTML = mensaje;
    mensajeDiv.classList.remove("oculto");
  }

  if (pedirCartaBoton) {
    pedirCartaBoton.classList.add("oculto");
  }

  if (mePlantoBoton) {
    mePlantoBoton.classList.add("oculto");
  }

  if (nuevaPartidaBoton) {
    nuevaPartidaBoton.classList.remove("oculto");
  }

  if (saberQueHabriaPasado) {
    saberQueHabriaPasado.classList.remove("oculto");
  }
}

// 8. REINICIAR JUEGO

function nuevaPartida() {
  puntuacion = 0;
  muestraPuntuacion();

  const mensajeDiv = document.getElementById("mensaje");
  const pedirCartaBoton = document.getElementById("pedir-carta");
  const mePlantoBoton = document.getElementById("me-planto");
  const nuevaPartidaBoton = document.getElementById("nueva-partida");
  const saberQueHabriaPasado = document.getElementById(
    "saber-que-habria-pasado"
  );
  const cartaActualImg = document.getElementById(
    "carta-actual"
  ) as HTMLImageElement;

  if (mensajeDiv) {
    mensajeDiv.classList.add("oculto");
    mensajeDiv.innerHTML = "";
  }

  if (pedirCartaBoton) {
    pedirCartaBoton.classList.remove("oculto");
  }

  if (mePlantoBoton) {
    mePlantoBoton.classList.remove("oculto");
  }

  if (nuevaPartidaBoton) {
    nuevaPartidaBoton.classList.add("oculto");
  }

  if (saberQueHabriaPasado) {
    saberQueHabriaPasado.classList.add("oculto");
  }

  if (cartaActualImg) {
    cartaActualImg.src = "public/assets/images/back.jpg";
  }
}

function saberQueHabriaPasado() {
  const carta = dameCarta();
  mostrarCarta(carta);
}

// ----------------------------- /////

// 1. MOSTRAR PUNTUACIÓN
document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion();

  // 2. PEDIR CARTA
  const pedirCartaBoton = document.getElementById("pedir-carta");
  if (pedirCartaBoton) {
    pedirCartaBoton.addEventListener("click", () => {
      const carta = dameCarta();
      // 3. MOSTRAR CARTA
      mostrarCarta(carta);
      // 5. ACTUALIZAR PUNTUACIÓN
      actualizaPuntuacion(carta);
    });
  }

  // 7. ME PLANTO
  const mePlantoBoton = document.getElementById("me-planto");
  if (mePlantoBoton) {
    mePlantoBoton.addEventListener("click", () => {
      mePlanto();
      saberQueHabriaPasado();
    });
  }

  // 8. REINICIAR JUEGO
  const nuevaPartidaBoton = document.getElementById("nueva-partida");
  if (nuevaPartidaBoton) {
    nuevaPartidaBoton.addEventListener("click", () => {
      nuevaPartida();
    });
  }
});

// 9. SABER QUÉ HABRÍA PASADO
const saberQueHabriaPasadoBoton = document.getElementById(
  "saber-que-habria-pasado"
);
if (saberQueHabriaPasadoBoton) {
  saberQueHabriaPasadoBoton.addEventListener("click", () => {
    saberQueHabriaPasado();
  });
}
