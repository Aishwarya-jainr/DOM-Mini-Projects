var btn = document.querySelector("button")
var percent = document.querySelector("h1")
var growth = document.querySelector("#growth")

var num = 0

var time = 50
// var flag = 0 
btn.addEventListener('click',function(){
    btn.disabled = 'true' 
    var int = setInterval(function(){
        ++num
        percent.innerHTML = num + "%"
        growth.style.width = num + "%"
        console.log(num);
        
    },time)
    
    setTimeout(function(){
        btn.innerHTML="Downloaded"
        btn.style.opacity = 0.5
        // btn.disabled = 'true' 
        clearTimeout(int)
    },time*102)
})

