var listElement = document.querySelector('#app ul');
var inputElement =  document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = [
    'Almoçar com o time',
    'Fazer as atividades do inglês',
    'Assistir filme com Renato'
];

function renderToDos(){
    for(toDo of toDos){
        var toDoElement = document.createElement('li');
        var toDoTesxtElement = document.createTextNode(toDo);

        toDoElement.appendChild(toDoTesxtElement);
        listElement.appendChild(toDoElement);
    }
}
renderToDos();