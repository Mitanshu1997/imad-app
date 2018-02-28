/*console.log('Loaded!');

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
*/
//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            //When the request is successfully completed we want to take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // If not done yet, we dont want to do anything
    };
    
    //Make the request
    request.open('GET', 'http://khuranamitanshu.imad.hasura-app.io/counter', true);
    request.send(null);
};
