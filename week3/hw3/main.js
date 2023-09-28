let firstDiv = document.getElementById("divOne")
let imageChangeButton = document.getElementById("btnShowImage")

console.log(imageChangeButton)

let addImage = function(){
    let img = document.getElementById("img");
    firstDiv.appendChild(img)
}

imageChangeButton.addEventListener("click", addImage)