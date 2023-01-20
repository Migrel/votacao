
const firebaseConfig = {
    apiKey: "AIzaSyA02KhAQUiLIXk-iYIsGViPBsPNqwdRMqo",
    authDomain: "votacao-85246.firebaseapp.com",
    databaseURL: "https://votacao-85246-default-rtdb.firebaseio.com",
    projectId: "votacao-85246",
    storageBucket: "votacao-85246.appspot.com",
    messagingSenderId: "893259716051",
    appId: "1:893259716051:web:8bb94e72458fcfa5c2cb26",
    measurementId: "G-0DP6V8D392"
  };

  var numeroDeVotosMessi = 0;
var numeroDeVotosCR7 = 0;
function votoCr7(){
    numeroDeVotosCR7 = numeroDeVotosCR7 + 1;
    localStorage.setItem("chaveCr7", numeroDeVotosCR7);
    window.location = 'votacao2.html';
}

function votoMessi(){
 numeroDeVotosMessi = numeroDeVotosMessi + 1;
    localStorage.setItem("chaveMessi", numeroDeVotosMessi);
    window.location = 'votacao2.html';
}