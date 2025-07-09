var btn = document.querySelector("button")
var h3 = document.querySelector("h3")

var count = 0;
btn.addEventListener('click',function(){
    if(count==0){
    h3.innerHTML="Requesting..."
    btn.innerHTML="Adding..."
    h3.style.color="yellow"
    // h3.style.webkitTextStroke="0.5px yellow"

    setTimeout(function(){
        h3.innerHTML="Friend"
        h3.style.color="Darkblue"
        btn.innerHTML="Remove"

    },3000)
    count=1
    }
    else{
        h3.innerHTML="Requesting..."
    btn.innerHTML="Removing..."
    h3.style.color="yellow"
    
    setTimeout(function(){
        h3.innerHTML="Stranger"
        h3.style.color="Red"
        btn.innerHTML="Add Friend"

    },3000)
    count=0
    }
})