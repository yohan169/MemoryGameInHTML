let baralhoObj = [];
const frenteSrc = [
  "imgs/front-cards/uzumaki.jpg",
  "imgs/front-cards/uchiha.webp",
  "imgs/front-cards/hyuga.png",
  "imgs/front-cards/otsutsuki.jpg",
  "imgs/front-cards/senju.jpg",
  "imgs/front-cards/sarutobi.jpg"
];

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

baralhoObj = embaralhar(baralhoObj);
addCartas(baralhoObj);

console.log(baralhoObj);