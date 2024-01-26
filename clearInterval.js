// clearIntervals----> are for stoping the setInterval execution 

let i=1;
let interval=setInterval(function(){
    if(i>5){
        
        clearInterval(interval)
    }else{
        console.log(i)
        i++;
    }
},500)