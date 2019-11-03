/*function popUpWindow() {
    var elem = document.getElementById('passwordID');
	alert(console.log(elem))
    }
function update() { 
    var element = document.getElementById("myprogressBar");    
    var width = 1; 
    var identity = setInterval(scene, 10); 
    function scene() { 
        if (width >= 100) { 
        clearInterval(identity); 
        } else { 
        width++;  
        element.style.width = width + '%';  
        } 
    } 
}*/

window.onload = function() {
    var eventListen = document.getElementById("passwordBox")

    /*if(eventListen) {
        eventListen.addEventListener('keyup', function() {checkStrength(eventListen.value); })
    }*/
    eventListen.addEventListener('keyup', function() {checkStrength(eventListen.value) })

    function checkStrength(password) {
        //var password = document.getElementById(passwordBox);
        var strengthBar = document.getElementById("progressBar")
        var strength = 0;

        if (password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
            strength += 1
        }
        if (password.match(/[~<>?]+/)) {
            strength += 1
        }
        if (password.match(/[!@#$%^&*()]+/)) {
            strength += 1
        }
        if (password.length > 5) {
            strength += 1
        }
        switch(strength) {
            case 0:
                strengthBar.value = 20;
                break
            case 1:
                strengthBar.value = 40;
                break
            case 2:
                strengthBar.value = 60;
                break
            case 3:
                strengthBar.value = 80;
                break
            case 4:
                strengthBar.value = 100;
                break               
        }
    }
}