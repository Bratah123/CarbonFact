function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let getQuote = getRandomInt(2);

document.getElementById("quote").innerHTML = getQuote;