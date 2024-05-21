// retorna todos os elementos que possuem a classe className:
//document.getElementsByClassName('className')

//retorna todods os elementos que possuam a classe teste dentro do elemento que possuir o ID principal
//document.getElementById('principal').getElementsByClassName('teste')


//retorna todas as tags <h1></h1> encontradas no documento html:
//document.getElementByTagname("h1")
//retorna todas as tags
//document.getElementsByTagName("*")
//retorna a quantidade de tags: 
var x =document.getElementsByTagName("h1").length;
console.log(x)

//array/matriz 

var listaCompras = ['leite','pão','queijo','presunto']

//indice
console.log (listaCompras[1])

// JS permite criar listas com dados de tipos diferentes 
var dadosDiferentes = ["dia", 23, true ]

//tamanho da lista 
console.log(dadosDiferentes.length)

//adicionando elementos na lista 
 listaCompras = ['leite','pão','queijo','presunto']
listaCompras.push('banana')
console.log(listaCompras)


//removendo elementos da lista
listaCompras.pop()
console.log(listaCompras)


//adicionando elementos em uma posição especifica
listaCompras.splice(2,0,"banana")
console.log(listaCompras)

//remover elemento em uma posição especifica 
listaCompras.splice(2,1)
console.log(listaCompras)

var compras = ["leite", "queijo","presunto"]


function preencherSelect(){
    var htmlFinal = ""
    var tamanholista = compras.length
    for(var i = 0; i < tamanholista; i++){
        htmlFinal+= "<option>" + compras [i]+ "</option>"
    }

    document.getElementById("meuSelect").innerHTML = htmlFinal
}

