const img = document.getElementById('img');

function randomCat() { fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => {
        console.log(res);
        if (res.ok) {
            res.json().then(data => {
                img.src = data[0].url
            })
        } else {
            console.log('ERREUR');
            document.getElementById('erreur').innerHTML = "Erreur"
        }
    })
}

const reload = document.getElementById('button');

reload.addEventListener('click', event => {
    randomCat();
});