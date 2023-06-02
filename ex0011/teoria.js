//auto attibuiçao
var n =3
n = n + 3 // a variavel recebe ela mesmo + 3 
n += 3 // quer dizer o mesmo que a expressao acima

n++ // quando precisamos somar + 1 ao valor da variavel
n-- // quando precisamos somar + 1 ao valor da variavel

// operadores relacionados 
var n1 = 5 
var n2 = 6 
console.log (n1 > n2)  // maior que
console.log (n1 < n2) // menor que 
console.log (n1 >= n2) // maior ou igual que 
console.log (n1 <= n2) // menor ou igual que 
console.log (n1 == n2) // igual
console.log (n1 != n2) // nai igual - diferente
// estruturas condicionais
if ( n1 > n2){
    // verifificando a cindiçao entre parentes 
    // se a condiçao for verdadeira "entra" nesse bloco else
    console.log("o n1 nao e maior que o n2")
}
 /// exemplo de condiçao 
 var minha idade = 18
 if (minhaidade >= 16){
  }  console.log ("voce pode votar")
    else {
        console.log("voce nao pode votar")
    }
 // Tipo de exibição de mensagens no console

console.error("Esta é uma mensagem de erro")
console.warn("Esta é uma mensagem de alerta")
console.info("Mensagem de informação")


//alert("olá mundo!!!")
console.log("olá mundo, estou utilizando o console")
function Botao1() {
    alert("Vc apertou o botao")
}
function Botaocorfundo() {
    document.body.style.backgroundColor = "green"
}

function BotaoNome() {
    var nome2 = prompt("digite o seu nome")
    confirm("Olá " + nome2 + " , entendeu variavel?")
    confirm(`Olá ${nome2}, entendeu variavel?`)
}
// String - conjunto de caracteres - declarar com "" ou ''   
var nome = "Pedro"
var sobrenome = "Henrique"

// Number - todo numero em js é do tipo Number - declarar sem ""

var idade = 17

// Boolean - Somente recebe true ou false

var aprovado = true

//Utilizamos o typeof para saber o tipo de dado

console.log(typeof nome)

// Concatenando strings com o +

console.log(nome + ' ' + sobrenome)

// Numeros

var n1 = 10
var n2 = 15
console.log(n1 + n2)
var n3 = "10"
var n4 = "15"
console.log(n3 + n4)

// Variavel recebe o valor de outra variavel

n1 = n2
console.log("n1 =   " + n1 + ' e o n2 = ' + n2)

// Para atribuir um valor decimal usamos . e nao a ,

var salario = 7000
salario = salario + 200
console.log(salario)

// Juntar texto e variavel

console.log('Olá, ' + nome + ' voce tem ' + idade + ' anos')
console.log(`Olá, ${nome} voce tem ${idade} anos`)

// Botao de somar

function Botaosmr() {
    var nm1 = prompt("digite um numero:")
    var nm2 = prompt("Digite o valor do outro numero")
    
    nm1 = parseFloat(nm1)
    nm2 = Number(nm2)
    var soma = nm1 + nm2    
    // Pegar elemento pelo id e alterando o conteudo do html
    document.getElementById ("res-soma").innerHTML += 
    `<br>A Soma de ${nm1} + ${nm2} = ${soma}`
}


function Botaocidade(){
    var cidade = document.getElementById("cidade").value
    document.getElementById("resultadocidade").innerHTML +=
    `<br> O nome da cidade ${cidade}`
}

