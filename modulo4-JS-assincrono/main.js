var myFirstPromise= function(){
    return new Promise(function(resolve, reject){

        var requestGithubUser = new XMLHttpRequest();

        requestGithubUser.open('GET', 'https://api.github.com/users/yankasantos');
        requestGithubUser.send(null);

        requestGithubUser.onreadystatechange = function(){
            if(requestGithubUser.readyState === 4){
                if(requestGithubUser.status ===200){
                resolve(JSON.parse(requestGithubUser.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

myFirstPromise()
    .then(function(response){
        console.log(response);
    })


    .catch(function(error){
        console.warn(error); 
    });


