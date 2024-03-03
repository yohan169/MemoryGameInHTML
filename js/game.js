let carta1 = null;
let carta2 = null;
let cartasAchadas = [];
let tentativas = 0;

// Função para verificar se todas as cartas foram encontradas
function acabou(baralho) {
    let cont = 0;
    if (baralho) {
        baralho.forEach((e) => {
            e.achada ? cont++ : cont--;
        });
        return cont === 12;
    } else {
        return false;
    }
}

// Função para virar uma carta
function virarCarta(virar, carta) {
    if (!cartasAchadas.includes(carta)) {
        if (!carta1) {
            virar.classList.remove("virar");
            virar.classList.add("virado");
            carta.virada = true;
            carta1 = carta;
        } else if (!carta2) {
            virar.classList.remove("virar");    //Erro estranho na linha 27
            virar.classList.add("virado");
            carta.virada = true;
            carta2 = carta;
            verificarIguais();
        }
    } else {
        alert("Par já encontrado");
    }
    if (acabou(cartasAchadas)) {
        alert("Parabéns você ganhou!");
    }
}

// Função para virar as cartas incorretas de volta após um tempo
function virarCartasIncorretas() {
    const cartaum = document.getElementById(carta1.id);
    const cartadois = document.getElementById(carta2.id);
    const virar1 = cartaum.querySelector(".virado");
    const virar2 = cartadois.querySelector(".virado");
    
    virar1.classList.remove("virado");
    virar2.classList.remove("virado");
    virar1.classList.add("virar");
    virar2.classList.add("virar");

    carta1 = null;
    carta2 = null;

    
}

// Função para verificar se as cartas viradas são iguais
function verificarIguais() {
    if (carta1 && carta2) {
        tentativas++;
        const tt = document.getElementById("tentativas");
        tt.innerHTML = tentativas;
        if (carta1.frente === carta2.frente) {
            baralhoObj.forEach((e) => {
                if (e.frente === carta1.frente) {
                    e.achada = true;
                    e.virada = true;
                    cartasAchadas.push(e);
                }
            });
            carta1 = null;
            carta2 = null;
        } else {
            setTimeout(() => {
                baralhoObj.forEach((e) => {
                    if (e.id == carta1.id) {
                        e.virada = false;
                    } else if (e.id == carta2.id) {
                        e.virada = false;
                    }
                });
                virarCartasIncorretas();
                liberarCartas();
            }, 1000); // Tempo em milissegundos antes de virar de volta
        }
    }
}

//Bloqueia o evento de click das cartas
function bloquearCartas() {
    const cartas = document.querySelectorAll(".carta");
    cartas.forEach((carta) => {
        carta.removeEventListener("click", virarCarta);
    });
}

//Libera o evento de click das cartas
function liberarCartas() {
    const cartas = document.querySelectorAll(".carta");
    cartas.forEach((carta) => {
        carta.addEventListener("click", virarCarta);
    });
}

//Adiciona evento de click nas cartas
const cartas = document.querySelectorAll(".carta");
cartas.forEach((carta) => {
    carta.addEventListener("click", virarCarta);
});
