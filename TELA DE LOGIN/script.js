document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
    const loginForm = document.getElementById('loginForm');

    // Função para realizar o login e mostrar a tela de sorteio
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        sessionStorage.setItem('nomeCategoria', username);
        showTab('sorteioTab');
    });

    // Função para mostrar a aba desejada e executar a lógica correspondente
    function showTab(tabId) {
        tabs.forEach(tab => tab.style.display = 'none');
        document.getElementById(tabId).style.display = 'block';

        if (tabId === 'sorteioTab') {
            sortearLetra();
        } else if (tabId === 'regrasTab') {
            exibirRegras();
        }
    }

    // Função para sortear uma letra e exibi-la na tela de sorteio
    function sortearLetra() {
        const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const letraSorteada = letras[Math.floor(Math.random() * letras.length)];
        console.log(letraSorteada);
        document.getElementById('letraSorteada').textContent = letraSorteada;
        sessionStorage.setItem('letraSorteada', letraSorteada);
    }

    // Função para exibir as regras do jogo com a letra sorteada e o nome da categoria
    function exibirRegras() {
        const letraSorteada = sessionStorage.getItem('letraSorteada');
        const nomeCategoria = sessionStorage.getItem('nomeCategoria');
        const frutaCategoria = sessionStorage.getItem('frutaCategoria');
        const carroCategoria = sessionStorage.getItem('carroCategoria');

        document.getElementById('categoria').textContent = letraSorteada;
        document.getElementById('nomeCategoria').textContent = nomeCategoria;
        document.getElementById('cepCategoria').textContent = sessionStorage.getItem('cepCategoria');
        document.getElementById('sograCategoria').textContent = sessionStorage.getItem('sograCategoria');
        document.getElementById('frutaCategoria').textContent = frutaCategoria;
        document.getElementById('carroCategoria').textContent = carroCategoria;
        // Adicione aqui o código para as outras categorias (CEP, Minha Sogra é, etc.)
    }

    // Mostrar a tela de login inicialmente
    showTab('loginTab');
});
