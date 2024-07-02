// API - Application Programing Interface
 //Interface de Programação de Aplicações

 //REST - Representational State Transfer
 //Transferencia de Estado Representacional

 //Recursos 
 //As informaçoes que a API te da 

 //Manipulações
 // - GET acessar
 // - POST criar
 // - PUT atualizar
 // - DELETE apagar 

 //Status Respostas 

 //100- Informaçoes Gerais 
 //200- Sucesso;
 //300-Redirecionamento
 //400-Erro no Cliente 
 //500-Erro no Servidor

 //Jason é um formato para transferencia de dados de maneira leve

 //AJAX - recurso que permite enviar requisições

 //EX: 
 //$.get(URL,funcao_callback)
 //$.post(URL,data,funcao_callback)

 $("#botaoBuscaPersonagem").click(buscarPersonagemAleatorio); 

 function buscarPersonagemAleatorio(){
   console.log(Math.floor(Math.random()*9) + 1 )
    $.get("https://swapi.dev/api/people/"+ (Math.floor(Math.random()*9)+1)  ,preencherLabelPersonagem);

 }


 function preencherLabelPersonagem(data){


    $("#personagemAleatorioId").text(data.name);
 }


 $("#botaoBuscarFilmeId").click(buscarFilmePorPersonagem)


 function buscarFilmePorPersonagem(){
    var nome= $("#buscarFilmePorNomePersonagem").val();
    
    $.get("https://swapi.dev/api/people/?search="+nome,popularTabela)
 }

 function popularTabela(data){
    
    $("#labelFilmeId").text(data.results[0].name);

   $("#tabelaFilmesId").find("tr:gt(0)").remove();
    
    for (var i = 0; i < data.results[0].films.length; i++){
      $.get(data.results[0].films[i],criaLinha);
    }
 }


 function criaLinha(data){
   console.log(data.title)
   var htmlFinal = 
   "<tr><td>" + data.title + "</td>" + 
   "<td>" + data.episode_id + "</td>"+
   "<td>" + data.director + "</td></tr>";

   $("#tabelaFilmesId").append(htmlFinal)

 }
