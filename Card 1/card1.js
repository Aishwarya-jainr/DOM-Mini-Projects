let h5 = document.querySelector('h5')
let btn = document.querySelector('button')

let flag = 0 ;
btn.addEventListener('click',function(){
    if(flag==0){
        h5.innerHTML='Friend'
        btn.innerHTML="Remove Friend"
        h5.style.color='royalblue'
        btn.style.backgroundColor='red'
        flag = 1
    }
    else{
        h5.innerHTML='Stranger'
        h5.style.color='red'
        btn.style.backgroundColor='royalblue'
        flag = 0
    }
})