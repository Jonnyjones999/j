function dropIt(currentID) {

    var x = document.getElementById("lang-chooser1").getAttribute("aria-expanded");
    if (x == "false" && currentID != "yDmH0d1") {
        x = "true"
    } else {
        x = "false"
    }
    document.getElementById("lang-chooser1").setAttribute("aria-expanded", x);


    if(document.getElementById("div1").getAttribute("class") == "xkfVF" && currentID != "yDmH0d1"){
        document.getElementById("div1").setAttribute("class", "xkfVF nnGvjf");
    }
    else {
        document.getElementById("div1").setAttribute("class", "xkfVF");
    }

    if(document.getElementById("lang-chooser1").getAttribute("class") == "jgvuAb TkU0Xc" && currentID != "yDmH0d1"){
        document.getElementById("lang-chooser1").setAttribute("class", "jgvuAb TkU0Xc iWO5td");
    }
    else {
        document.getElementById("lang-chooser1").setAttribute("class", "jgvuAb TkU0Xc");
    }

    if(document.getElementById("lang-chooser1").getAttribute("aria-expanded") == "true" && currentID != "yDmH0d1"){
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

        if(document.getElementById(itemId).getAttribute("role") == "" && currentID != "yDmH0d1"){
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
    //turns box blue
    if(document.getElementById("passwordBox").className == "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc"
        || document.getElementById("passwordBox").className == "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc CDELXb") {
        document.getElementById("passwordBox").className = "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc u3bW4e";
    }
    //turns box red
    else if(document.getElementById("passwordBox").className == "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc k0tWj IYewr"){
        document.getElementById("passwordBox").className = "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc k0tWj IYewr u3bW4e";
    }
}

function unBlueIt(boxID, inputID){
    if((document.getElementById(boxID).className == "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc u3bW4e"
        || document.getElementById(boxID).className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J CDELXb"
        || document.getElementById(boxID).className == "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc CDELXb")
        && document.getElementById(inputID).value == ""){

        document.getElementById(boxID).className = "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc";
        // alert("hello");
    }
    else if((document.getElementById(boxID).className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J u3bW4e"
            || document.getElementById(boxID).className == "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc u3bW4e")
        && document.getElementById(inputID).value != ""){
        document.getElementById(boxID).className = "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc CDELXb";
        // alert("Im here");
    }
    else if (document.getElementById(boxID).className == "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc k0tWj IYewr u3bW4e"
        && document.getElementById(inputID).value == ""){
        document.getElementById(boxID).className = "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc k0tWj IYewr";
    }
    // else if (document.getElementById(boxID).className == "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc k0tWj IYewr u3bW4e"
    //     && document.getElementById(inputID).value != ""){
    //     document.getElementById(boxID).className = "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc k0tWj IYewr";
    // }
}

function redIt(){
    if(document.getElementById("passwordBox").className == "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr" && document.getElementById("password").value == ""){
        document.getElementById("passwordBox").className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr u3bW4e";
    }
}

function progress(){
    document.getElementById("progressBar").className = "sZwd7c B6Vhqe";
}


$(document).ready(function(){
    // $("body").click(function(event){
    //     event.stopPropagation();
    //     unBlueIt();
    // });

    $("#passwordBox").click(function(event){
        event.stopPropagation();
        // alert(this.id +"clicked")
        blueIt();
    });

    $("#yDmH0d1").click(function(event){
        event.stopPropagation();
        unBlueIt("passwordBox", "password")
        dropIt("yDmH0d1")
    });

    $("#lang-chooser1").click(function(event){
        event.stopPropagation();
        dropIt("lang-chooser1");
    });

    if($("#passwordBox").className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr u3bW4e"){
        $("#password").focus();
    }

    // if($("#passwordBox").className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J k0tWj IYewr u3bW4e"){
    //     $("#password").focus();
    // }

    $("#signinid").click(function(event){
        event.stopPropagation();
        unBlueIt("passwordBox", "password");
        progress();
    });

});

