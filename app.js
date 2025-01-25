//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Variavel para salvar o nomes dos amigos.
let amigos = [];
let entrada;

// Botão 'Adicionar' ativado, recebe o nome do campo e salva no array.
function adicionarAmigo(){
    if(entrada = document.querySelector('input').value == ""){
     alert("Informe o nome de um Amigo");

    }
    else{
         entrada = document.querySelector('input').value;
        amigos.push(entrada);
        console.log({amigos}); 
    
        let mostrarNome = document.querySelector('h3');
        mostrarNome.innerHTML = "Lista de Amigos: " + amigos.join( '/' );
        document.querySelector('input').value = '';
    


    }
   
};  


function mostrarNome(){
    
}

