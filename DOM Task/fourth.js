var btn = document.querySelector('button')
var main = document.querySelector('#main')

btn.addEventListener('click',function(){
    
    var red = Math.floor(Math.random()*255)
    var blue = Math.floor(Math.random()*255)
    var green = Math.floor(Math.random()*255)
    var clr = `rgb(${red},${blue},${green})`
    
    main.style.backgroundColor=clr
    console.log("My value is ${red}");

})
