
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";      /*mayattafichewech etsawer el kol m3a b3adhhom */
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

// meloul taamel tableau fih 4 strings.
let titles = ["awesome events and beautiful places" , "hello world" , "descover the world" , "see the beauty outside the box"]
// t7adhar function trajaa el element eli ba3ad eli selectionné taw 

var el = document.getElementsByClassName('center')[0]

var i = -1
setInterval(function() {
    i++
    el.innerText = titles[i]
    if(i >= 3) i = 0
}, 2000)

