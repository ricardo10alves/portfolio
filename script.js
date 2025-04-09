// Inicializa AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
});

// Aplica automaticamente o modo escuro
document.body.classList.add('dark-mode');  // Sempre aplica o modo escuro

// Modal
const projects = document.querySelectorAll('.card-projeto');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTechnologies = document.getElementById('modal-technologies');

// Informações dos projetos
const projectDetails = [
    {
        title: "Listagem de Cafés",
        description: "Esta é uma aplicação simples, onde os utilizadores podem explorar uma coleção de produtos de café. A app exibe informações detalhadas sobre cada café, incluindo uma imagem, descrição, preço e se está disponível ou esgotado. O utilizador pode filtrar a lista de cafés para visualizar todos os produtos ou apenas os disponíveis. Cada café possui uma avaliação e o número de votos que recebeu, exibidos com um sistema de estrelas.",
        tecnologias: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://github.com/ricardo10alves/coffee-listing-app" // Link do GitHub
    },
    {
        title: "Projeto 2",
        description: "Descrição detalhada do Projeto 2",
        tecnologias: ["PHP", "MySQL", "Bootstrap"],
        link: "https://github.com/seu-usuario/projeto2" // Link do GitHub
    },
    {
        title: "Meu Portfólio",
        description: "Criação de um portfólio do zero.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/seu-usuario/projeto3" // Link do GitHub
    }
];

// Abre o modal com as informações do projeto
projects.forEach((project, index) => {
    project.addEventListener('click', () => {
        modal.classList.add('show');  // Exibe o modal
        modalTitle.textContent = projectDetails[index].title;
        modalDescription.textContent = projectDetails[index].description;

        // Limpar as tecnologias antigas antes de adicionar as novas
        modalTechnologies.innerHTML = '';  // Limpar lista de tecnologias

        // Adicionar tecnologias à lista do modal
        projectDetails[index].tecnologias.forEach(tech => {
            const listItem = document.createElement('li');
            listItem.textContent = tech;
            modalTechnologies.appendChild(listItem);
        });

        // Limpar o botão do GitHub anterior (se houver)
        const existingButton = modal.querySelector('.github-button');
        if (existingButton) {
            existingButton.remove();
        }

        // Criar o botão com o ícone do GitHub
        const githubButton = document.createElement('a');
        githubButton.href = projectDetails[index].link;
        githubButton.target = "_blank"; // Abre o link em uma nova aba
        githubButton.classList.add('github-button'); // Adiciona uma classe CSS para estilizar

        // Criar o ícone do GitHub com Font Awesome
        const icon = document.createElement('i');
        icon.classList.add('fab', 'fa-github'); // Classe do ícone do GitHub

        // Adicionar o ícone ao botão
        githubButton.appendChild(icon);

        // Adicionar o botão ao modal
        const modalContent = modal.querySelector('.modal-content');
        modalContent.appendChild(githubButton);
    });
});

// Fecha o modal se o usuário clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');  // Esconde o modal
    }
});