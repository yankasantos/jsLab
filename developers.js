//Desafio módulo 01
//#1
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
