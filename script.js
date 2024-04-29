const elemsExercicio = document.querySelectorAll(".exercicio");
const elemTela = document.querySelector(".tela");
const elemVoltar = document.querySelector(".voltar");
const elemPlay = document.querySelector(".play");
const elemPause = document.querySelector(".pause");
const elemClose = document.querySelector(".close");
const elemCronometro = document.querySelector(".cronometro");
const elemHorario = document.querySelector(".horario");
const elemMinuto = document.querySelector(".minuto");
const elemSegundo = document.querySelector(".segundo");
const elemCentesimo = document.querySelector(".centesimo");

let timer = 0;
let idIntervalo = null;

// Botões Cronômetro
function clicouPlay() {
  elemCronometro.classList.add("iniciou");

  rodarTimer();
}

function clicouPause() {
  elemCronometro.classList.remove("iniciou");

  clearInterval(idIntervalo);
}

function clicouClose() {
  elemCronometro.classList.remove("iniciou");

  timer = 0;
  calcularHorario();
  clearInterval(idIntervalo);
}

function rodarTimer() {
  idIntervalo = setInterval(() => {
    timer = timer + 10;
    // console.log(timer);
    calcularHorario();
  }, 10);
}

function calcularHorario() {
  elemMinuto.innerText = Math.floor(timer / 60000)
    .toString()
    .padStart(2, "0");
  elemSegundo.innerText = Math.floor((timer % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  elemCentesimo.innerText = Math.floor(((timer % 60000) % 1000) / 10)
    .toString()
    .padStart(2, "0");
}

elemPlay.addEventListener("click", clicouPlay);
elemPause.addEventListener("click", clicouPause);
elemClose.addEventListener("click", clicouClose);

// Mudar de tela
elemsExercicio.forEach(function (elemExercicio) {
  elemExercicio.addEventListener("click", function () {
    elemTela.classList.add("tela--cronometro");
  });
});

// elemsExercicio[0].addEventListener("click", function () {
//   console.log("Clicou!");
// });

// elemsExercicio[1].addEventListener("click", function () {
//   console.log("Clicou!");
// });

// elemsExercicio[2].addEventListener("click", function () {
//   console.log("Clicou!");
// });

elemVoltar.addEventListener("click", function () {
  elemTela.classList.remove("tela--cronometro");
});

// Atualizar horário
function atualizarHorario() {
  const horas = new Date().getHours().toString().padStart(2, "0");
  const minutos = new Date().getMinutes().toString().padStart(2, "0");
  const segundos = new Date().getSeconds().toString().padStart(2, "0");

  const horario = horas + ":" + minutos;
  // + ":" + segundos;

  elemHorario.innerText = horario;
}

setInterval(() => {
  atualizarHorario();
}, 5000);