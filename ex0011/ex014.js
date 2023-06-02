function make(){
    for (var i = 1; i <= 6; i++) {
        var num =parseInt(Math.random() * 60 )
        document.getElementById("result").innerHTML += ` ${num} `
    }
}