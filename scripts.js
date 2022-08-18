function dropIt(currentID) {

        var x = document.getElementById("lang-chooser").getAttribute("aria-expanded");
        if (x == "false" && currentID != "yDmH0d") {
            x = "true"
        } else {
            x = "false"
        }
        document.getElementById("lang-chooser").setAttribute("aria-expanded", x);


    if(document.getElementById("div1").getAttribute("class") == "xkfVF" && currentID != "yDmH0d"){
        document.getElementById("div1").setAttribute("class", "xkfVF nnGvjf");
    }
    else {
        document.getElementById("div1").setAttribute("class", "xkfVF");
    }

    if(document.getElementById("lang-chooser").getAttribute("class") == "jgvuAb TkU0Xc" && currentID != "yDmH0d"){
        document.getElementById("lang-chooser").setAttribute("class", "jgvuAb TkU0Xc iWO5td");
    }
    else {
        document.getElementById("lang-chooser").setAttribute("class", "jgvuAb TkU0Xc");
    }

    if(document.getElementById("lang-chooser").getAttribute("aria-expanded") == "true" && currentID != "yDmH0d"){
        document.getElementById("div2").setAttribute("aria-hidden", "true");
        document.getElementById("div3").setAttribute("aria-hidden", "true");
        document.getElementById("div4").setAttribute("aria-hidden", "");
        document.getElementById("div4").setAttribute("style", "\"min-width: 162px; max-height: 164px; top: 16.5px;\"");
    }
    else {
        document.getElementById("div2").setAttribute("aria-hidden", "");
        document.getElementById("div3").setAttribute("aria-hidden", "");
        document.getElementById("div4").setAttribute("aria-hidden", "true");
        document.getElementById("div4").setAttribute("style", "\"min-width: 162px; max-height: 164px; top: 16.5px;display: none\"");
    }

    var itemId;

    for (itemId = 2; itemId <= 144; itemId++) {

        if(document.getElementById(itemId).getAttribute("role") == "" && currentID != "yDmH0d"){
            document.getElementById(itemId).setAttribute("role", "option");
        }
        else {
            document.getElementById(itemId).setAttribute("role", "");
        }

    }

}

function highlight(i){
    document.getElementById(i).className = "MocG8c B9IrJb LMgvRb KKjvXb"
}

function stopHighlight(i){
    document.getElementById(i).className = "MocG8c B9IrJb LMgvRb"
}

function blueIt(){
    if(document.getElementById("emailBox").className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J"
        || document.getElementById("emailBox").className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J CDELXb"){
        document.getElementById("emailBox").className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J u3bW4e";
    }
    else if(document.getElementById("emailBox").className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr"){
        document.getElementById("emailBox").className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr u3bW4e";
    }
}

function unBlueIt(boxID, inputID){
    if((document.getElementById(boxID).className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J u3bW4e"
        || document.getElementById(boxID).className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J CDELXb")
        && document.getElementById(inputID).value == ""){
        document.getElementById(boxID).className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J";
    }
    else if(document.getElementById(boxID).className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J"){
//    It was necessary to handle this condition otherwise it was turning the class to false
    }
    else if(document.getElementById(boxID).className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr"){
//    It was necessary to handle this condition otherwise it was turning the class to false
    }
    else if(document.getElementById(boxID).className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr CDELXb"){

//    It was necessary to handle this condition otherwise it was turning the class to false
    }
    else if(document.getElementById(boxID).className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J u3bW4e"
        && document.getElementById(inputID).value != ""){
        document.getElementById(boxID).className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J CDELXb";

    }
    else if (document.getElementById(boxID).className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr u3bW4e"
        && document.getElementById(inputID).value == ""){
        document.getElementById(boxID).className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr";
    }
    else if(document.getElementById(boxID).className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr u3bW4e"
        && document.getElementById(inputID).value != ""){
        document.getElementById(boxID).className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr CDELXb";
    }
    // else if(document.getElementById(boxID).className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr"){
    //    alert("11111111");
    // }


}

function stop(){
    if(document.getElementById("emailBox").className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr CDELXb"
        && document.getElementById("identifierId").value == ""){
        document.getElementById("emailBox").className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr";
    }
}
function redIt(){
    if(document.getElementById("emailBox").className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr" && document.getElementById("identifierId").value == ""){
        document.getElementById("emailBox").className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr u3bW4e";
    }
}

function progress(){
    document.getElementById("progressBar").className = "sZwd7c B6Vhqe";
}


$(document).ready(function(){
    // $("body").click(function(event){
    //     event.stopPropagation();
    //     unBlueIt("emailBox", "identifierId");
    // });

    $("#emailBox").click(function(event){
        event.stopPropagation();
        blueIt();
    });

    $("#yDmH0d").click(function(event){
        event.stopPropagation();
        unBlueIt("emailBox", "identifierId")
        dropIt("yDmH0d")
        stop();
    });



    $("#lang-chooser").click(function(event){
        event.stopPropagation();
        dropIt("lang-chooser")
    });

    if($("#emailBox").className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr u3bW4e"){
        $("#identifierId").focus();
    }

    $("#signinid").click(function(event){
        event.stopPropagation();
        unBlueIt("emailBox", "identifierId");
        progress();
    });


});

