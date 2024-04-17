const joke = document.getElementById("joke");
const category = document.getElementById("category");
const API_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"; 

async function getjoke(url) {
    const response = await fetch(url);
    const data = await response.json();
    joke.innerHTML = data.joke;
    category.innerHTML = data.category;
}

getjoke(API_URL);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + joke.innerHTML, "Tweet Window", "width=600, height=300");
}
