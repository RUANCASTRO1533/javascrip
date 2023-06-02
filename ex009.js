function cnh(){
    var nm = document.getElementById("nome").value
    var nr = document.getElementById("idade").value
    if (nr >= 18) {
        document.getElementById ("aprv").innerHTML = `Meus Parabéns ${nm}, <b>Você pode tirar CNH</b><br>`
      } else {
          document.getElementById ("naprv").innerHTML = `Puts ${nm}, <b>Você não pode tirar CNH</b><br>`
      }
    }
