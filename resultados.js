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
  firebase.initializeApp(firebaseConfig)
  var database = firebase.database()
var numero = 0;
database.ref("votoB").on("value", data=>{
  numero = data.val();
  document.getElementById("idDoBruxo").innerHTML = numero;
})
var Bruxo = 0
function carregou(){
   Bruxo = localStorage.getItem("chaveBruxo");
    Bruxo = Number(Bruxo)
    database.ref("/").update({
      votoB:numero + Bruxo
    })
    console.log(numero)
    var fenômeno = localStorage.getItem("chaveFenômeno");
    var pelé = localStorage.getItem("chavePelé");
    var maradona = localStorage.getItem("chaveMaradona");
    var cr7 = localStorage.getItem("chaveCr7");
    var messi = localStorage.getItem("chaveMessi");


    document.getElementById("idDoBruxo").innerHTML = numero;
    document.getElementById("idDoFenômeno").innerHTML = fenômeno;
    document.getElementById("idDoPelé").innerHTML = pelé;
    document.getElementById("idDoMaradona").innerHTML = maradona;
    document.getElementById("idDoRobo").innerHTML = cr7;
    document.getElementById("idDoEt").innerHTML = messi;
}