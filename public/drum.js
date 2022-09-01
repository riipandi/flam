AOS.init();

ion.sound({
    sounds: [
        {
            name: "crashl",
        },
        {
            name: "crashm"
        },
        {
            name: "crashr"
        },
        {
            name: "ride"
        },
        {
            name: "bell"
        },


        {
            name: "closehh"
        },
        {
            name: "openhh"
        },


        {
            name: "tom1"
        },
        {
            name: "tom2"
        },
        {
            name: "tom3"
        },

        {
            name: "snare"
        },
        {
            name: "kick"
        },
        {
            name: "floor"
        },
    ],
    path: "/assets/sound/",
    preload: true,
    multiplay: true,

});


var knob = $('.knob');
var angle = 270;
var minangle = 1;
var maxangle = 270;

var volumemax = 1;

function moveKnob(direction) {

    if(direction == 'down') {
        if((angle + 2) <= maxangle) {
            angle = angle + 2;
            setAngle();
        }
    }

    else if(direction == 'up') {
        if((angle - 2) >= minangle) {
            angle = angle - 2;
            setAngle();
        }
    }
}

function setAngle() {

    // rotate knob
    knob.css({
        '-moz-transform':'rotate('+angle+'deg)',
        '-webkit-transform':'rotate('+angle+'deg)',
        '-o-transform':'rotate('+angle+'deg)',
        '-ms-transform':'rotate('+angle+'deg)',
        'transform':'rotate('+angle+'deg)'
    });


    // highlight ticks
    var activeTicks = (Math.round(angle / 10) + 1);

    $('.tick').removeClass('activetick');
    $('.tick').slice(0,activeTicks).addClass('activetick');

    // update % value in text
    // var pc = Math.round((angle/270)*100);
    // $('.current-value').text(pc+'%');

    function calculateVolume(v) {
        return v < 0.001 ? 0.0 : 0.01 * Math.exp(Math.log(100) * v);
    }

    volumemax = 0.0037*angle;
    volumemax = calculateVolume(volumemax);

    console.log(volumemax)
}

// mousewheel event - firefox
knob.bind('mousedown', function(){

    onmousemove = function(event) {
        if(event.movementX > 1) {
            moveKnob('down');
        } if(event.movementX < -1) {
            moveKnob('up');
        } if(event.movementY < 1) {
            moveKnob('down');
        } if(event.movementY > -1) {
            moveKnob('up');
        } else {
        }
    };

    return false;
});

document.addEventListener('mouseup', function(){
    onmousemove = null;
    return false;
});


// mousewheel event - firefox
knob.bind('DOMMouseScroll', function(e){
    if(e.originalEvent.detail < 0) {
        moveKnob('up');
    } else {
        moveKnob('down');
    }
    return false;
});

// mousewheel event - ie, safari, opera
knob.bind('mousewheel', function(e){
    if(e.originalEvent.wheelDelta > 0) {
        moveKnob('up');
    } else {
        moveKnob('down');
    }
    return false;
});





function versionDisable() {
    var element = document.getElementById("versao-mobile");
    element.classList.remove("d-sm-block", "d-md-none");
    element.classList.add("d-none", "d-sm-none", "d-md-block");

    var element = document.getElementById("versao-desk");
    element.classList.remove("d-none", "d-sm-none", "d-md-block");
    element.classList.add("d-sm-block", "d-md-none");
}

function versionVisivel() {
    var element = document.getElementById("versao-mobile");
    element.classList.remove("d-none", "d-sm-none", "d-md-block");
    element.classList.add("d-sm-block", "d-md-none");

    var element = document.getElementById("versao-desk");
    element.classList.remove("d-sm-block", "d-md-none");
    element.classList.add("d-none", "d-sm-none", "d-md-block");
}




var togledrum = false;

