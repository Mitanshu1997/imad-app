console.log('Loaded!');

//Change the text of the main-text div

var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//Move the image
var img = document.getElementById('madi');

var marginleft = 0;

function moveRight(){
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft + "px";
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};

console.log('loaded rest....heehaa!');

//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    //Make a request to the counter endpoint
    
    //Capture the response and store it in a variable
    
    //Render the variable in a correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}
