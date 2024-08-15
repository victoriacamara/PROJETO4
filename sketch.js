let palavra;
let som;
let imagem;

function setup() {
  createCanvas(600, 600);
  palavra = gabi();
  som.loop();
}
function preload(){
  imagem = loadImage("imagem.webp");
  som = loadSound("som.mp3");
  
}

function draw() {
  
  batata();
  gabi();
  let maximo = width;
  let minimo = 0;
  let aparecer = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, aparecer);
  text(inicio, 300,300);
}

function batata(){
  background("pink");
  image(imagem,0,0,600,600)
  fill("purple");
  textSize(50);
  textAlign(CENTER,CENTER);
}

function gabi(){
  let palavras =["Hotel Caro", "Baco", "Luísa Sonza", "Blues"];
  return random(palavras);
}