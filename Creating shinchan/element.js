var btn = document.querySelector('button')
var container = document.querySelector('.main');

btn.addEventListener('click',function(){

    var x = Math.random()*90
    var y = Math.random()*90
    var rot = Math.random()*360

    var img = document.createElement('img')
    img.src = "https://www.pngplay.com/wp-content/uploads/12/Shin-Chan-PNG-Images-HD.png"

    container.appendChild(img)

    img.style.left=x + "%"
    img.style.top=y + "%"
    img.style.rotate=rot + "deg"
})
