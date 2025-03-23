
document.addEventListener("DOMContentLoaded", () => {
    generatePlans();
    generateFaqs();
    setupMenuToggle();
    setupFaqToggle();
    setupLinks();
});

const CONFIG = {
    whatsappNumber: "+5588993409458",
    instagramLink: "https://www.instagram.com/ultralinkce/",
    plans: [
        {
            name: "Plano Família",
            price: "R$69.90/mês",
            speed: "300MB",
            id: "plan-one",
            text: "Oi, tenho interesse no Plano Família"
        },
        {
            name: "Plano Gamer",
            price: "R$79.90/mês",
            speed: "500MB",
            id: "plan-two",
            text: "Oi, tenho interesse no Plano Gamer"
        },
        {
            name: "Plano Empresa",
            price: "R$99.90/mês",
            speed: "700MB",
            id: "plan-three",
            text: "Oi, tenho interesse no Plano Empresa"
        }
    ],
    faqs: [
        {
            question: "Como faço para contratar um plano?",
            answer: "Para contratar um plano, basta clicar no botão 'Escolher Plano' e falar com um de nossos atendentes."
        },
        {
            question: "Posso cancelar meu plano a qualquer momento?",
            answer: "Sim, você pode cancelar seu plano a qualquer momento."
        },
        {
            question: "Quais formas de pagamento vocês aceitam?",
            answer: "Aceitamos pagamentos via cartão de crédito, boleto bancário e Pix."
        },
        {
            question: "A internet tem franquia de consumo?",
            answer: "Não, nossos planos oferecem internet ilimitada, sem franquia de dados."
        },
        {
            question: "Em quanto tempo a instalação é feita?",
            answer: "A instalação é realizada em até 3 dias úteis após a confirmação do pagamento."
        },
        {
            question: "O que acontece se eu atrasar o pagamento?",
            answer: "Caso o pagamento esteja em atraso, sua conexão pode ser suspensa até a regularização."
        },
        {
            question: "Preciso de um roteador para usar o serviço?",
            answer: "Sim, você pode utilizar um roteador próprio ou adquirir um conosco."
        },
        {
            question: "A conexão é estável para jogos online e streaming?",
            answer: "Sim, nossos planos oferecem baixa latência e alta velocidade para uma experiência fluida."
        },
        {
            question: "Há fidelidade nos planos?",
            answer: "Não exigimos fidelidade. Você pode cancelar a qualquer momento sem multas."
        },
        {
            question: "O suporte técnico está disponível em quais horários?",
            answer: "Nosso suporte técnico funciona 24 horas por dia, 7 dias por semana."
        }
    ]
};

function generatePlans() {
    const container = document.getElementById("plans-container");
    if (!container) return;

    container.innerHTML = CONFIG.plans.map(plan => `
        <div class="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 class="text-xl font-bold mb-4 text-white">${plan.name}</h3>
            <p class="text-white mb-4">${plan.price}</p>
            <ul class="text-white mb-4">
                <li><strong>${plan.speed}</strong></li>
            </ul>
            <a id="${plan.id}" target="_blank" class="bg-red-500 px-6 py-2 btn-rounded shadow-lg hover:bg-red-600">
                Escolher Plano
            </a>
        </div>
    `).join('');
}

function generateFaqs() {
    const container = document.getElementById("faqs-container");
    if (!container) return;

    container.innerHTML = CONFIG.faqs.map(faq => `
        <div class="faq-item">
            <h3 class="mb-4 font-bold cursor-pointer">${faq.question}</h3>
            <p class="hidden">${faq.answer}</p>
        </div>
    `).join('');
}

function setupMenuToggle() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (!menuBtn || !menu) return;

    menuBtn.addEventListener('click', () => {
        const isHidden = menu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', !isHidden);
    });
}

function setupFaqToggle() {
    document.querySelectorAll('.faq-item h3').forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            if (!content) return;

            document.querySelectorAll('.faq-item p').forEach(p => {
                if (p !== content) p.classList.add('hidden');
            });

            content.classList.toggle('hidden');
        });
    });
}

function setupLinks() {
    const whatsappLink = document.getElementById("whatsapp-link");
    const instagramLink = document.getElementById("instagram-link");

    if (whatsappLink) whatsappLink.href = `https://wa.me/${CONFIG.whatsappNumber}`;
    if (instagramLink) instagramLink.href = CONFIG.instagramLink;

    CONFIG.plans.forEach(plan => {
        const planElement = document.getElementById(plan.id);
        if (planElement) {
            planElement.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(plan.text)}`;
        }
    });
}