var btn = document.querySelector('button')
var p = document.querySelector('p')

var size = 16
btn.addEventListener('click',function(){
    size = size+2
    p.style.fontSize = size + "px"
});