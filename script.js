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


document.getElementById('contactForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  // Reference to the submit button
  const submitButton = document.querySelector('#contactForm button[type="submit"]');

  // Change button text to show loading state
  submitButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submitting...';
  submitButton.disabled = true; // Disable the button to prevent multiple submissions

  // Gather form data
  const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      purpose_subject: document.getElementById('purpose_subject').value.trim(),
      message: document.getElementById('message').value.trim(),
  };

  // Basic client-side validation
  if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields (Name, Email, and Message).');
      submitButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i> SEND';
      submitButton.disabled = false;
      return;
  }

  console.log(formData);

  try {
      // Send form data to the API using fetch with a 10-second timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // Set a 10-second timeout for the request

      const response = await fetch('https://portfolio-contact-api.vercel.app/api/contact', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          signal: controller.signal, // Attach the signal to abort the request if needed
      });

      clearTimeout(timeoutId); // Clear the timeout if the request completes successfully

      if (!response.ok) {
          // Server-side error
          const errorResponse = await response.json();
          throw new Error(errorResponse.message || 'Failed to send message. Please try again.');
      }

      // Success: Message sent
      alert('Message sent successfully!');
      // Clear form fields after successful submission
      document.getElementById('contactForm').reset();
  } catch (error) {
      // Different error handling based on the type of error
      if (error.name === 'AbortError') {
          alert('Request timeout. Please check your internet connection and try again.');
      } else if (error.message === 'Failed to fetch') {
          alert('Network error. Please check your internet connection and try again.');
      } else {
          alert(`Error: ${error.message}`);
      }
  } finally {
      // Reset the button state after the API call finishes
      submitButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i> SEND';
      submitButton.disabled = false;
  }
});


  