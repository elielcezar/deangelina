function formLogin() {

    const formLogin = document.querySelector('form');

    if(formLogin){
        document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        const form = event.target;
        const formFields = form.elements;

        const user = formFields.nome.value;
        const pass = formFields.senha.value;

        const options = {
            method: 'POST',
            headers: {
                username: user
            }
        };
        fetch(`https://openapi.vnnox.com/v1/oauth/token?username=${user}&password=${pass}`, options)
        .then(r => r.json())
        .then(r => {                                
            console.log('O novo token é: '+r.data.token);
            sessionStorage.setItem('token', r.data.token);
            setTimeout("location.href = 'players.html';",1);
        }).catch(err => {
            console.error(err);
            setTimeout("location.href = 'index.html?erro=1';",1);
        });
        
    }, false); 
    }
}

formLogin();

