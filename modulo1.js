var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function informacaoDev(endereco) {
    console.log("O usuário mora em "+ endereco.cidade + "/"+ endereco.uf+" , no bairro"+ endereco.bairro+", na rua " +  endereco.rua +" com nº "+endereco.numero+".")
}

var quantidadeQuestoes = 10;
var quantidadeErros = 6; 
var quantidadeAcertos = quantidadeQuestoes - quantidadeErros;

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

var generoInformado = retornaGenero('NB');
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

var identidadeGeneroInformado = identidadeGenero('C');

var nome = 'Yanka', sobrenome = 'Santos', idade = 23;

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

var curso = 'Sistemas de Informação';
var cursando = (curso === 'Sistemas de Informação') ? 'Área de TI' : 'Outra área';
console.log(cursando);

for(var index = 0; index <= 100; index ++){
    console.log('O index está na posição ' + index);
}

var ponteiro = 2020;
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