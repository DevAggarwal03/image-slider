let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
let imagesDiv = document.getElementById("images");
let currImg = 0;


rightArrow.addEventListener('click', event => {
    let pic = document.getElementById("pic");
    currImg += 1;
    currImg = currImg % 4;
    pic.classList.add("slideleft")
    setTimeout(() => {
        imagesDiv.innerHTML = `<img id="pic" src="./images/${currImg}.jpg" alt="pic${currImg+1}">`;
    }, 900);
})

leftArrow.addEventListener('click', event => {
    if(currImg == 0){
        currImg = 3;
    }
    else{
        currImg -= 1;
    }
    currImg = currImg % 4;
    imagesDiv.innerHTML = `<img src="./images/${currImg}.jpg" alt="pic${currImg+1}">`;
})