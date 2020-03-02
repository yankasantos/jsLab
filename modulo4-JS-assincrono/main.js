var requestGithubUser = new XMLHttpRequest();

requestGithubUser.open('GET', 'https://api.github.com/users/yankasantos')
requestGithubUser.send(null);