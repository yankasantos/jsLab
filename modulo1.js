const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function informacaoDev(endereco) {
    console.log("O usuário mora em "+ endereco.cidade + "/"+ endereco.uf+" , no bairro"+ endereco.bairro+", na rua " +  endereco.rua +" com nº "+endereco.numero+".")
}

const quantidadeQuestoes = 10;
const quantidadeErros = 6; 
const quantidadeAcertos = quantidadeQuestoes - quantidadeErros;

function notaFinal(){
    console.log("Nota final " + quantidadeAcertos);
}


function retornaGenero(genero){
    if(genero ==='M'){
        return 'Masculino';                    
    } else if(genero === 'F'){
        return 'Feminino';
    } else if(genero === 'MT'){
        return 'Mulher Trans';
    } else if(genero === 'HT'){
        return 'Homem Trans';
    } else if(genero === 'NB'){
        return 'Não-binário'
    } else{
        return'Outro';
    }
}            

const generoInformado = retornaGenero('NB');
console.log(retornaGenero);

function identidadeGenero(idGenero){
    switch(idGenero){
        case 'C': 
            return 'Cisgênero';
        case 'A' :
            return 'Agênero';
        case 'F' :
            return 'Fluido';
        case 'T' : 
            return 'Transgênero';
        case 'N' :
            return 'Não-binária';
        default :
            return 'Outros';
    }
}

const identidadeGeneroInformado = identidadeGenero('C');

const nome = 'Yanka', sobrenome = 'Santos', idade = 23;

function dadosPessoais(nome, sobrenome,idade){
    if(nome ==='Renato' && idade === 23){
    
    console.log('Nome está diferente');

    }else if(nome==='Yanka' && sobrenome ==='Santos'){
        console.log('informações já estão registrada');
    
    }else if(name==='Yanka' && sobrenome ==='Santos' ||nome ==='Yanka' && sobrenome ==='Lelis'){
        console.log('Yanka se casou!');
    }else{
        console.log('Dados incorretos');
    }

}

const curso = 'Sistemas de Informação';
const cursando = (curso === 'Sistemas de Informação') ? 'Área de TI' : 'Outra área';
console.log(cursando);

for(let index = 0; index <= 100; index ++){
    console.log('O index está na posição ' + index);
}

const ponteiro = 2020;
while(ponteiro >10){
    console.log(ponteiro + ' o ponteiro é divisível por 5');
    ponteiro/=5;
}

function inLove(){
    console.log('Te amo mozinho <3');
}
setInterval(inLove,100000);

function playMusic(){
    //Música do Ed Sheeran - Give me love
    console.log('My, my, my, my, oh give me love');
}
setTimeout(playMusic,5000);
