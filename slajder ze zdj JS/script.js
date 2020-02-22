let activeElement = 0;

const colorHtml = document.querySelector('.color');
const grayHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const greyImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const names = ['Anna Baugart', 'MArek Kondrat', 'Tomasz Frex'];
const profesions = ['Programista JS', 'Programista WS', 'Opek'];

function changeElement(){
    activeElement++;
    if (activeElement == 3) { 
        activeElement = 0;}
    colorHtml.src = colorImages[activeElement];
    grayHtml.src = greyImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = profesions[activeElement];

}
setInterval(changeElement, 4000);