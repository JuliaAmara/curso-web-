//JQuerry: biblioteca do javascript que permite simplificar a sintaxe

//JavaScript - ID
//document.getElementById("nomeID");

//JQuerry - ID 
//$("#nomeID");

//JavaScript - Classe 
//document.getElementsByClassName("nomeCLasse");

//JQuerry - Classe 
 //$(".nomeClasse");

 //JavaScript - Tag 
//document.getElementsByTagName("p");

//JQuerry
//$("p");

//Seleciona todos os elementos de um HTML
//$("*");

//Seleciona o primeiro elemento <p></p>
//$("p:first");

//Seleciona o ultimo elemento <p></p>
//$("p:last");

//Seleciona todos os elementos com o atributo disabled
//$("[disabled]")

//Combinando seleções 

//JS 
//document.getElementById("nomeId").getElementsByTagName('p');

//QJ
//$("#nomeId p");


//Programação orientada a objetos 

var nome = "zezinho"
var sobrenome = "Silva"
var idade = 12;

var pessoa = {nome: "zezinho" , sobrenome: "Silva" , idade: 12}

var novaPessoa = {
    nome: "Zezinha",
    sobrenome:"Silvio",
    idade:21,

    andar: function() {
       // alert( this.nome +' esta andando, e tem ' + this.idade+ " anos ")
    }

}

novaPessoa.andar();

//METODO CONSTRUTOR

function people(_nome,_sobrenome,_idade){
    this.nome = _nome;
    this.sobrenome = _sobrenome;
    this.idade = _idade;
}

var pessoa1 = new people("Julia","Amaral",13);


function Item(nome,quantidade,preco){
    this.nomeItem = nome;
    this.quantidadeItem = quantidade;
    this.precoItem = preco;
}

var itens = []

function adicionarItem(){
    var nomeItemnovo = $("#nomeitemID").val();
    var quantidadeNovo = $("#quantidadeID").val();
    var precoNovo = $("#precoID").val();

    var novoItem = new Item(nomeItemnovo,quantidadeNovo,precoNovo)

    itens.push(novoItem);
    console.log(itens);
    atualizaTabela(novoItem);



}

function atualizaTabela(item){
    var htmlFinal = "<tr>"


    htmlFinal += "<td>" + item.nomeItem + "</td>";
    htmlFinal += "<td>" + item.quantidadeItem + "</td>";
    htmlFinal += "<td>" + item.precoItem + "</td>";

    htmlFinal += "</tr>";

    $("#tabelaItems").append(htmlFinal);


    
}





