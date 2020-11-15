let number = 0
var currentcolorBox = "blueBox"
function addBox(){
    if(currentcolorBox =="blueBox"){
        currentcolorBox = "redBox"
    }

    else
    if(currentcolorBox == "redBox"){
        currentcolorBox = "greenBox"
    }

    else
    if(currentcolorBox == "greenBox"){
        currentcolorBox = "blueBox"
    }


    number++;
    document.getElementById("bodyid").innerHTML += '<div class="box '+ currentcolorBox +'">'+ number +'</div>'
}