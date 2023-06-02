function media(){
    var nm = document.getElementById("aluno").value
    var nr = document.getElementById("nota1").value
    var nr2 = document.getElementById("nota2").value
    nr = Number(nr)
    nr2 = Number(nr2)
    var soma = (nr + nr2) / 2
    if (soma >= 7) {
      document.getElementById ("passou").innerHTML = `<b>PASSOU DE ANO</b>`
    } else {
        document.getElementById ("npassou").innerHTML = `<b>NAO PASSOU DE ANO</b>`
    }
    document.getElementById("resultados").innerHTML += `O aluno ${nm} tirou nota ${nr} e ${nr2} sua média foi ${soma} <br>`
} 


var media = (Number(nota1) + Number(nota2)) / 2 
if (media >=7) {
  documente . getElementById("resultado").innerHTML=
  `<b class="aprov">o aluno ${nome} tirou nota ${nota1} e ${nota}
  foi ${media} <b> Passou de ano </b> <br>
  <img src=aprovado.svg>
  `
} else{
  document.getElementById("resultado").innerHTML=
  `O aluno ${aluno} tirou nota ${nota1} e ${nota2} sua media
  foi ${media} <b> NAO PASSOU DE ANO </b> <hr>
  `
}