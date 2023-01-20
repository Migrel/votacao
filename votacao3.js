 var numeroDeVotosBruxo = 0
 var numeroDeVotosFenômeno = 0
function votoBruxo(){
    numeroDeVotosBruxo = numeroDeVotosBruxo + 1;
    localStorage.setItem("chaveBruxo", numeroDeVotosBruxo);
window.location = 'resultados.html';
}

function votoFenômeno(){
    numeroDeVotosFenômeno = numeroDeVotosFenômeno + 1;
    localStorage.setItem("chaveFenômeno", numeroDeVotosFenômeno);
    window.location = 'resultados.html';
}