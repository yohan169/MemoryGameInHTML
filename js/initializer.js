//Lista de cartas em objetos
let baralhoObj = [];

//Lista dos caminhos para o rosto das cartas
const frenteSrc = [
  "imgs/front-cards/uzumaki.jpg",
  "imgs/front-cards/uchiha.webp",
  "imgs/front-cards/hyuga.png",
  "imgs/front-cards/otsutsuki.jpg",
  "imgs/front-cards/senju.jpg",
  "imgs/front-cards/sarutobi.jpg"
];

//Criação das 12 cartas
for(let i = 0; i < 12; i++){
  const carta = {
    id: i+1,
    achada: false,
    virada: false,
    frente: (i < 6 ? frenteSrc[i] : frenteSrc[i-6]),
    costas: "imgs/back-cards/backCard.jpg"
  };
  baralhoObj.push(carta);
}

//Embaralhamento
baralhoObj = embaralhar(baralhoObj);

//Adicionar as cartas prontas ao HTML
addCartas(baralhoObj);