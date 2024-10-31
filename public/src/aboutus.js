// const { annotate } = require("pdfkit");

let toggle = document.getElementById('toggleDark');
let body = document.querySelector('body');

toggle.addEventListener('click', function(){
  this.classList.toggle('fa-moon');
  if(this.classList.toggle('fa-sun')){
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition ='2s';
    body.style.boxShadow.color = "black"
  } else{
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition ='2s';
  }


})


function navigateToPage(elementId, targetUrl) {
  let element = document.getElementById(elementId);
  if (element) {
    element.addEventListener('click', function () {
      window.location.href = targetUrl;
    });
  } else {
    console.warn(`Element with ID "${elementId}" not found`);
  }
}

// Using the function for different buttons
navigateToPage('contact-us', '../public/contact.html');
navigateToPage('analyze-page', '../public/index.html');
navigateToPage('contact-us2', '../public/contact.html');  


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}