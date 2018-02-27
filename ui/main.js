console.log('Loaded!');

//Change the text of the main-text div

var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

console.log('loaded rest....heehaa!');

//Move the image
var img = document.getElementById('madi');

var marginleft = 0;

function moveRight(){
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft + "px";
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
    img.style.marginleft = "100px";
};