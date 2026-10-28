// --- FUNÇÕES DO MODAL ---
function abrirModal() {
    document.getElementById('modal-nome').classList.add('ativo');
}

function fecharModal() {
    document.getElementById('modal-nome').classList.remove('ativo');
}

function salvarNomeEAvancar(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome-aluno').value;

    if (nome.trim() !== "") {
        // GUARDANDO O NOME PRA OUTRA PAGINA
        localStorage.setItem('nomeAluno', nome);
        // REDIRECIONANDO PARA O FORMS
        window.location.href = 'formulario.html';
    }
}

// MOSTRAR O NOME QUANDO CARREGAR A PAG
document.addEventListener('DOMContentLoaded', () => {
    const elementoNome = document.getElementById('nome-exibicao');
    const nomeSalvo = localStorage.getItem('nomeAluno');

    if (elementoNome && nomeSalvo) {
        elementoNome.innerText = `Aluno: ${nomeSalvo}`;
    }
});

function calcularMedia() {
    const inputNota1 = document.getElementById('nota1').value;
    const inputNota2 = document.getElementById('nota2').value;
    const elementoResultado = document.getElementById('resultado');

    if (inputNota1 === "" || inputNota2 === "") {
        elementoResultado.innerHTML = "<p style='color: red;'>Por favor, preencha ambas as notas.</p>";
        return;
    }

    const n1 = parseFloat(inputNota1);
    const n2 = parseFloat(inputNota2);

    const media = (n1 + n2) / 2;

    let status = "";
    let classeStatus = "";

    if (media >= 7.0) {
        status = "Aprovado";
        classeStatus = "aprovado";
    } else {
        status = "Reprovado";
        classeStatus = "reprovado";
    }

    elementoResultado.innerHTML = `
        <h3>Resultado:</h3>
        <p>A média é: <strong>${media.toFixed(2)}</strong></p>
        <p class="${classeStatus}">Situação: <strong>${status}</strong></p>
    `;
}