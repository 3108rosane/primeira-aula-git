var qg = prompt("DIGITAR A QTD DE GOL")
var qc = prompt("DIGITAR A QTD DE PASSES CERTOS")
var qe = prompt("DIGITAR A QTD DE PASSES ERRADOS")

var pontos = (qg * 50) + (qc * 10) + (qe * -5)
console.log("SUA PONTUAÇÃO FOI " + pontos)
if(pontos <50){
    alert("Péssima Partida");
}else if(pontos>= 50 && pontos <100){
    alert("Partida Ruim");
}else if(pontos>= 100 && pontos < 150){
   alert("Fez o Básico");
}else if(pontos >= 150 && pontos < 200){
    alert("Foi bem na Partida");
}else{
    alert("Jogou Demais");
}