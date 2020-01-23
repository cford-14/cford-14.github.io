//MOUSEENTRY and MOUSELEAVE to fade out and in
//fade focus handler item variable
let house = document.getElementById('housepic');
let key = document.getElementById('keypic');

//house.onmouseenter = function(){
  //  house.style.opacity='0.3'
//};

//fade focus handler function
let fadeOutHouse = () => {
    house.style.opacity='0.3'
};

let fadeInHouse = () => {
    house.style.opacity = 1
};

let fadeOutKey = () => {
    key.style.opacity='0.3'
};

let fadeInKey = () => {
    key.style.opacity = 1
};
//fade focus listener 
house.addEventListener('mouseenter', fadeOutHouse);
house.addEventListener('mouseleave', fadeInHouse);

key.addEventListener('mouseenter', fadeOutKey);
key.addEventListener('mouseleave', fadeInKey);


//CLICK ta change button text to ramdom number
//button onclick handler variable
const button = document.getElementById('button');

//button onclick text change handler
button.onclick = function(){
    if (button.innerHTML === 'Click for Referral Code') {
        button.innerHTML = Math.floor(Math.random()* 100000)
    }
};
//no listener needed

//MOUSEOVER to enlarge nav buttons
//handler variables
let homeButton = document.getElementById('homeButton');
let marketButton = document.getElementById('marketButton');
let aboutButton = document.getElementById('aboutButton');

//handler functions
let bolder = (event) => {
    event.target.style.fontSize = '2.4rem';
    event.target.style.color = 'hsl(16, 96%, 45%)';
}

let normal = (event) => {
    event.target.style.fontSize = '1.6rem';
    event.target.style.color = 'hsl(234, 58%, 24%)';
}

//listeners
homeButton.addEventListener('mouseenter', bolder);
homeButton.addEventListener('mouseleave', normal);

marketButton.addEventListener('mouseenter', bolder);
marketButton.addEventListener('mouseleave', normal);

aboutButton.addEventListener('mouseenter', bolder);
aboutButton.addEventListener('mouseleave', normal);