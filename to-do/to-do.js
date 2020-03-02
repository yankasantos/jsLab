var listElement = document.querySelector('#app ul');
var inputElement =  document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('list_toDos')) || [];

function renderToDos(){
    listElement.innerHTML = '';
    for(toDo of toDos){
        var toDoElement = document.createElement('li');
        var toDoTesxtElement = document.createTextNode(toDo);
        var linkElement = document.createElement('a');
        
        
        linkElement.setAttribute('href', '#');
        linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        
        var getNodeList = toDos.indexOf(toDo);
        linkElement.setAttribute('onclick', 'deleteToDo(' + getNodeList + ')')

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
    saveToStorage();
}

buttonElement.onclick = addToDo;

function deleteToDo(getNodeList){
    toDos.splice(getNodeList, 1);
    renderToDos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_toDos', JSON.stringify(toDos));
}