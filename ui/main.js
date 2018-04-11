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

//Submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to the server and send the name
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            //When the request is successfully completed we want to take some action
            if (request.status === 200) {
                //Capture a list of names and render it as a list.
                var names = request.resposneText;
                names = JSON.parse(names); //Convert back from a string to an array
                var list = '';
                for (var i=0; i<names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
        // If not done yet, we dont want to do anything
    };
    
    //Make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://khuranamitanshu.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    
};
