
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAFV9Nm6-arPs-rIERvnjZ4Tah11o4DOa4",
    authDomain: "plantiq-50793.firebaseapp.com",
    projectId: "plantiq-50793",
    storageBucket: "plantiq-50793.appspot.com",
    messagingSenderId: "487096188668",
    appId: "1:487096188668:web:58ff1119731c0970cfa179"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();


 
//  submit button

const submit = document.getElementById('submit');
submit.addEventListener('click', function(event){
event.preventDefault()

 // input
 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;
 const confirmPassword = document.getElementById('confirmpassword').value;



if (confirmPassword === password) {
  alert("Password matches");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Creating An Account");
      window.location.href = "/public/src/login/index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
} else {
  alert("Password Mismatch");
}


})



document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;
  
  // Toggle icon text
  this.textContent = type === "password" ? "👁️" : "🙈";
});

document.getElementById("toggleConfirmPassword").addEventListener("click", function () {
  const confirmPasswordField = document.getElementById("confirmpassword");
  const type = confirmPasswordField.type === "password" ? "text" : "password";
  confirmPasswordField.type = type;
  
  // Toggle icon text
  this.textContent = type === "password" ? "👁️" : "🙈";
});