$(document).ready(function(){

    drumonline.addEventListener("keypress", keyboardDefaut);
    drumonline.addEventListener("keypress", keyboard1);

    knob.css({
        '-moz-transform':'rotate('+angle+'deg)',
        '-webkit-transform':'rotate('+angle+'deg)',
        '-o-transform':'rotate('+angle+'deg)',
        '-ms-transform':'rotate('+angle+'deg)',
        'transform':'rotate('+angle+'deg)'
    });

    // highlight ticks
    var activeTicks = (Math.round(angle / 10) + 1);
    $('.tick').removeClass('activetick');
    $('.tick').slice(0,activeTicks).addClass('activetick');

    // update % value in text
    var pc = Math.round((angle/270)*100);
    $('.current-value').text(pc+'%');



    console.log('Keyboard Defaut + Keyboard 1')

    if(navigator.userAgent.toLowerCase().indexOf("android") > -1) {
        window.location.href = '/redirect/android.html';
    }
    if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
        window.location.href = '/redirect/ios.html';
    }


    if (window.navigator.userAgent.indexOf("Mac") != -1) {
        var element = document.getElementById("appgoogle");
        element.classList.add("clear");
    }
    else {
        var element = document.getElementById("ios");
        element.classList.add("clear");
    }
});

function animation(element) {
    element.classList.add("anime");
    setTimeout( () => { element.classList.remove("anime") }, 300)
}

$("#chimbal1").mousedown(function(){
    ion.sound.play("crashl", {
        volume: volumemax
    });

    let element = document.getElementById("chimbal1");
    element.classList.remove("chimbal1-hover");
    setTimeout( () => { element.classList.add("chimbal1-hover") }, 1)
});

$("#splash").mousedown(function(){
    ion.sound.play("crashm", {
        volume: volumemax
    });

    let element = document.getElementById("splash");
    element.classList.remove("splash-hover");
    setTimeout( () => { element.classList.add("splash-hover") }, 1)
});

$("#chimbal2").mousedown(function(){
    ion.sound.play("crashr", {
        volume: volumemax
    });

    let element = document.getElementById("chimbal2");
    element.classList.remove("chimbal2-hover");
    setTimeout( () => { element.classList.add("chimbal2-hover") }, 1)
});

$("#ride").mousedown(function(){
    ion.sound.play("ride", {
        volume: volumemax
    });

    let element = document.getElementById("ride");
    element.classList.remove("bell-hover");
    element.classList.remove("ride-hover");
    setTimeout( () => { element.classList.add("ride-hover") }, 1)
});

$("#bell").mousedown(function(){
    ion.sound.play("bell", {
        volume: volumemax
    });

    let element = document.getElementById("ride");
    element.classList.remove("ride-hover");
    element.classList.remove("bell-hover");
    setTimeout( () => { element.classList.add("bell-hover") }, 1)
});

$("#tom1").mousedown(function(){
    ion.sound.play("tom1", {
        volume: volumemax
    });

    var element = document.getElementById("tom1");
    element.classList.add("mystyle");
    setTimeout( () => { element.classList.remove("mystyle") }, 100);
    console.log("1")
    animation()
    console.log("2")
});

$("#tom2").mousedown(function(){
    ion.sound.play("tom2", {
        volume: volumemax
    });

    var element = document.getElementById("tom2");
    element.classList.add("mystyle");
    setTimeout( () => { element.classList.remove("mystyle") }, 100)
});

$("#tom3").mousedown(function(){
    ion.sound.play("tom3", {
        volume: volumemax
    });

    var element = document.getElementById("tom3");
    element.classList.add("mystyle");
    setTimeout( () => { element.classList.remove("mystyle") }, 100)
});

$("#snare").mousedown(function(){
    ion.sound.play("snare", {
        volume: volumemax
    });

    var element = document.getElementById("snare");
    element.classList.add("mystyle");
    setTimeout( () => { element.classList.remove("mystyle") }, 100)
});

$("#kickl").mousedown(function(){
    ion.sound.play("kick", {
        volume: volumemax
    });

    var element = document.getElementById("kickl");
    element.classList.add("mystyle");
    setTimeout( () => { element.classList.remove("mystyle") }, 100)
});

$("#kickr").mousedown(function(){
    ion.sound.play("kick", {
        volume: volumemax
    });

    var element = document.getElementById("kickr");
    element.classList.add("mystyle");
    setTimeout( () => { element.classList.remove("mystyle") }, 100)
});

$("#floor").mousedown(function(){
    ion.sound.play("floor", {
        volume: volumemax
    });

    var element = document.getElementById("floor");
    element.classList.add("mystyle");
    setTimeout( () => { element.classList.remove("mystyle") }, 100)
});

