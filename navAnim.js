function navAnimation(x) {
    if (x.matches) { // If media query matches
        document.getElementById("mySidenav").style.width = "100%";
    } else {
        document.getElementById("mySidenav").style.width = "0";
    }
}

var x = window.matchMedia("(min-width: 600px)")
navAnimation(x) // Call listener function at run time
x.addListener(navAnimation) // Attach listener function on state changes

function openNav() {
document.getElementById("mySidenav").style.width = "60vw";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

content = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><a href="/index.html">Home</a><a href="/library.html">Library</a><a href="https://newstroop.cinimin.net/">News Troop</a><a href="https://cinimin.itch.io/">Itch.io</a><a href="https://www.youtube.com/channel/UC7BFOpI9eZo9gBCtNRP47rQ">YouTube</a>'
document.getElementById("mySidenav").innerHTML = content;