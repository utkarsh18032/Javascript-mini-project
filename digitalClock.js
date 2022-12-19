

function digitalClock(){
    let date= new Date();

    let hours=date.getHours();// javascript inbuild function
    let minutes=date.getMinutes();// javascript inbuild function
    let seconds=date.getSeconds();// it is also a javascript inbuild function we are calling here .
    //now we have to set am pm for that we have write a logics
    let amOrpm= hours >=12 ?'pm' : ' am';


    document.getElementById('hr').innerHTML= hours; //( hours=date.getHours();)
    document.getElementById('min').innerHTML= minutes;
    document.getElementById('sec').innerHTML= seconds;
    document.getElementById('ampm').innerHTML= amOrpm;

    setTimeout(digitalClock , 500);//(setTimeout syntax (first function , time duration))
}
digitalClock();