const nomeAmigo = document.getElementById('amigo'); // Seleciona o elemento de entrada
let nome = ''; // Inicializa a variável nome

nomeAmigo.addEventListener('input', function() {  // Escuta o evento 'input'
  nome = nomeAmigo.value; // Atualiza 'nome' a cada alteração no input
  console.log("Nome digitado:", nome);
});

function adicionarAmigo () {
    console.log ('O botão foi clicado');
}