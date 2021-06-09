//Randomizes the positions and sizes of the boxes that float in the background of the landing page

const boxContainer = document.querySelector('#box-area');
const boxes = boxContainer.children;

function setBoxZeroVars(){
    boxes[0].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeZero = Math.floor(Math.random()*180) + 20;
    boxes[0].style.width= sizeZero + "px";
    boxes[0].style.height= sizeZero + "px";

}
function setBoxOneVars(){
    boxes[1].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeOne = Math.floor(Math.random()*180) + 20;
    boxes[1].style.width= sizeOne + "px";
    boxes[1].style.height= sizeOne + "px";

}

function setBoxTwoVars(){
    boxes[2].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeTwo = Math.floor(Math.random()*180) + 20;
    boxes[2].style.width= sizeTwo + "px";
    boxes[2].style.height= sizeTwo + "px";

}

function setBoxThreeVars(){
    boxes[3].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeThree = Math.floor(Math.random()*180) + 20;
    boxes[3].style.width= sizeThree + "px";
    boxes[3].style.height= sizeThree + "px";

}

function setBoxFourVars(){
    boxes[4].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeFur = Math.floor(Math.random()*180) + 20;
    boxes[4].style.width= sizeFour + "px";
    boxes[4].style.height= sizeFour + "px";

}

function setBoxFiveVars(){
    boxes[5].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeFive = Math.floor(Math.random()*180) + 20;
    boxes[5].style.width= sizeFive + "px";
    boxes[5].style.height= sizeFive + "px";

}

function setBoxSixVars(){
    boxes[6].style.left = Math.floor(Math.random() * 100) + "%";
    const sizeSix = Math.floor(Math.random()*180) + 20;
    boxes[6].style.width= sizeSix + "px";
    boxes[6].style.height= sizeSix + "px";

}



boxes[0].addEventListener("animationiteration", setBoxZeroVars);
boxes[1].addEventListener("animationiteration", setBoxOneVars);
boxes[2].addEventListener("animationiteration", setBoxTwoVars);
boxes[3].addEventListener("animationiteration", setBoxThreeVars);
boxes[4].addEventListener("animationiteration", setBoxFourVars);
boxes[5].addEventListener("animationiteration", setBoxFiveVars);
boxes[6].addEventListener("animationiteration", setBoxSixVars);


