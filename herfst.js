document.body.onload = mediumRain;
/*document.body.onload = addRain;*/

/*function addElement () {
    var newDiv = document.createElement("div");
    var randomNumber = document.createTextNode(time);
    newDiv.appendChild(randomNumber);

    var currentDiv = document.getElementById("text");
    document.body.insertBefore(newDiv, currentDiv);

}*/

/*function addRain()
 {
    console.log("test");
    for (var i = 1; i <= 10; ++i) {
    var newDiv = document.createElement("div");
    newDiv.className = "regen";
    document.getElementById("achtergrond").appendChild(newDiv);
    console.log("gelukt?");
        
    }
 }*/
         
     /*var time = Math.random()*10;*/
/*var drup = document.getElementById("regen1");*/

var rain = document.getElementsByClassName("regen");

/*rain.style.setProperty("animation-duration", Math.random()*5 + "s")*/

/*for (var i = 0; i < rain.length; i++) {
    rain[i].style.setProperty("animation-duration", Math.random()*2 + 1 + "s")
}*/

for (var i = 0; i < rain.length; i++) {
rain[i].style.setProperty("left", Math.random()*window.innerWidth + "px")
}

function heavyRain() {
for (var i = 0; i < rain.length; i++) {
    rain[i].style.setProperty("animation-duration", Math.random()*0.5 + 0.2 + "s")
}
}

function mediumRain() {
    for (var i = 0; i < rain.length; i++) {
        rain[i].style.setProperty("animation-duration", Math.random()*2 + 1 + "s")
    }
    }

var heavybox = document.getElementById("heavy");

if (heavybox != null) {
    heavybox.addEventListener("click", heavyRain);
}

var mediumbox = document.getElementById("medium");

if (mediumbox != null) {
    mediumbox.addEventListener("click", mediumRain);
}
