const nomeAmigo = document.getElementById('amigo'); // Seleciona o elemento de entrada
let nome = ''; // Inicializa a variável nome

nomeAmigo.addEventListener('input', function() {
    nome = nomeAmigo.value;
  
    function contemCaracteresInvalidos(nome) {
      return !/^[a-zA-Z\s-]+$/.test(nome.trim());
    }
  
    if (nome.trim() === "" || contemCaracteresInvalidos(nome)) {
      alert("Nome inválido. Por favor, preencha o campo com um nome válido (apenas letras, espaços e hífens).");
      nomeAmigo.value = ''; // Limpa o campo de entrada (opcional)
      nome = ''; // Reseta a variável nome (opcional)
    } else {
      console.log("Nome digitado:", nome);
    }
  });

function adicionarAmigo () {
    console.log ('O botão foi clicado');
}