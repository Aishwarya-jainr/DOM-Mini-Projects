var btn = document.querySelector('button')
var img = document.querySelector('img')

btn.addEventListener('click',function(){
    var x = Math.floor(Math.random()*100)
    var y = Math.floor(Math.random()*100)
    var rot = Math.floor(Math.random()*360)
    
    
    img.style.left=x+"%"
    img.style.top=y+"%"
    img.style.rotate=rot+"deg"
})