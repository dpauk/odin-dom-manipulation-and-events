const container = document.querySelector('#container');

const redText = document.createElement('p');
redText.textContent = "Hey I'm red";
redText.style.cssText = "color: red;"

container.appendChild(redText);

const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.cssText = "color: blue;";

container.appendChild(blueH3);

const newDiv = document.createElement('div');
newDiv.classList.add('content');
newDiv.style.cssText = "border: 10px solid black; background-color: pink;"

const divH1 = document.createElement('h1');
divH1.textContent = "I'm in a div";
newDiv.appendChild(divH1);

const meToo = document.createElement('p');
meToo.textContent = "ME TOO!"
newDiv.appendChild(meToo);

container.appendChild(newDiv);