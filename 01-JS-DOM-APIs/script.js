function llamarAPI() {
    const url = "https://api.chucknorris.io/jokes/random";
    const req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (req.readyState === req.DONE) {
            if (req.status === 200) {
                const value = JSON.parse(req.responseText);
                document.getElementById('mensaje-API').innerHTML = value.value;
            } else {
                document.getElementById('mensaje-API').style.backgroundColor = "red";
                document.getElementById('mensaje-API').innerHTML = 'Error de conexión';
            }
        }
    }
    req.open("GET", url);
    req.send();
};
function llamarGit(form) {

    const busqueda = form.campoBuscar.value;
    console.log(busqueda);
    const url = "https://api.github.com/search/repositories?q=" + busqueda;

    if (busqueda == '' || /\s/.test(busqueda)) {
        alert('Ingrese un valor válido para buscar');
    } else {
            const req = new XMLHttpRequest();

        req.onreadystatechange = function () {
            if (req.readyState === req.DONE) {
                if (req.status === 200) {

                    const value = JSON.parse(req.responseText);
                    document.getElementById('repo').innerHTML = '';
                    document.getElementById('repo').style.backgroundColor = "white";
                    if (value.items == 0) {
                        alert('No se encontraron resultados');
                    } else {
                        for (let i of value.items) {
                            document.getElementById('repo').innerHTML += (`
                    
                        <a class="link" href="${i.html_url}"><div class="item">ID: ${i.id}<br>Nombre: ${i.name}<br>URL: ${i.html_url}</div></a>
                    
                    `)
                        }
                    }

                } else {
                    document.getElementById('repo').style.backgroundColor = "red";
                    document.getElementById('repo').innerHTML = 'Error de conexión';
                }
            }
        
    };
    req.open("GET", url);
    req.send();
};
};



