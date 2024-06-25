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
    $.get("/https://swapi.dev/api/people"+ Math.floor(Math.random()*9) + 1 ,preencherLabelPersonagem);

 }


 function preencherLabelPersonagem(data){
    console.log(data.name);

    $("#personagemAleatorioId").text(data.name);
 }



 function buscarFilmePorPersonagem(){
    var nome= $("#buscaFilmePorNomePersonagem").val();
    $.get("https://swapi.dev/api/people/?search="+nome,popularTabela)
 }

 function popularTabela(data){
    console.log(data.results[0].name);
    $("#labelFilmeDeId").text(data.results[0].name);
 }