$("#open").mousedown(function(){
    ion.sound.play("openhh", {
        volume: volumemax
    });

    let element = document.getElementById("open");

    if ($(".openV2")[0]){
        element.classList.add("openV2_hover");
        setTimeout( () => { element.classList.remove("openV2_hover") }, 100)
    } else {
        element.classList.remove("open-hover");
        setTimeout( () => { element.classList.add("open-hover") }, 1)
    }
});

$("#close").mousedown(function(){
    ion.sound.play("closehh", {
        volume: volumemax
    });

    ion.sound.stop("openhh");

    let element = document.getElementById("close");
    element.classList.remove("close-hover");
    setTimeout( () => { element.classList.add("close-hover") }, 1);

    $( "#open" ).removeClass( "open-hover" )

});



// click everywhere else closes the box
function myKeyboard() {
    if (togledrum === false) {
        drumonline.removeEventListener("keypress", keyboard1)
        drumonline.addEventListener("keypress", keyboard2)
        togledrum = true

        console.log('Keyboard Defaut + Keyboard 2')

        var element = document.getElementById("teclado");
        element.classList.add("teclado2");
    }

    else {
        drumonline.removeEventListener("keypress", keyboard2)
        drumonline.addEventListener("keypress", keyboard1)
        togledrum = false

        console.log('Keyboard Defaut + Keyboard 1')

        var element = document.getElementById("teclado");
        element.classList.remove("teclado2");
    }
}

function myBg() {
    if (togledrum === false) {
        togledrum = true
        var element = document.getElementById("drum");
        element.classList.add("bg-2");

        var element = document.getElementById("kickl");
        element.classList.add("kickl-2");

        var element = document.getElementById("kickr");
        element.classList.add("kickr-2");

        var element = document.getElementById("open");
        element.classList.add("openV2");

    }

    else {
        togledrum = false
        var element = document.getElementById("drum");
        element.classList.remove("bg-2");

        var element = document.getElementById("kickl");
        element.classList.remove("kickl-2");

        var element = document.getElementById("kickr");
        element.classList.remove("kickr-2");

        var element = document.getElementById("open");
        element.classList.remove("openV2");
    }
}

