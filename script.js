// const nomes = "Gabriel Pereira Miranda";
// const verificar = nomes.split(' ');
// console.log(verificar.length)

 

let pessoas = [];

function cadastrar() {
    const nome = document.getElementById('nome');
    const idade = document.getElementById('idade');
    const valoresUsuarios = document.getElementById('valoresUsuarios');


    nome.addEventListener('keypress', function(e){
        const keyCode = (e.keyCode ? e.keyCode : e.which);

        if(keyCode > 47 && keyCode < 58) {
            e.preventDefault();
        }
    })

    if( nome.value.length < 3 ){
        alert('O nome não pode conter menos que 3 letras'); 
        return;
    }

    

    if(idade.value < 16){
        alert("Só pode se cadastrar maiores de 16 anos");
        return;
    }
    

    const nomes = nome.value.split(' ');

    for( let umNome of nomes){
        if( umNome.length < 3) {
            alert(`O nome ${umNome} deve ter mais de 3 letras`);
            return;
        }
    }

    if( nomes.length < 2 ) {
        alert('Precisa do primeiro e segundo nome'); 
        return;        
    }   
    

    let cadastros = nome.value + " " + idade.value;
    pessoas.push(cadastros)

    let conteudo = "<ul>";

    for(let pessoa of pessoas) {
       conteudo += `<li>${pessoa}</li> `;
    }
    conteudo += "</ul>";

    valoresUsuarios.innerHTML = conteudo;
}



