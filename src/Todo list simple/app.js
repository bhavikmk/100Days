var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul')

button.addEventListener('click', function(){
    if (input.value){
        // Create List element 
        li = document.createElement('li');
        // Add value to list element in from input bar
        li.appendChild(document.createTextNode(input.value));
        // Append list element to ul
        ul.appendChild(li);
        // EMpty input bar
        input.value='';
    }
})

input.addEventListener('keypress', function(event){
     
     if (input.value && event.keyCode ==13 ){ 
        // Create List element 
        li = document.createElement('li');
        // Add value to list element in from input bar
        li.appendChild(document.createTextNode(input.value));
        // Append list element to ul
        ul.appendChild(li);
        // EMpty input bar
        input.value='';
    }
})