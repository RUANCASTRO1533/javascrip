
    var nm = parseInt(Math.random() * 100)
    var nr = 0
    nr = parseInt(nr)

    function jpv() {
        var guess = prompt("digite o numero que voce deseja")
        nr++
        if (guess < nm){
            document.getElementById("jpv").innerHTML += `${guess} < que o numero que eu Pensei. ${nr} tentativas `
        } else if (guess > nm){
            document.getElementById("jpv").innerHTML += `${guess} > que o numero que eu Pensei. ${nr} tentativas`
        } else {
            document.getElementById("jpv").innerHTML += `${guess} = e o numero que eu pensei. ${nr} tentativas`
        }
        
    }


