function botaocalcular(){
var nr =document.getElementById("nrDigitado").value
var dobro = nr * 2
var metade = nr / 2
document.getElementById("resultados").innerHTML += `O dobro do numero ${nr} é igual a ${dobro}e a metade e igual a ${metade} <br>`
}

function botaolimpar(){
    document.getElementById("resultados").innerHTML = ""
    var nr =document.getElementById("nrDigitado").value = ""

}