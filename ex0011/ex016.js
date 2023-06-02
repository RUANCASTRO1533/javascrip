function veri() {
    var nr = document.getElementById("nome").value
for (var c = 1; c <=10; c++ ){
var multi = nr * c
document.getElementById ("aprv").innerHTML += `${nr}x${c} = ${multi}<br>`
}
    }