//Operados aritmeticos e Ordem de procedencia
var opSoma = 5 + 2 //Operador de soma +
console.log(opSoma) //7
var opSubtracao = 5 - 2 //Operador de subtração -
console.log(opSubtracao) //3
var opMultiplicacao = 5 * 2 //Operador de multiplicacao *
console.log(opMultiplicacao) //10
var opDivisao = 5 / 2 //Operador de divisao /
console.log(opDivisao) //2.5
var opExpoenciacao = 5 ** 2 //Operador de expoenciacao **
console.log (opExpoenciacao) //25
var opResto = 5 % 2 //Operador de resto da divisao %
console.log(opResto) //1
//Ordem de precedencia
var ordemPrecedencia1 = 5 + 3 / 2
console.log(ordemPrecedencia1) //6.5
var ordemPrecedencia2 = (5 + 3) / 2
console.log(ordemPrecedencia2) //4
/* 1º ()
   2º **
   3º * /
   4º %
   5º + -
   */
  //Constantes - o valor nao pode ser alterado depois de atribuido
  const pi = 3.14
  // pi = 3 - Se o valor for alterado dará erro no javascript 


  //Operadores racionais
  var n1 = 5
  var n2 = 2
  console.log (n1 > n2) // Maior
  console.log (n1 < n2) // Menor
  console.log (n1 >= n2) // Maior ou igual que
  console.log (n1 <= n2) // Menor ou igual que
  console.log (n1 == n2) // igual
  console.log (n1 != n2) // Não igual


  // Estruturas condicionais
  if (n1 > n2) { //Verificando a condição entre parenteses
    // Se a condição for verdadeira "entra" nesse bloco
    console.log ("O n1 é maior que o n2")

  } else {
    // Se a condiçao NAO for verdadeira "entra" nesse bloco ELSE
    console.log ("O n1 é maior que o n2")
  }

  //Exemplo de condição

  var minhaIdade = 16
  if (minhaIdade >= 16) {
    console.log ("voce pode votar")
  } else {
    console.log ("Voce nao pode votar")
  }
  //operados logicos
  //&& REPRESENTA o E
  var login = "adm"
  var senha = "123"
  //para entrar na condiçao TRUE as 2 condiçao precisar ser  verdadeiro
  if (login=="adm" && senha == "123"){
    //exucutar esse bloco quando as condiçaoes sao TREU
  } else{
    //exrcutar esse bloco se pelo ,menos 1 condiçao for FALSr
  }

  var media = 6 
  //operador ou -> || (pipe)
  //para entrar na condiçao TREU pelo menos 1 condiçao precisa ser verificado 
  if (media == 6 || media = 5){
    //exucutar esse bloco quando 1 condiçao é TRUE pelomenos
  }else {
    //aqui entra se todas as condiçoes forem falsal
  }
  //Estruturas condicionais encadeados
  if(media >= 7){
    console.log ("aprovado")
  } else if (media >= 5){
    //podemos fazer um novo if junto com o else
  }
  console.log ('bom aluo')
  {
    else if (media == 7 || media == 6) 
 }
 {
  console.log ("aluno mediano")
 } else if (media == 5 || media == 4 ||mmedia == 3){
  console.log("aluno abaixo da media")
 }
 //debugger
 // pARA SORTEARMOS um valor aleatorio utilizamos o math.random()
 // o match.random retorna um numero decinal o precisamos multiplicar pelo nr
 //maximo que desejamos
 //o parseint utilizamos para obter apenas a parte inteira do numero 
 var nrsorteado = parseInt(math.random() * 100)
 console.log (nrsorteado)
 math.random() * (e um nmr) para sortear numeros
 //SWITVH CASE
 // E COMO SE FOSSE VARIOS IF ELSE DE FORMA MAIS SIMPLES
 var (diasemana){
  case 1;
 }
 { console.log("hoje e: domingo")
 BREAK // para o switch case e nao verifica as outras opçoes
 Case 2:]console.log("hoje e: segunda")
 case 3:
  console.log ("hoje e: terça")
  break
  case 4:
    console.log("hoje e: quarta")
    break
    case 5;
    console.log("hoje e: quinta")
    break
    case 6:
      console.log("hoje e: sexta")
      break
      case 7:
        console.log("hoje e: sabado")}

//for - laço de repetiçao
// primeira expressao vat í = 0
// (Aqui eu inicio o controle de vezes)
// seugunda expressao 1 <=10
// (aqui nos verificamos a condiçao para se manter no loop)
// terceira expressao í++
(aqui conversamos com a variavel +1 vez) 
fot (var í = 1 <= 10; i++) {
     alert(i)
     console.log(i)
}
// verificando se o numero e par com while
var contador = 1 //iniciando o contador de vezes que irá executar 
while (contador <= 10) {
  // enquanto a condiçao for verdadeira 
  if (contador % 2 == 0 ){ condiçao para o contador for par 
    console.log (`${contador}é par`)else 
    console.log (`${contador} é impar`)
  
  contador ++ //adicionamos +1 ao contador para nao ficar em logo
  vetores vetores vetores vetores vetores vetores vetores vetores vetores vetores vetores vetores vetores vetores vetores vetores vetores vetores vetores vetores
//criando um array vazio   
var mouVeotor []

//criando vetores com dados
var numeros = [4, 1, 5, 8, 2, 7]
var nomes = ['silvia', 'marcos', 'sandra']
var novoVetor = [20, 'SESI', true]
//acensando os dados de um vetor
console.log (nomes[1] ) 
console.log (novoVetor[1] )
var frutas = ['maçâ', 'laranja', 'pera', 'morango', 'uva']
for (var i = 0; i <= frutas.length; i++){
  //coloco o i no indice de frutas para pegar o 
  //valor de cada indice do vetor
  console.log (frutas[i])
}
//Adicionando novo valor no final do vetor
frutas.push('abacaxi')
fot (var i = 0; i < frutas.length; i++){
  console.log (frutas[i] )

}
var bovaListaFrutas = []
novaListaFrutas.push('limao')
novaListaFrutas.push('melancia')
console.logw  
//criando um array vazio
var meuVetor = []

//criando vetores com dados
var numeros = ['silvia', 'marcos', 'Sandra']
var novoVetor = [20, 'SESI', true]

//Acessando os dados de um vetor
console.log ( nomes [1] )
console.log ( novoVetor[1] )

//verificando o atributo de tamanho do vetor 
 console.log (numeros.length)

 // indice   0    1     2      3     4
 var frutas = ['maçã', 'laranja' , 'pera', 'morango','Uva']
 // faço um for para percorrer todo o tamanho do vetor
 for (var i = 0; i < frutas.length; i++) {
    // coloco o i no indice da frutas para pegar o 
    console.log (frutas[i] ) 
 }

 //para lermos todos os elementos de um vector, podemos tambem
 //utilizar o ---- for in ---- como o exemplo abaixo
 for ( var pos in frutas){
  console.log (frutas[pos])
 }
