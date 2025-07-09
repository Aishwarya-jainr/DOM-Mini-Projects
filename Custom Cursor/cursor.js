var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener('mousemove',function(shift){
    crsr.style.left = shift.x + "px"
    crsr.style.top = shift.y + "px"

})