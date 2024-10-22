const COLORS = {
    FIRST: { background: "blue", text: "white" },
    SECOND: { background: "green", text: "black" },
};

let clickStatus = {
    first: 0,
    second: 0,
};

function setStyle(element, colorScheme) 
{
    element.style.backgroundColor = colorScheme.background;
    element.style.color = colorScheme.text;
}

function changeFirstTextAndBackgroundColor() 
{
    const element = document.getElementById("third");
    if (clickStatus.first === 0 || clickStatus.first === 2) 
    {
        setStyle(element, COLORS.FIRST);
        clickStatus.first = 1;
    } 
    else 
    {
        setStyle(element, COLORS.SECOND);
        clickStatus.first = 2;
    }
}

function changeSecondTextAndBackgroundColor() 
{
    const element = document.querySelector("#selector");
    if (clickStatus.second === 0 || clickStatus.second === 1) {
        setStyle(element, COLORS.SECOND);
        clickStatus.second = 2;
    } else {
        setStyle(element, COLORS.FIRST);
        clickStatus.second = 1;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const imgContainer = document.getElementById("image-container");
    const img = imgContainer.querySelector("img"); 

    const addButton = document.getElementById('addBtn');
    const increaseButton = document.getElementById('increaseBtn');
    const decreaseButton = document.getElementById('decreaseBtn');
    const removeButton = document.getElementById('removeBtn');

    addButton.addEventListener("click", function () {
        const newImg = img.cloneNode();
        imgContainer.appendChild(newImg);
    });

    function getLastImage() {
        const allImages = document.querySelectorAll("img");
        return allImages[allImages.length - 1];
    }

    
    increaseButton.addEventListener("click", function () {
        const lastImg = getLastImage();
        const width = lastImg.width;
        const height = lastImg.height;
        lastImg.style.width = width * 1.2 + "px"; 
        lastImg.style.height = height * 1.2 + "px";
    });

    decreaseButton.addEventListener("click", function () {
        const lastImg = getLastImage();
        const width = lastImg.width;
        const height = lastImg.height;
        lastImg.style.width = width * 0.8 + "px";
        lastImg.style.height = height * 0.8 + "px";
    });

    removeButton.addEventListener("click", function () {
        const allImages = document.querySelectorAll("img");
        if (allImages.length > 1) {
            allImages[allImages.length - 1].remove();
        }
    });
});
