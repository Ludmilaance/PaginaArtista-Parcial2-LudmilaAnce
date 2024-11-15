function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('Playlist').innerHTML = html;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar la página:', error);
        });
}


document.getElementById('Oktubre').addEventListener('click', function() {
    loadPage('oktubre.html');
});

document.getElementById('Porkorex').addEventListener('click', function() {
    loadPage('porkorex.html');
});

document.getElementById('eltesorodelosinocentes').addEventListener('click', function() {
    loadPage('eltesorodelosinocentes.html');
});







