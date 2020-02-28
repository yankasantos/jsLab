var inputElement =  document.querySelector('input[name=nome');  
var inputElementAll =  document.querySelectorAll('input');  

console.log(inputElement);
console.log(inputElementAll);   

var inputElementValue = document.querySelector('input[name=nome]');
var btnElement = document.querySelector('button.botao');
btnElement.onclick = function(){
    alert('Botão clicado');

}    

var linkElement = document.createElement('a');
linkElement.setAttribute('href', 'https://github.com/yankasantos');
var textElement = document.createTextNode('Conheça o meu Github ^⁻^');
linkElement.appendChild(textElement);

var containerElement=document.querySelector('#app');
containerElement.appendChild(linkElement);