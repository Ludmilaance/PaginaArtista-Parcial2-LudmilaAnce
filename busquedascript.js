document.getElementById('search-btn').addEventListener('click', () => {
    const artist = document.getElementById('artist').value;
    const song = document.getElementById('song').value;

    if (artist && song) {
        fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
            .then(response => {
                if (!response.ok) throw new Error('Canción no encontrada');
                return response.json();
            })
            .then(data => {
                const { lyrics } = data;
                document.getElementById('letra').innerHTML = lyrics || "No se encontró la letra";
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Canción no encontrada");
            });
    } else {
        alert("Por favor, completa los campos");
    }
});

