//Embaralha as cartas
function embaralhar(baralho) {
    for (let i = baralho.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [baralho[i], baralho[j]] = [baralho[j], baralho[i]];
    }
    return baralho;
}

function addCartas(baralhoEmbaralhado) {
  const baralho = document.getElementById("cartas");
  baralhoEmbaralhado.forEach((e) => {
    //Criando a div carta
    const carta = document.createElement("div");
    carta.id = e.id;
    carta.classList.add("carta");

    //Criando a div virar
    const virar = document.createElement("div");
    virar.classList.add("virar");

    //Criando a div frente
    const frente = document.createElement("div");
    frente.classList.add("frente");
    //Imagem da div frente
    const fimg = document.createElement("img");
    fimg.src = e.frente;
    fimg.alt = "frente";

    //Criando a div costas
    const costas = document.createElement("div");
    costas.classList.add("costas");
    //Imgem da div costas
    const cimg = document.createElement("img");
    cimg.src = e.costas;
    cimg.alt = "costas";

    //Intercolocando-as
    costas.appendChild(cimg);
    frente.appendChild(fimg);

    virar.appendChild(costas);
    virar.appendChild(frente);

    carta.appendChild(virar);

    // Adiciona evento de clique
    carta.addEventListener("click", function() {
      virarCarta(virar, e);
    });

    baralho.appendChild(carta);
  });
}

function virarCarta(virar, carta) {
  if (!carta.virada) {
    // Adiciona a classe 'virado' para virar a carta
    virar.classList.add("virado");
    carta.virada = true;
  } else {
    // Remove a classe 'virado' para voltar ao estado original
    virar.classList.remove("virado");
    carta.virada = false;
  }
}
