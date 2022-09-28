function llamarAPI() {


    const url = "https://api.github.com/search/repositories?q=DOM";


    const req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (req.readyState === req.DONE) {
            if (req.status === 200) {

                const value = JSON.parse(req.responseText);
                document.getElementById('lista').innerHTML='';
                document.getElementById('lista').style.backgroundColor = "white";
                if (value.items == 0) {
                    alert('No se encontraron resultados');
                } else {
                    for (let i of value.items) {

                        document.getElementById('lista').innerHTML += `
                        <p> ID: ${i.id}<br>Nombre: ${i.name}<br>URL: ${i.html_url}</p>
                        `

                    }
                }

            } else {
                document.getElementById('lista').style.backgroundColor = "red";
                document.getElementById('lista').innerHTML = 'Error de conexión';
            }
        }

    };
    req.open("GET", url);
    req.send();

};
function convertir() {


    const url = "https://api.github.com/search/repositories?q=DOM";


    const req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (req.readyState === req.DONE) {
            if (req.status === 200) {

                const value = JSON.parse(req.responseText);
                document.getElementById('repo').innerHTML = `<tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>URL</th>
            </tr>`;
                document.getElementById('repo').style.backgroundColor = "white";
                if (value.items == 0) {
                    alert('No se encontraron resultados');
                } else {
                    for (let i of value.items) {
                        const nuevaLinea = document.createElement("tr");
                        const columnaID = document.createElement("td");
                        const infoID = document.createTextNode(i.id);
                        columnaID.appendChild(infoID);
                        const columnaName = document.createElement("td");
                        const infoName = document.createTextNode(i.name);
                        columnaName.appendChild(infoName);
                        const columnaURL = document.createElement("td");
                        const infoURL = document.createTextNode(i.html_url);
                        columnaURL.appendChild(infoURL);
                        nuevaLinea.appendChild(columnaID);
                        nuevaLinea.appendChild(columnaName);
                        nuevaLinea.appendChild(columnaURL);

                        document.getElementById('repo').appendChild(nuevaLinea);

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