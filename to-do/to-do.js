var listElement = document.querySelector('#app ul');
var inputElement =  document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = [
    'Almoçar com o time',
    'Fazer as atividades do inglês',
    'Assistir filme com Renato'
];

function renderToDos(){
    listElement.innerHTML = '';
    for(toDo of toDos){
        var toDoElement = document.createElement('li');
        var toDoTesxtElement = document.createTextNode(toDo);
        var linkElement = document.createElement('a');
        
        
        linkElement.setAttribute('href', '#');
        linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        
        var pas = toDos.indexOf(toDo);
        linkElement.setAttribute('onclick', 'deleteToDo(' + pas + ')')

        toDoElement.appendChild(toDoTesxtElement);
        toDoElement.appendChild(linkElement);
        listElement.appendChild(toDoElement);
    }
}
renderToDos();

function addToDo(){
    var toDoText = inputElement.value;
    toDos.push(toDoText);
    inputElement.value = '';
    renderToDos();
}

buttonElement.onclick = addToDo;

function deleteToDo(pas){
    toDos.splice(pas,1);
    renderToDos();
}