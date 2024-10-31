// a dark and light screen function

// let toggle = document.getElementById('toggleDark');
// let body = document.querySelector('body');

// toggle.addEventListener('click', function(){
//   this.classList.toggle('fa-moon');
//   if(this.classList.toggle('fa-sun')){
//     body.style.background = 'white';
//     body.style.color = 'black';
//     body.style.transition ='2s';
    
//   } else{
//     body.style.background = 'black';
//     body.style.color = 'white';
//     body.style.transition ='2s';
//   }


// })

// function that routes to the guide page
let guide = document.getElementById('btn-guide');

guide.addEventListener('click', function(){
  window.location.href = "../public/guide.html"
})



let buttons = document.querySelectorAll('.bttn');

buttons.forEach(function(buttons) {
  buttons.addEventListener('click', function() {
    window.location.href = 'https://techbullion.com/from-farm-to-table-understanding-the-journey-of-agricultural-products/';
  });
});



let buttonn = document.querySelector('.btnn');

buttonn.addEventListener('click', function(){
  window.location.href = '../public/guide.html'
})



let button = document.querySelector('.btn');

button.addEventListener('click', function(){
  window.location.href = '../public/channel.html'
})


// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () =>{
//     navLinks.classList.toggle(active);
//     console.log(clicked);
// })






function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}