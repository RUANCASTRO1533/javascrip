
function login() {
    var usuario = document.getElementById("usu").value
    var senha = document.getElementById("pss").value
    if (usuario == "ruan" && senha == "123") {
      document.getElementById("aprv").innerHTML = `Bem-Vindo a sua conta ${usuario}<br>`
      aprv.style.color = 'green'
    } else {
      document.getElementById("npv").innerHTML = `Usuario ou senha inválido<br>`
      naprv.style.color = 'red'
    }
  }