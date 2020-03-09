var requestGithubUser = new XMLHttpRequest();

requestGithubUser.open('GET', 'https://api.github.com/users/yankasantos')
requestGithubUser.send(null);

requestGithubUser.onreadystatechange = function(){
    if(requestGithubUser.readyState === 4){
        console.log(JSON.parse(requestGithubUser.responseText));
    }
}