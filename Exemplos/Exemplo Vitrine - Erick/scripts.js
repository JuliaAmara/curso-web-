document.addEventListener('DOMContentLoaded', () => { // Espera o conteúdo da página ser carregado
    const buttons = document.querySelectorAll('.add-to-cart'); // Seleciona todos os botões de adicionar ao carrinho
    
    buttons.forEach(button => { // Itera sobre cada botão
        button.addEventListener('click', () => { // Adiciona um evento de clique a cada botão
            alert('Produto adicionado ao carrinho!'); // Mostra um alerta quando o botão é clicado
        });
    });
});
