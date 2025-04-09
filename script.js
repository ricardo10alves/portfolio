// Inicializa AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
});

// Aplica automaticamente o modo escuro
document.body.classList.add('dark-mode');

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
        title: "Coffee Listing",
        description: "This is a simple app where users can explore a collection of coffee products. The app displays detailed information about each coffee, including an image, description, price, and whether it is available or out of stock. The user can filter the coffee list to view all products or only the available ones. Each coffee has a rating and the number of votes it has received, displayed with a star rating system.",
        tecnologias: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://github.com/ricardo10alves/coffee-listing-app" // Link do GitHub
    },
    {
        title: "Todo List",
        description: "This is a simple to-do list project developed with React, Zustand, and TypeScript. It allows users to add, delete, and mark tasks as completed, using the Zustand library for easy state management.",
        tecnologias: ["React", "TypeScript", "Zustand"],
        link: "https://github.com/ricardo10alves/todo-list" // Link do GitHub
    },
    {
        title: "Portfolio",
        description: "Built a personal portfolio from scratch.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/ricardo10alves/portfolio" // Link do GitHub
    }
];

// Abre o modal com as informações do projeto
projects.forEach((project, index) => {
    project.addEventListener('click', () => {
        modal.classList.add('show');  // Exibe o modal
        modalTitle.textContent = projectDetails[index].title;
        modalDescription.textContent = projectDetails[index].description;

        // Limpar as tecnologias antigas antes de adicionar as novas
        modalTechnologies.innerHTML = '';

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

// Fecha o modal se o utilizador clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');  // Esconde o modal
    }
});