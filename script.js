// Alerta de boas-vindas ao carregar a página
window.onload = function() {
    alert("Bem-vinda ao site de Moda Feminina!");
};

// Função para salvar o nome da usuária no armazenamento local
function salvarNome() {
    const nome = document.getElementById("nome").value;
    localStorage.setItem("nomeUsuario", nome);
    alert("Nome salvo com sucesso!");
}
