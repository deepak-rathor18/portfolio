document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Set a timeout to hide the preloader after 1200ms (1.2 seconds)
    setTimeout(() => {
        preloader.style.display = 'none'; // Hide the preloader
        content.style.display = 'block'; // Show the content
    }, 1200);
});


let menuVisible = false;
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    const menuIcon = document.querySelector(".nav-responsive i");

    if (menuVisible) {
        nav.classList.remove("responsive");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
        menuVisible = true;
    }
}

function seleccionar() {
    const nav = document.getElementById("nav");
    const menuIcon = document.querySelector(".nav-responsive i");
    
    nav.classList.remove("show");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
    menuVisible = false;
}


function seleccionar(){
   const nav = document.getElementById("nav");
    const menuIcon = document.querySelector(".nav-responsive i");

    if (menuVisible) {
        nav.classList.remove("responsive");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
        menuVisible = true;
    }
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("JavaScript");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("node");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
        habilidades[10].classList.add("azure");
        habilidades[11].classList.add("leadership");
 



    }
}

window.onscroll = function(){
    efectoHabilidades();
} 

// script.js
const typewriterText = document.getElementById('typewriter-text');
const words = [
  "Software Developer",
  "MERN Stack Developer",
  "Open Source Contributor",
  "Full Stack Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let currentLetters = '';

function type() {
  if (wordIndex < words.length) {
    currentWord = words[wordIndex];
    currentLetters = currentWord.slice(0, ++letterIndex);

    typewriterText.textContent = currentLetters;

    if (currentLetters.length === currentWord.length) {
      setTimeout(() => {
        letterIndex = 0;
        wordIndex++;
        if (wordIndex === words.length) {
          wordIndex = 0;
        }
        type();
      }, 1000); // Delay after each full word
    } else {
      setTimeout(type, 100); // Typing speed
    }
  }
}

type();

const tilt = document.querySelector('.tilt');

tilt.addEventListener('mousemove', (e) => {
    const width = tilt.offsetWidth;
    const height = tilt.offsetHeight;
    const centerX = tilt.offsetLeft + width/2;
    const centerY = tilt.offsetTop + height/2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (15 * mouseY / height);
    const rotateY = (-15 * mouseX / width);
    
    tilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

tilt.addEventListener('mouseleave', () => {
    tilt.style.transform = 'rotateX(0) rotateY(0)';
});

  