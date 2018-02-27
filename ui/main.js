console.log('Loaded!');

//Change the text of the main-text div

var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

console.log('loaded rest....heehaa!');

//Move the image
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginleft = "100px";
};