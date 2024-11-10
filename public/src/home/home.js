
let guide = document.getElementById('btn-guide');

guide.addEventListener('click', function(){
  window.location.href = "/public/src/guide/index.html"
})



let buttons = document.querySelectorAll('.bttn');

buttons.forEach(function(buttons) {
  buttons.addEventListener('click', function() {
    window.location.href = 'https://techbullion.com/from-farm-to-table-understanding-the-journey-of-agricultural-products/';
  });
});



let buttonn = document.querySelector('.btnn');

buttonn.addEventListener('click', function(){
  window.location.href = '/public/src/guide/index.html'
})



let button = document.querySelector('.btn');

button.addEventListener('click', function(){
  window.location.href = '/public/src/channel/index.html'
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