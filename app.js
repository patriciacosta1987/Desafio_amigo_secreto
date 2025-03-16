let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo'); // Pega o input de amigo no HTML
    let nomeAmigo = inputAmigo.value; // Pega o valor do input no HTML
    console.log(nomeAmigo);

    if (!nomeAmigo) { // Verifica se o campo está vazio
        alert("Digite o nome do amigo");
        return;
    }

    const caracteresPermitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZÀ-ú '-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ";

    for (let i = 0; i < nomeAmigo.length; i++) { // Iterar sobre o nomeAmigo atual
        if (caracteresPermitidos.indexOf(nomeAmigo[i]) === -1) { // Verifica se o caractere atual não está na lista de caracteres permitidos
            alert(`O nome "${nomeAmigo}" contém caracteres inválidos. Por favor, insira um nome válido.`);
            return;
        }
    }

    amigos.push(nomeAmigo); // Adiciona o nome do amigo ao array    
    inputAmigo.focus(); // Coloca o foco no input
    atualizarLista();// Atualiza a lista de amigos
}
function atualizarLista (){ // Função para atualizar a lista de amigos
    let listaAmigos = document.getElementById ('listaAmigos'); // Pega a lista de amigos
    listaAmigos.innerHTML = ""; // Limpa a lista de amigos
    for (let i = 0; i < amigos.length; i++){ // Itera sobre o array de amigos
        let item = document.createElement ('li'); // Cria um elemento li
        item.textContent = amigos[i]; // Adiciona o nome do amigo ao elemento li
        listaAmigos.appendChild (item) // Adiciona o elemento li à lista de amigos
    }
}
function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Por favor, adicione pelo menos três amigos para o sorteio.");
        return; // Impede o sorteio se não houver amigos suficientes
    }

    if (amigos.length === 0) { // Mantive essa verificação para o caso de a lista estar vazia
        alert("Adicione amigos antes de sortear");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Sorteia um amigo
    let resultado = document.getElementById('resultado'); // Pega o elemento de resultado no HTML
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`; // Exibe o amigo sorteado no HTML

    let limparLista = document.getElementById('listaAmigos'); // Pega a lista de amigos no HTML
    limparLista.innerHTML = ""; // Limpa a lista de amigos no HTML
    amigos = []; // Limpa o array de amigos
}