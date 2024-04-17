//constante para determinar la duración de la animación
const duracionAnimacion = 500;
//Animaciones para cada Pétalo
const animacionesPetalos = [
  {//Animación para primer Pétalo
    keyframesPetalo: [
      {
        transform: "rotateZ(0deg)",
        left: "20%",
        background: "linear-gradient(to top, #D15B01, #9673C5, #9673C5)",
        offset: 0,
      },
      {
        transform: "rotateZ(90deg)",
        left: "47%",
        top: "15%",
        background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",
        offset: 0.25,
      },
      {
        transform: "rotateZ(180deg)",
        left: "47%",
        top: "30%",
        background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",
        offset: 0.5,
      },
      {
        transform: "rotateZ(270deg)",
        left: "20%",
        top: "30%",
        background: "linear-gradient(to top, #D15B01, #9673C5, #9673C5)",
        offset: 0.75,
      },
      {
        transform: "rotateZ(360deg)",
        left: "20%",
        top: "15%",
        background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",
        offset: 1,
      },
    ],//Tiemp para para todas las animaciones
    optionsPetalo: {
      duration: duracionAnimacion,
      easing: "linear",
    },
  },
  {//Animación para segundo Pétalo
    keyframesPetalo: [
      {
        transform: "rotateZ(0deg)",
        left: "47%",
        top: "15%",
        background: "linear-gradient(to top, #D15B01, #9673C5, #9673C5)",
        offset: 0,
      },
      {
        transform: "rotateZ(90deg)",
        left: "47%",
        top: "30%",
        background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",
        offset: 0.25,
      },
      {
        transform: "rotateZ(180deg)",
        left: "20%",
        top: "30%",
        background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",
        offset: 0.5,
      },
      {
        transform: "rotateZ(270deg)",
        left: "20%",
        top: "15%",
        background: "linear-gradient(to top, #D15B01, #9673C5, #9673C5)",
        offset: 0.75,
      },
      {
        transform: "rotateZ(360deg)",
        left: "47%",
        top: "15%",
        background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",
        offset: 1,
      },
    ]
  },
  {//Animación para tercer Pétalo
    keyframesPetalo: [
      {
        transform: "rotateZ(0deg)",
        left: "20%",
        top: "30%",
        background: "linear-gradient(to left, #D15B01, #9673C5, #9673C5)",
        offset: 0,
      },
      {
        transform: "rotateZ(90deg)",
        left: "20%",
        top: "15%",
        background: "linear-gradient(to left, #D15B01, #FDC300, #FDC300)",
        offset: 0.25,
      },
      {
        transform: "rotateZ(180deg)",
        left: "47%",
        top: "15%",
        background: "linear-gradient(to left, #565656, #FEFDFB, #FEFDFB)",
        offset: 0.5,
      },
      {
        transform: "rotateZ(270deg)",
        left: "47%",
        top: "30%",
        background: "linear-gradient(to left, #D15B01, #9673C5, #9673C5)",
        offset: 0.75,
      },
      {
        transform: "rotateZ(360deg)",
        left: "20%",
        top: "30%",
        background: "linear-gradient(to left, #565656, #FEFDFB, #FEFDFB)",
        offset: 1,
      },
    ]
  },
  {//Animación para cuarto Pétalo
    keyframesPetalo: [
      {
        transform: "rotateZ(0deg)",
        left: "47%",
        background: "linear-gradient(to right, #D15B01, #9673C5, #9673C5)",
        offset: 0,
      },
      {
        transform: "rotateZ(90deg)",
        left: "20%",
        top: "30%",
        background: "linear-gradient(to right, #D15B01, #FDC300, #FDC300)",
        offset: 0.25,
      },
      {
        transform: "rotateZ(180deg)",
        left: "20%",
        top: "15%",
        background: "linear-gradient(to right, #565656, #FEFDFB, #FEFDFB)",
        offset: 0.5,
      },
      {
        transform: "rotateZ(270deg)",
        left: "47%",
        top: "15%",
        background: "linear-gradient(to right, #D15B01, #9673C5, #9673C5)",
        offset: 0.75,
      },
      {
        transform: "rotateZ(360deg)",
        left: "47%",
        top: "30%",
        background: "linear-gradient(to right, #565656, #FEFDFB, #FEFDFB)",
        offset: 1,
      },
    ]
  },
  {//Animación para quinto Pétalo
    keyframesPetalo: [
      {
        transform: "rotateZ(0deg)",
        left: "32.7%",
        top: "12%",
        background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",
        offset: 0,
      },
      {
        transform: "rotateZ(90deg)",
        left: "52%",
        top: "23%",
        background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",
        offset: 0.25,
      },
      {
        transform: "rotateZ(180deg)",
        left: "33.4%",
        top: "34%",
        background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",
        offset: 0.5,
      },
      {
        transform: "rotateZ(270deg)",
        left: "14%",
        top: "23%",
        background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",
        offset: 0.75,
      },
      {
        transform: "rotateZ(360deg)",
        left: "32.7%",
        top: "12%",
        background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",
        offset: 1,
      },
    ]
  },
  {//Animación para sexto Pétalo
    keyframesPetalo: [
      {
        transform: "rotateZ(0deg)",
        left: "52%",
        top: "23%",
        background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",
        offset: 0,
      },
      {
        transform: "rotateZ(90deg)",
        left: "33.4%",
        top: "34%",
        background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",
        offset: 0.25,
      },
      {
        transform: "rotateZ(180deg)",
        left: "14%",
        top: "23%",
        background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",
        offset: 0.5,
      },
      {
        transform: "rotateZ(270deg)",
        left: "32.7%",
        top: "12%",
        background: "linear-gradient(to top, #D15B01, #FDC300, #FDC300)",
        offset: 0.75,
      },
      {
        transform: "rotateZ(360deg)",
        left: "52%",
        top: "23%",
        background: "linear-gradient(to top, #565656, #FEFDFB, #FEFDFB)",
        offset: 1,
      },
    ]
  },
  {//Animación para séptimo Pétalo
    keyframesPetalo: [
      {
        transform: "rotateZ(0deg)",
        left: "33.4%",
        top: "34%",
        background: "linear-gradient(to bottom, #565656, #FEFDFB, #FEFDFB)",
        offset: 0,
      },
      {
        transform: "rotateZ(90deg)",
        left: "14%",
        top: "23%",
        background: "linear-gradient(to bottom, #D15B01, #FDC300, #FDC300)",
        offset: 0.25,
      },
      {
        transform: "rotateZ(180deg)",
        left: "32.7%",
        top: "12%",
        background: "linear-gradient(to bottom, #565656, #FEFDFB, #FEFDFB)",
        offset: 0.5,
      },
      {
        transform: "rotateZ(270deg)",
        left: "52%",
        top: "23%",
        background: "linear-gradient(to bottom, #D15B01, #FDC300, #FDC300)",
        offset: 0.75,
      },
      {
        transform: "rotateZ(360deg)",
        left: "33.4%",
        top: "34%",
        background: "linear-gradient(to bottom, #565656, #FEFDFB, #FEFDFB)",
        offset: 1,
      },
    ]
  },
  {//Animación para octavo Pétalo
    keyframesPetalo: [
      {
        transform: "rotateZ(0deg)",
        left: "14%",
        top: "23%",
        background: "linear-gradient(to bottom, #565656, #FEFDFB, #FEFDFB)",
        offset: 0,
      },
      {
        transform: "rotateZ(90deg)",
        left: "32.7%",
        top: "12%",
        background: "linear-gradient(to bottom, #D15B01, #FDC300, #FDC300)",
        offset: 0.25,
      },
      {
        transform: "rotateZ(180deg)",
        left: "52%",
        top: "23%",
        background: "linear-gradient(to bottom, #565656, #FEFDFB, #FEFDFB)",
        offset: 0.5,
      },
      {
        transform: "rotateZ(270deg)",
        left: "33.4%",
        top: "34%",
        background: "linear-gradient(to bottom, #D15B01, #FDC300, #FDC300)",
        offset: 0.75,
      },
      {
        transform: "rotateZ(360deg)",
        left: "14%",
        top: "23%",
        background: "linear-gradient(to bottom, #565656, #FEFDFB, #FEFDFB)",
        offset: 1,
      },
    ]
  },
];
//Función principal
function animarPetalos() {
  let contenedorCentro = document.querySelector(".contenedor");

  contenedorCentro.addEventListener("mousemove", (event) => {
    if (event.target.classList.contains("centro")) {
      //Animar primer Pétalo
      event.target.previousElementSibling.previousElementSibling.animate(
        animacionesPetalos[0].keyframesPetalo,
        animacionesPetalos[0].optionsPetalo
      );
      //Animar segundo Pétalo
      event.target.previousElementSibling.animate(
        animacionesPetalos[1].keyframesPetalo,
        animacionesPetalos[0].optionsPetalo
      );

      //IMAGINA QUE AQUI ESTA LA POSICIÓN DEL CENTRO DEL GIRASOL

      //Animar tercer Pétalo
      event.target.nextElementSibling.animate(
        animacionesPetalos[2].keyframesPetalo,
        animacionesPetalos[0].optionsPetalo
      );
      //Animar cuarto Pétalo
      event.target.nextElementSibling.nextElementSibling.animate(
        animacionesPetalos[3].keyframesPetalo,
        animacionesPetalos[0].optionsPetalo
      );
      //Animar quinto Pétalo
      event.target.nextElementSibling.nextElementSibling.nextElementSibling.animate(
        animacionesPetalos[4].keyframesPetalo,
        animacionesPetalos[0].optionsPetalo
      );
      //Animar sexto Pétalo
      event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.animate(
        animacionesPetalos[5].keyframesPetalo,
        animacionesPetalos[0].optionsPetalo
      );
      //Animar séptimo Pétalo
      event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.animate(
        animacionesPetalos[6].keyframesPetalo,
        animacionesPetalos[0].optionsPetalo
      ); 
      //Animar octavo Pétalo
      event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.animate(
        animacionesPetalos[7].keyframesPetalo,
        animacionesPetalos[0].optionsPetalo
      );
    }
  });
}

window.addEventListener("load", animarPetalos);