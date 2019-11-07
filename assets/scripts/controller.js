var globalVariable;
window.onload = function() {
    var eventListen = document.getElementById("passwordBox")

    eventListen.addEventListener('keyup', function() {checkStrength(eventListen.value) })


    function checkStrength(password) {
        var strengthBar = document.getElementById("progressBar")
        var strength = 0;
        globalVariable = 0;

        if (password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
            strength += 10
        }
        if (password.match(/[!@$?%-=]+/)) {
            strength += 15
        }
        if (password.match(/[~`*^|+""']+/)) {
            strength += 20
        }
        if (password.match(/[()#.,&_{}:;<>/]+/)) {
            strength += 25
        }
        if (password.length >= 12) {
            strength += 20
        }

        if(strength >= 100){
            strengthBar.value = 100;
            globalVariable = 100;
        }
        else {
            strengthBar.value = strength;
            globalVariable = strength;
        }
       /* switch(strength) {
            case 0:
                strengthBar.value = 20;
                globalVariable = 20;
                break
            case 1:
                strengthBar.value = 40;
                globalVariable = 40;
               // strengthBar.style.backgroundColor = 'red';
                break
            case 2:
                strengthBar.value = 60;
                globalVariable = 60;
                break
            case 3:
                strengthBar.value = 80;
                globalVariable = 80;
                break
            case 4:
                strengthBar.value = 100;
                globalVariable = 100;
                break               
        }*/
    }
   /* function progressBarColor (strengthBarValue) {
        var strengthBarValue = document.getElementById(strengthBarValue)


    }*/
}
/*function myFunction() {

    document.getElementById("popUpWindow").style.display = "block";
}*/
/*Test changing content in popup window*/
function content() {
    window.alert(globalVariable + "%");
    if(globalVariable >= 80){
        displayMessageStrong();
    }
    if(globalVariable < 80){
        displayMessageWeak();
    }
}
function displayMessageStrong() {
    document.getElementById("strong").style.display = "block";
}
function displayMessageWeak() {
    document.getElementById("weak").style.display = "block";
}
