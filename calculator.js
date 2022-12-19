let string=" "; // initially we  have taken input box as a blank beacuse user will provide value .
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach(item=>{

item.addEventListener("click",(event)=>{                    //event.target.innerHTML=string;

if(event.target.innerHTML=="="){
    string=eval(string);
    document.querySelector('.input').value=string;
}

else if(event.target.innerHTML=="C"){

    string=" ";
    document.querySelector('.input').value=string;
}

else{
 
    string=string+event.target.innerHTML;
    document.querySelector('.input').value=string;
}

})


})