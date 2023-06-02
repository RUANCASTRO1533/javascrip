

function make() {
    var nome = document.getElementById("nome").value
    var mes = parseInt(Math.random() * 14 )
    switch (mes) {
        case 1:
            document.getElementById("result").innerHTML = `${nome}, você vai ser preso em janeiro`
        break
        case 2 :
            document.getElementById("result").innerHTML = `${nome}, você vai se preso em fevereiro`
        break
        case 3:
            document.getElementById("result").innerHTML = `${nome}, você vai se preso em março`
        break
        case 4:
            document.getElementById("result").innerHTML = `${nome}, você vai se preso em abril`
        break
        case 5:
            document.getElementById("result").innerHTML = `${nome}, você vai se preso em maio`
           break
        case 6:
            document.getElementById("result").innerHTML = `${nome}, você vai se preso em junho`
            break
        case 7:
            document.getElementById("result").innerHTML = `${nome}, você vai se preso em julho`
            break
        case 8:
            document.getElementById("result").innerHTML = `${nome}, você vai se preso em agosto`
            break
        case 9:
            document.getElementById("result").innerHTML = `${nome}, você vai se preso em setembro`
            break
        case 10:
            document.getElementById("result").innerHTML = `${nome}, você vai se preso em outubro`
        break
        case 11:
            document.getElementById("result").innerHTML = `${nome}, você vai se preso em novembro`
        break
        case 12:
            document.getElementById("result").innerHTML = `${nome}, você vai se preso em dezembro`
        break
        case 13:
            document.getElementById("result").innerHTML = `${nome}, você vai ser preso hoje`
            break
            default:
                document.getElementById("result").innerHTML = `${nome}, você nao vai ser preso voltarele e seu fã `
    }
}


