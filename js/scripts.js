document.getElementById("more").addEventListener("click", myFunction);

function myFunction(){
    document.getElementById("plus").innerHTML = "More information about Elizabeth Bennet or Pride and Prejudice visit here https://en.wikipedia.org/wiki/Elizabeth_Bennet";
}

var x = document.getElementById("button");
x.addEventListener("mouseover", mySecondFunction);

function mySecondFunction(){
    x.style.backgroundColor = "white";
}

//This event listener will listen for when the mouse moves away from the Author's name and will change the font family from Georgia to Franklin Gothic//

var p = document.getElementById("author");
p.addEventListener("mouseout", myThirdFunction);

function myThirdFunction(){
    p.style.fontFamily = "Franklin Gothic";
}

//This event listener will listen for when the mouse wheel moves and will enlarge the Website Created by Tabitha Poppenwimer //
var b = document.getElementById("name");
b.addEventListener("mousewheel", myFourthFunction);

function myFourthFunction(){
    b.style.fontSize = "1.2em"
}