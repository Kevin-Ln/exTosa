let myHeading= document.querySelector("h2");
myHeading.textContent="Dans ton cul";

let myImage= document.querySelector("fuck");
myImage.addEventListener("click", function() {
    let mySrc= myImage.getAttribute("Image/fuckyou.png");
    if (mySrc=== "Image/fuck2.jpg") {
        myImage.setAttribute("Image/fuckyou.png", "Image/fuck2.jpg");
    } else {
        myImage.setAttribute("Image/fuckyou.png", "Image/fuck2.jpg");
    }
})
