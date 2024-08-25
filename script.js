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
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
      {
        title: "Admin Dashboard",
        imgPath: "./img//sparkup.png",
        description: " The admin dashboard project allows full management of website content, including dynamic updates and role-based access control for various user permissions.....",
        ghLink: "#projects",
        demoLink: "https://sparkuptech.in/#/"
      },
      {
        title: "Study Notion",
        imgPath: "./img//studynotion.png",
        description: "Developed the Study Notion e-learning platform using ReactJS, NodeJS, and MongoDB, enabling students to access courses and instructors to manage content and track performance, with enhanced UI using Tailwind CSS...",
        ghLink: "https://github.com/deepak-rathor18/studynotion",
        demoLink: "#projects"
      },
      {
        title: "Criclive (Cricket Live Score Website)",
        imgPath: "./img//cricklive.png",
        description: "Created Criclive, a real-time cricket score website using ReactJS and API integration, delivering up-to-the-minute match updates and scores with efficient state management...",
        ghLink: "https://github.com/deepak-rathor18/liveScore",
        demoLink: "https://cricket-live-score-ten.vercel.app/"
      },
      // Add more project objects here...
    ];
  
    const projectContainer = document.querySelector('.project-cards');
 
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.innerHTML = `
        <img src="${project.imgPath}" alt="${project.title}" class="project-image" >
        <h2 class="project-title">${project.title}</h2>
        <p class="project-description">${project.description}</p>
        <a href="${project.ghLink}" class="btn" target="_blank">GitHub</a>
        <a href="${project.demoLink}" class="btn" target="_blank">Demo</a>
      `;
      projectContainer.appendChild(projectCard);
    });
  });
  