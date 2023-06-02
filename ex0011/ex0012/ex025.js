var usuarios = []

usuarios = JSON.parse(localStorage.getItem('bdusus'))
if (usuarios == null){
    usuarios = []
}

exibirusuarios()

console.log(usuarios)

function validarcadastro(nomeusu){
    if (nomeusu != ''){
        return true
    } else {
        return false
    }
}

function veri() {
    var nomeusu = document.getElementById('in').value
    var nomecad = document.getElementById('nme').value

    var possocadastrar = validarcadastro(nomeusu)
    if (possocadastrar == false) {
        document.getElementById('erro').innerHTML  = `<b>Verifique se os campos foram preenchidos corretamente`
        erro.style.color = 'red'
        return
    }

    var usuario = {
        nome: nomeusu,
        nmd: nomecad
    }
    usuarios.push(usuario)
    // Utilizando o ""localstorage" que irá gravar o nosso vetor de usuarios
    // no metodo "setitem", precso passar como parametro o nome do espaço
    // Que o navegador ira reservar e passo tambem o vetor de usuarios
    // Convertido em formato JSON
    localStorage.setItem ('bdusu', JSON.stringify(usuarios))  

    exibirusuarios()

    document.getElementById("in").value = ''
    document.getElementById("nme").value = ''
    document.getElementById("ssh").value = ''
    document.getElementById("ssh2").value = ''
    document.getElementById("in").focus
}
function exibirusuarios(){
    document.getElementById('aprv').innerHTML = ``
    
    for (var i in usuarios){
        document.getElementById('aprv').innerHTML += 
        `<div>
            <p><b>Nome:</b> ${usuarios[i].nmd} - <b>Login:</b> ${usuarios[i].nome}<br></p>
        </div>`
    }
}

WDD