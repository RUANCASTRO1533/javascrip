function make() {
    var ini = document.getElementById("ini").value
    var fin = document.getElementById("fin").value
    ini = Number(ini)
    fin = Number(fin)
    while ( ini <= fin){
        if (ini % 2 == 1){
            document.getElementById("result").innerHTML += `${ini}<br>`
        }
        ini++
    }
}