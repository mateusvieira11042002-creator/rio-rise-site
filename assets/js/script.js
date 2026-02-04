// ================================================
// ARQUIVO JAVASCRIPT PRINCIPAL
// ================================================

// Aguardar carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site carregado com sucesso!');
    
    // INICIALIZAR FUNCIONALIDADES
    initNavigation();
    initContactForm();
    initScrollEffects();
});

// ================================================
// NAVEGAÇÃO
// ================================================

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ================================================
// FORMULÁRIO DE CONTATO
// ================================================

function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pegar valores do formulário
            const nome = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const mensagem = this.querySelector('textarea').value;
            
            // Validação básica
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            // Aqui você pode adicionar lógica para enviar o formulário
            console.log('Formulário enviado:', {
                nome: nome,
                email: email,
                mensagem: mensagem
            });
            
            // Mostrar mensagem de sucesso
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            
            // Limpar formulário
            this.reset();
        });
    }
}

// ================================================
// EFEITOS DE SCROLL
// ================================================

function initScrollEffects() {
    // Adicionar animação quando elementos entram na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar cards de serviço
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// ================================================
// FUNÇÕES UTILITÁRIAS
// ================================================

/**
 * Enviar dados para um servidor
 * Exemplo: submitForm('/api/contact', formData)
 */
function submitForm(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sucesso:', data);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}

/**
 * Adicionar classe a um elemento
 */
function addClass(element, className) {
    element.classList.add(className);
}

/**
 * Remover classe de um elemento
 */
function removeClass(element, className) {
    element.classList.remove(className);
}

/**
 * Alternar classe de um elemento
 */
function toggleClass(element, className) {
    element.classList.toggle(className);
}

// ================================================
// EVENTOS GLOBAIS
// ================================================

// Detectar cliques fora de modais/menus
document.addEventListener('click', function(e) {
    // Adicionar lógica customizada aqui
});

// Detectar redimensionamento da janela
window.addEventListener('resize', function() {
    console.log('Janela redimensionada');
});
