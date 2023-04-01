let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)
let input=document.querySelector("#input")
let btn = document.getElementById("btn")
let guess= document.getElementById("head2");
let box2= document.getElementsByClassName('box2');
let num= document.getElementsByTagName("b");
let box1= document.getElementsByClassName("box1");
let parent=document.getElementById("parent")

let btn1= document.getElementsByClassName("btn1");


cnt=100;

    function callme(){
    if(parseInt(input.value)>randomNumber){
        guess.innerText ="Your Guess Is High"
        cnt--;
        num[0].innerText = cnt;
    }
    else if(parseInt(input.value)<randomNumber){
        guess.innerText ="Your Guess Is Low"
        cnt--;
        num[0].innerText = cnt;
    }
    else{
        guess.innerText ="😍🎊🥳 Hurray You Won 🎊😍"
        box1[0].innerText =randomNumber;
       num[1].innerText = cnt;
        parent.setAttribute("style","background-color:yellow")
    
    }
} 
