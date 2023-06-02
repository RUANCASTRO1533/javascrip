
var filmes = []
var imagens = []
function make() {
    var nome = document.getElementById('texto').value
    var image = document.getElementById('image').value
    filmes.push(nome)
    imagens.push(image)
    document.getElementById('result').innerHTML = ``
    document.getElementById('mage').innerHTML = ``
    for(var i = 0; i < filmes.length; i++){
        document.getElementById('result').innerHTML += `${filmes[i]}<br>`
        document.getElementById('result').innerHTML += `<img src="${imagens[i]}" width="150px" height="225px"><br>`
    }
}