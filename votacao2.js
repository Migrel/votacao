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


var numeroDeVotosPelé = 0;
var numeroDeVotosMaradona = 0;
function votoPelé(){
    numeroDeVotosPelé = numeroDeVotosPelé + 1;
    localStorage.setItem("chavePelé", numeroDeVotosPelé);
    window.location = 'votacao3.html';
}

function votoMaradona(){
 numeroDeVotosMaradona = numeroDeVotosMaradona + 1;
    localStorage.setItem("chaveMaradona", numeroDeVotosMaradona);
    window.location = 'votacao3.html';
}