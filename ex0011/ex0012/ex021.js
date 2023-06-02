var filmes = []
function make() {
    var nome = document.getElementById('texto').value
    filmes.push(nome)
    document.getElementById('result').innerHTML = ``
   
    for(var i = 0; i < filmes.length; i++){
        document.getElementById('result').innerHTML += `${filmes[i]}<br>`
        document.getElementById("aprv").innerHTML += `Posição do vetor ${i} - ${filmes[i]} <br>`
    
    }
}