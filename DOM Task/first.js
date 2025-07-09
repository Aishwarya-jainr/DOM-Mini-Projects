var btn =document.querySelector('button')

var flag = 0;
btn.addEventListener('click',function(){
    if(flag==0){
    flag = 1
    btn.style.backgroundColor="royalblue"
}
else{
    btn.style.backgroundColor="red"
    flag = 0
}
})