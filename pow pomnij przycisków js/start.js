const ButtBig = document.querySelector('.bigger');
const ButtSma = document.querySelector('.smaller');
const txte = document.querySelector('p');

let txtsize = 16;

function bigger() {
    txtsize++
    txte.style.fontSize = txtsize + 'px';
}

function smaller() {
    txtsize--
    txte.style.fontSize = txtsize + 'px';
}

ButtBig.addEventListener('click', bigger);
ButtSma.addEventListener('click', smaller);