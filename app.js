let amigos = [];

function adicionarAmigo(){
    let inputAmigo = document.getElementById ('amigo');
    let nomeAmigo = inputAmigo.value;
    console.log (nomeAmigo);

        if (!nomeAmigo) {
            alert("Digite o nome do amigo");
            return;
        }
            amigos.push(nomeAmigo);
            inputAmigo.value = "";
            inputAmigo.focus ();
    }

    