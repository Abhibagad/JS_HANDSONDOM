let randomNumber = Math.floor(Math.random() * 100);
let box2= document.getElementsByClassName('box2');
let btn1= document.getElementsByClassName("btn1");
let head2= document.getElementsByClassName("head2");
let num= document.getElementsByClassName("b");
let box1= document.getElementsByClassName("box1");
let parent = document.getElementsByClassName("parent");
let cnt=100;
function call(){
    
    if(parseInt(box2.value)>randomNumber){
        head2.innerText ="Your Guess Is High"
        cnt--;
        num[0].innerText = cnt;
    }
    else if(parseInt(box2.value)<randomNumber){
        head2.innerText ="Your Guess Is Low"
        cnt--;
        num[0].innerText = cnt;
    }
    else{
        head2.innerText ="🤩🤩 Hurray You Won 🤩🤩"
        box1.innerText=randomNumber;
       num[0].innerText = cnt;
        parent.setAttribute("style","background-color:orange")
        


    }
} 