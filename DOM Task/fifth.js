var btn = document.querySelector('button')
var para = document.querySelector('p')

var flag = 0 
btn.addEventListener('click',function(){
    if(flag==0){
        para.style.color="transparent"
        btn.innerHTML="Show para"
        flag = 1
    }
    else{
        para.style.color="black"
        btn.innerHTML="Hide para"
        flag=0
    }
})