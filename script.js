let usuarios = [];
function  cadastrar() {
    const nome = document.getElementById('nome');
    const idade = document.getElementById('idade')
    const valoresUsuario = document.getElementById('valoresUsuarios')

    let pessoa = nome.value + " " + idade.value;
    usuarios.push(pessoa);
    
    let conteudo = "<ul>";

    for(let usuario of usuarios){
        conteudo += `<li>${usuario}</li>`;

    }
    conteudo += "</ul>";

    valoresUsuario.innerHTML = conteudo;

    
} 







