/*
*   No HTML tinha essa div, por isso estavamos manipulando direto no index.html
*        <div id="app">
*            <input type="text" name="nome" />
*            <button class="botao">Adicionar</button>
*        </div>
*/

const inputElement =  document.querySelector('input[name=nome]');  
const inputElementAll =  document.querySelectorAll('input');  

console.log(inputElement);
console.log(inputElementAll);   

const inputElementValue = document.querySelector('input[name=nome]');
const btnElement = document.querySelector('button.botao');
btnElement.onclick = function(){
    alert('Botão clicado');

}    

const linkElement = document.createElement('a');
linkElement.setAttribute('href', 'https://github.com/yankasantos');
const textElement = document.createTextNode('Conheça o meu Github ^⁻^');
linkElement.appendChild(textElement);

const containerElement=document.querySelector('#app');
containerElement.appendChild(linkElement);
