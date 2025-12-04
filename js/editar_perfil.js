// Preview da foto de perfil
document.getElementById('photoUpload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profilePhoto').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Máscara para CPF
document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = value;
    }
});

// Máscara para CEP
document.getElementById('cep').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = value;
    }
});

// Máscara para Telefone
document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = value;
    }
});

// Adicionar habilidade
function addSkill() {
    const input = document.getElementById('skillInput');
    const skillText = input.value.trim();

    if (skillText) {
        const container = document.getElementById('skillsContainer');
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        skillTag.innerHTML = `
                    ${skillText}
                    <button onclick="this.parentElement.remove()">×</button>
                `;
        container.appendChild(skillTag);
        input.value = '';
    }
}

// Permitir adicionar habilidade com Enter
document.getElementById('skillInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addSkill();
    }
});

// Adicionar experiência
function addExperience() {
    const container = document.getElementById('experienceContainer');
    const newExp = document.createElement('div');
    newExp.className = 'experience-item';
    newExp.innerHTML = `
                    <div class="form-grid">
                        <div class="form-group">
                            <label>Área de atuação</label>
                            <input type="text" class="empresa" placeholder="Nome da empresa">
                        </div>
                        <div class="form-group">
                            <label>Cargo Atual</label>
                            <input type="text" class="cargo" placeholder="Seu cargo">
                        </div>
                        <div class="form-group full-width">

                        </div>
                        <div class="form-group full-width">
                            <label>Descrição das Atividades</label>
                            <textarea class="atividades"
                                placeholder="Descreva suas principais responsabilidades e conquistas..."></textarea>
                        </div>
                        <div class="form-group full-width">
                            <label>Objetivo Profissional</label>
                            <textarea class="atividades"
                                placeholder="Descreva suas principais responsabilidades e conquistas..."></textarea>
                        </div>
                <button type="button" class="btn-remove" onclick="this.parentElement.remove()">🗑️ Remover</button>
            `;
    container.appendChild(newExp);
}

// Adicionar formação
function addEducation() {
    const container = document.getElementById('educationContainer');
    const newEdu = document.createElement('div');
    newEdu.className = 'education-item';
    newEdu.innerHTML = `
                <div class="form-grid">
                    <div class="form-group">
                        <label>Nível de Escolaridade</label>
                        <select class="escolaridade">
                            <option value="">Selecione</option>
                            <option value="fundamental">Ensino Fundamental</option>
                            <option value="medio">Ensino Médio</option>
                            <option value="tecnico">Técnico</option>
                            <option value="superior">Superior</option>
                            <option value="pos">Pós-graduação</option>
                            <option value="mestrado">Mestrado</option>
                            <option value="doutorado">Doutorado</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Situação</label>
                        <select class="situacao">
                            <option value="cursando">Cursando</option>
                            <option value="completo">Completo</option>
                            <option value="incompleto">Incompleto</option>
                            <option value="trancado">Trancado</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Instituição</label>
                        <input type="text" class="instituicao" placeholder="Nome da instituição">
                    </div>
                    <div class="form-group">
                        <label>Curso</label>
                        <input type="text" class="curso" placeholder="Nome do curso">
                    </div>
                    <div class="form-group">
                        <label>Ano de Início</label>
                        <input type="number" class="anoInicio" placeholder="2020">
                    </div>
                    <div class="form-group">
                        <label>Ano de Conclusão</label>
                        <input type="number" class="anoConclusao" placeholder="2024">
                    </div>
                </div>
                <button type="button" class="btn-remove" onclick="this.parentElement.remove()">🗑️ Remover</button>
            `;
    container.appendChild(newEdu);
}

// Submit do formulário
document.getElementById('profileForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Aqui você faria o envio real dos dados para o servidor
    const formData = {
        nomeCompleto: document.getElementById('nomeCompleto').value,
        email: document.getElementById('email').value,
        // ... outros campos
    };

    console.log('Dados do perfil:', formData);

    // Mostra mensagem de sucesso
    const successMsg = document.getElementById('successMessage');
    successMsg.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 3000);
});

// Cancelar edição
function cancelEdit() {
    if (confirm('Deseja realmente cancelar? As alterações não salvas serão perdidas.')) {
        window.location.reload();
    }
}







// Theme toggle
const toggle = document.getElementById('toggle');
const body = document.body; // DECLARAR APENAS UMA VEZ

// Carregar preferência salva
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
    toggle.checked = true;
}

toggle.addEventListener('change', () => {
    body.classList.toggle('light');
    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
});

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
// REMOVER: const body = document.body; (JÁ FOI DECLARADO ACIMA)

// Criar overlay
const overlay = document.createElement('div');
overlay.classList.add('menu-overlay');
body.appendChild(overlay);

// Adicionar classe mobile-menu aos links em telas pequenas
function checkScreenSize() {
    if (window.innerWidth <= 768) {
        navLinks.classList.add('mobile-menu');
    } else {
        navLinks.classList.remove('mobile-menu', 'active');
        menuToggle.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    }
}

// Verificar tamanho inicial
checkScreenSize();

// Verificar ao redimensionar
window.addEventListener('resize', checkScreenSize);

// Toggle menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Prevenir scroll quando menu aberto
    if (navLinks.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

// Fechar menu ao clicar no overlay
overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflow = '';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
        }
    });
});