var btn =document.querySelector('button')
var p = document.querySelector('p')

var num = 2
btn.addEventListener('click',function(){
    num = num*2
    p.innerHTML = num
})