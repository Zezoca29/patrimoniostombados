document.querySelectorAll('.item').forEach(item => {
    const expandButton = item.querySelector('.expand-btn');
    const moreInfo = item.querySelector('.more-info');

    expandButton.addEventListener('click', () => {
        // Remove a classe 'expanded' de todos os itens
        document.querySelectorAll('.item').forEach(i => {
            // Esconde todos os itens e redefine o botão
            i.querySelector('.expand-btn').style.display = 'inline'; // Mostra novamente o botão
            i.querySelector('.more-info').style.display = 'none'; // Esconde as informações
            i.classList.remove('expanded'); // Remove a classe 'expanded'
        });

        // Exibe o item clicado e altera a visibilidade do botão e informações
        item.style.display = 'block'; // Mostra o card do patrimônio
        moreInfo.style.display = 'block'; // Mostra o texto
        expandButton.style.display = 'none'; // Esconde o botão "Sobre o Patrimônio"
        item.classList.add('expanded'); // Adiciona a classe 'expanded' ao item clicado
    });
});

// Seleciona todos os botões de fechar
const closeButtons = document.querySelectorAll('.close-btn');

// Adiciona um evento de clique a cada botão de fechar
closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Impede que o clique no botão feche o item
        const item = button.closest('.item'); // Seleciona o card (item) pai
        item.style.display = 'none'; // Oculta o card

        // Garante que todos os cards voltem a ser exibidos
        document.querySelectorAll('.item').forEach(i => {
            i.style.display = 'block'; // Mostra todos os cards
            i.querySelector('.expand-btn').style.display = 'inline'; // Mostra novamente o botão
            i.querySelector('.more-info').style.display = 'none'; // Esconde as informações
            i.classList.remove('expanded'); // Remove a classe 'expanded'
        });
    });
});

// Inicialmente oculta todas as informações
document.querySelectorAll('.more-info').forEach(info => {
    info.style.display = 'none'; // Garante que todas as informações comecem ocultas
});