function keyboard1(event){

    if (event.repeat) {
        return
    }

    if(event.key === 'A' || event.key === 'a'){

        ion.sound.play("floor", {
            volume: volumemax
        });

        var element = document.getElementById("floor");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'S' || event.key === 's'){

        ion.sound.play("tom3", {
            volume: volumemax
        });

        var element = document.getElementById("tom3");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'D' || event.key === 'd'){

        ion.sound.play("tom2", {
            volume: volumemax
        });

        var element = document.getElementById("tom2");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'F' || event.key === 'f'){

        ion.sound.play("tom1", {
            volume: volumemax
        });

        var element = document.getElementById("tom1");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'G' || event.key === 'g'){

        ion.sound.play("tom1", {
            volume: volumemax
        });

        var element = document.getElementById("tom1");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'H' || event.key === 'h'){

        ion.sound.play("tom2", {
            volume: volumemax
        });

        var element = document.getElementById("tom2");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'J' || event.key === 'j'){

        ion.sound.play("tom3", {
            volume: volumemax
        });

        var element = document.getElementById("tom3");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'K' || event.key === 'k'){

        ion.sound.play("floor", {
            volume: volumemax
        });

        var element = document.getElementById("floor");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if (event.repeat) { return }
}

function keyboard2(event){

    if (event.repeat) {
        return
    }

    if(event.key === 'A' || event.key === 'a'){

        ion.sound.play("tom1", {
            volume: volumemax
        });

        var element = document.getElementById("tom1");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'S' || event.key === 's'){

        ion.sound.play("tom1", {
            volume: volumemax
        });

        var element = document.getElementById("tom1");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'D' || event.key === 'd'){

        ion.sound.play("tom2", {
            volume: volumemax
        });

        var element = document.getElementById("tom2");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'F' || event.key === 'f'){

        ion.sound.play("tom2", {
            volume: volumemax
        });

        var element = document.getElementById("tom2");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'G' || event.key === 'g'){

        ion.sound.play("tom3", {
            volume: volumemax
        });

        var element = document.getElementById("tom3");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'H' || event.key === 'h'){

        ion.sound.play("tom3", {
            volume: volumemax
        });

        var element = document.getElementById("tom3");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'J' || event.key === 'j'){

        ion.sound.play("floor", {
            volume: volumemax
        });

        var element = document.getElementById("floor");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'K' || event.key === 'k'){

        ion.sound.play("floor", {
            volume: volumemax
        });

        var element = document.getElementById("floor");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }
}

function keyboardDefaut(event){

    if (event.repeat) {
        return
    }

    if(event.key === 'Q' || event.key === 'q'){

        ion.sound.play("crashl", {
            volume: volumemax
        });

        let element = document.getElementById("chimbal1");
        element.classList.remove("chimbal1-hover");
        setTimeout( () => { element.classList.add("chimbal1-hover") }, 1)

    }

    if(event.key === 'W' || event.key === 'w'){

        ion.sound.play("crashl", {
            volume: volumemax
        });

        let element = document.getElementById("chimbal1");
        element.classList.remove("chimbal1-hover");
        setTimeout( () => { element.classList.add("chimbal1-hover") }, 1)
    }

    if(event.key === 'E' || event.key === 'e'){

        ion.sound.play("crashm", {
            volume: volumemax
        });

        let element = document.getElementById("splash");
        element.classList.remove("splash-hover");
        setTimeout( () => { element.classList.add("splash-hover") }, 1)
    }

    if(event.key === 'R' || event.key === 'r'){

        ion.sound.play("crashm", {
            volume: volumemax
        });

        let element = document.getElementById("splash");
        element.classList.remove("splash-hover");
        setTimeout( () => { element.classList.add("splash-hover") }, 1)
    }

    if(event.key === 'T' || event.key === 't'){

        ion.sound.play("crashr", {
            volume: volumemax
        });

        let element = document.getElementById("chimbal2");
        element.classList.remove("chimbal2-hover");
        setTimeout( () => { element.classList.add("chimbal2-hover") }, 1)
    }

    if(event.key === 'Y' || event.key === 'y'){

        ion.sound.play("crashr", {
            volume: volumemax
        });

        let element = document.getElementById("chimbal2");
        element.classList.remove("chimbal2-hover");
        setTimeout( () => { element.classList.add("chimbal2-hover") }, 1)
    }

    if(event.key === 'U' || event.key === 'u'){

        ion.sound.play("ride", {
            volume: volumemax
        });

        let element = document.getElementById("ride");
        element.classList.remove("bell-hover");
        element.classList.remove("ride-hover");
        setTimeout( () => { element.classList.add("ride-hover") }, 1)
    }

    if(event.key === 'I' || event.key === 'i'){

        ion.sound.play("ride", {
            volume: volumemax
        });

        let element = document.getElementById("ride");
        element.classList.remove("bell-hover");
        element.classList.remove("ride-hover");
        setTimeout( () => { element.classList.add("ride-hover") }, 1)
    }

    if(event.key === 'O' || event.key === 'o'){

        ion.sound.play("bell", {
            volume: volumemax
        });

        let element = document.getElementById("ride");
        element.classList.remove("ride-hover");
        element.classList.remove("bell-hover");
        setTimeout( () => { element.classList.add("bell-hover") }, 1)
    }

    if(event.key === 'X' || event.key === 'x'){

        ion.sound.play("closehh", {
            volume: volumemax
        });
        // ion.sound.stop("openhh")

        ion.sound.stop("openhh", "openhh", "openhh", "openhh");

        let element = document.getElementById("close");
        element.classList.remove("close-hover");
        setTimeout( () => { element.classList.add("close-hover") }, 1)

        $( "#open" ).removeClass( "open-hover" )

    }

    if(event.key === 'M' || event.key === 'm'){

        ion.sound.play("closehh", {
            volume: volumemax
        });
        ion.sound.stop("openhh");

        let element = document.getElementById("close");
        element.classList.remove("close-hover");
        setTimeout( () => { element.classList.add("close-hover") }, 1)

        $( "#open" ).removeClass( "open-hover" )
    }

    if(event.key === 'Z' || event.key === 'z'){

        ion.sound.play("openhh", {
            volume: volumemax
        });

        let element = document.getElementById("open");

        if ($(".openV2")[0]){
            element.classList.add("openV2_hover");
            setTimeout( () => { element.classList.remove("openV2_hover") }, 100)
        } else {
            element.classList.remove("open-hover");
            setTimeout( () => { element.classList.add("open-hover") }, 1)
        }
    }

    if(event.key === '<' || event.key === ','){

        ion.sound.play("openhh", {
            volume: volumemax
        });

        let element = document.getElementById("open");
        if ($(".openV2")[0]){
            element.classList.add("openV2_hover");
            setTimeout( () => { element.classList.remove("openV2_hover") }, 100)
        } else {
            element.classList.remove("open-hover");
            setTimeout( () => { element.classList.add("open-hover") }, 1)
        }
    }

    if(event.key === 'V' || event.key === 'v'){

        ion.sound.play("snare", {
            volume: volumemax
        });

        var element = document.getElementById("snare");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'B' || event.key === 'b'){

        ion.sound.play("snare", {
            volume: volumemax
        });

        var element = document.getElementById("snare");
        element.classList.add("mystyle");
        setTimeout( () => { element.classList.remove("mystyle") }, 100)

        element.classList.add("anime");
        setTimeout( () => { element.classList.remove("anime") }, 300)
    }

    if(event.key === 'C' || event.key === 'c'){

        ion.sound.play("kick", {
            volume: volumemax
        });

        var element = document.getElementById("kickl");

        if ($(".kickl-2")[0]){
            element.classList.add("kickl-2-active");
            setTimeout( () => { element.classList.remove("kickl-2-active") }, 100)
        } else {
            element.classList.add("mystyle");
            setTimeout( () => { element.classList.remove("mystyle") }, 100)

            element.classList.add("anime");
            setTimeout( () => { element.classList.remove("anime") }, 300)
        }
    }

    if(event.key === 'N' || event.key === 'n'){

        ion.sound.play("kick", {
            volume: volumemax
        });

        var element = document.getElementById("kickr");

        if ($(".kickr-2")[0]){
            element.classList.add("kickr-2-active");
            setTimeout( () => { element.classList.remove("kickr-2-active") }, 100)
        } else {
            element.classList.add("mystyle");
            setTimeout( () => { element.classList.remove("mystyle") }, 100)

            element.classList.add("anime");
            setTimeout( () => { element.classList.remove("anime") }, 300)
        }
    }

    if(event.key === 'P' || event.key === 'p'){

        ion.sound.play("kick", {
            volume: volumemax
        });

        var element = document.getElementById("kickr");

        if ($(".kickr-2")[0]){
            element.classList.add("kickr-2-active");
            setTimeout( () => { element.classList.remove("kickr-2-active") }, 100)
        } else {
            element.classList.add("mystyle");
            setTimeout( () => { element.classList.remove("mystyle") }, 100)

            element.classList.add("anime");
            setTimeout( () => { element.classList.remove("anime") }, 300)
        }
    }

    if(event.key === 'L' || event.key === 'l'){

        ion.sound.play("kick", {
            volume: volumemax
        });

        var element = document.getElementById("kickl");

        if ($(".kickl-2")[0]){
            element.classList.add("kickl-2-active");
            setTimeout( () => { element.classList.remove("kickl-2-active") }, 100)
        } else {
            element.classList.add("mystyle");
            setTimeout( () => { element.classList.remove("mystyle") }, 100)

            element.classList.add("anime");
            setTimeout( () => { element.classList.remove("anime") }, 300)
        }

    }
}



document.onkeydown=function dSpace(e){
    if((e.keyCode==32)&&(!e.shiftKey)){e.preventDefault();}

    if (event.repeat) {
        return
    }

    if(event.code === 'Space'){

        ion.sound.play("kick", {
            volume: volumemax
        });

        var element = document.getElementById("kickl");
        if ($(".kickl-2")[0]){
            element.classList.add("kickl-2-active");
            setTimeout( () => { element.classList.remove("kickl-2-active") }, 100)
        } else {
            element.classList.add("mystyle");
            setTimeout( () => { element.classList.remove("mystyle") }, 100)

            element.classList.add("anime");
            setTimeout( () => { element.classList.remove("anime") }, 300)
        }
    }

};
