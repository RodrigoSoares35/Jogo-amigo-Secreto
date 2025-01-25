//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Variavel para salvar o nomes dos amigos.
let amigos = [];
let entrada;

// Botão 'Adicionar' ativado, recebe o nome do campo e salva no array.
function adicionarAmigo(){
    // Caixa de Alerta se o campo estiver vazio
    if(entrada = document.querySelector('input').value == ""){
      alert("Por favor insira um nome.");
       }
   
    // Caso o campo não esteja vazio.
    
    else{
        entrada = document.querySelector('input').value;

        // Verifica se o nome já está na lista.
        if(amigos.includes(entrada)){
            alert("Esse nome já conta na Lista, informe outro nome.");
            document.querySelector('input').value = '';
            return;
        }
        amigos.push(entrada);
        console.log({amigos}); 

        // Exibir o nome na tela.
        let mostrarNome = document.querySelector('h3');
        mostrarNome.innerHTML = "Lista de Amigos:"+ "<br>" + amigos.join( '<br>' );
        
        // Limpa o campo nom do amigo.
        document.querySelector('input').value = '';
    }
};  

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia.");
        return;
    }

    let sorteioNome = Math.floor(Math.random() * amigos.length);

    let NomeEscolhido = amigos[sorteioNome];

    let mostrarNome = document.querySelector('h4');
        mostrarNome.innerHTML = " Seu Amigo secreto é: " + NomeEscolhido;

};

