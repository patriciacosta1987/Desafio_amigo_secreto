let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo'); 
    let nomeAmigo = inputAmigo.value; 
    console.log(nomeAmigo);

    if (!nomeAmigo) { 
        alert("Digite o nome do amigo");
        return;
    }

    const caracteresPermitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZÀ-ú '-áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ";

    for (let i = 0; i < nomeAmigo.length; i++) { 
        if (caracteresPermitidos.indexOf(nomeAmigo[i]) === -1) { 
            alert(`O nome "${nomeAmigo}" contém caracteres inválidos. Por favor, insira um nome válido.`);
            return;
        }
    }

    amigos.push(nomeAmigo);    
    atualizarLista();
    inputAmigo.value = "";
    inputAmigo.focus();
}
function atualizarLista (){ 
    let listaAmigos = document.getElementById ('listaAmigos'); 
    listaAmigos.innerHTML = ""; // 
    for (let i = 0; i < amigos.length; i++){ 
        let item = document.createElement ('li'); 
        item.textContent = amigos[i]; 
        listaAmigos.appendChild (item) 
    }
}
function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Por favor, adicione pelo menos três amigos para o sorteio.");
        return; 
    }

    if (amigos.length === 0) { 
        alert("Adicione amigos antes de sortear");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; 
    let resultado = document.getElementById('resultado'); 
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`; 

    let limparLista = document.getElementById('listaAmigos'); 
    limparLista.innerHTML = ""; 
    amigos = []; 
}