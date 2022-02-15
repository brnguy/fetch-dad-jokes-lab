const fetchJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
        }
    })
    .then(fetchObj => fetchObj.json())
    .then((jsonData) => {
        addJokesToDom(jsonData)
        console.log(jsonData)
    })
    .catch(err => console.log('Error fetching data: ', err))
}

const addJokesToDom = (dadJoke) => {
    while(joke.firstChild) {
        joke.firstChild.remove()
    }
    let newJoke = document.createElement('p')
    let jokeImg = document.createElement('img')
    newJoke.textContent = dadJoke.joke
    jokeImg.src = `https://icanhazdadjoke.com/j/${dadJoke.id}.png`
    joke.appendChild(newJoke)
    joke.appendChild(jokeImg)
}

 document.querySelector('#newJoke').addEventListener('click', () => {
    fetchJoke()
})
