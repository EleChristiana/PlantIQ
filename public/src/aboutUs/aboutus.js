


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
navigateToPage('contact-us', '/public/src/contactus/index.html');
navigateToPage('analyze-page', '../analyze/index.html');
navigateToPage('contact-us2', '/public/src/contactus/index.html');  


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}