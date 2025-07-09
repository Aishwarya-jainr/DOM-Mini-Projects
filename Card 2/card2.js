var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var h1 = document.querySelector("h1")

var num = 0
btn1.addEventListener('click', function () {
    num++
    h1.innerHTML = num
    if(num%5==0){
        h1.style.backgroundColor="red"
    }
    else{
        h1.style.backgroundColor="grey"
    }
})
btn2.addEventListener('click', function () {
    if(num>0){
        num--
    }
    h1.innerHTML = num
    
})